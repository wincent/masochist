---
tags: rails
cache_breaker: 1
---

In this article I want to write about some of the difficulties I had getting passphrases in a [Rails](/wiki/Rails) `User` model to validate correctly.

# Basic passphrase validation

The validation for the `passphrase` attribute is fairly straightforward, although some additonal complication stems from the fact that it is a virtual attribute (with an instance variable in the model rather than a full-fledged column in the database); the real, underlying attributes in the database are a `passphrase_digest` and `passphrase_salt`.

      attr_reader                   :passphrase
      attr_accessor                 :passphrase_confirmation, :old_passphrase
      attr_accessible               :passphrase, :passphrase_confirmation, :old_passphrase

The requirements for the validation of the passphrase virtual attribute are:

-   Users must supply a passphrase when signing up
-   Passphrases should be between 8 and 64 characters in length
-   It is not necessary to supply a passphrase when updating an existing record
-   Confirmation must be supplied when setting a new passphrase on an existing record

These requirements lead to the following validations:

      MINIMUM_PASSPHRASE_LENGTH     = 8
      MAXIMUM_PASSPHRASE_LENGTH     = 64
      
      validates_presence_of         :passphrase,
                                    :on         => :create
      validates_length_of           :passphrase,
                                    :in         => MINIMUM_PASSPHRASE_LENGTH..MAXIMUM_PASSPHRASE_LENGTH,
                                    :if         => Proc.new { |u| !u.passphrase.blank? }
      validates_confirmation_of     :passphrase,
                                    :if         => Proc.new { |u| !u.passphrase.blank? }

# Countering cookie-capture attacks

Things start to get complicated if we want to guard against [cookie](/wiki/cookie) capture attacks. The attack scenario is as follows:

1.  Attacker intercepts session cookie
2.  Attacker logs on to site using intercepted cookie
3.  Attacker changes user's passphrase, effectively locking user out

We counter this by adding an additional requirement:

-   In order to update the passphrase on an existing account, must also supply the old passphrase.

In this way the attacker must not only intercept the cookie but also know the old passphrase of the victim, which is not very likely.

There are a few other things we can do to reduce risk of cookie capture attacks:

-   Change session keys as often as practically possible (without inconveniencing the user).
-   Use [SSL](/wiki/SSL) for logged in users, so that their cookies don't get sent in the clear:
    -   [RFC 2109](/wiki/RFC_2109) defines the `Secure` attribute that you can set on cookies (in [Rails](/wiki/Rails) you would do this by passing `:secure => true` when you set the cookie); this *advises* the user agent (the browser) to only send the cookie over a secure channel (effectively "secure" here means [HTTPS](/wiki/HTTPS)). Not that this is only advisory, so it's still possible that the user agent may send the cookie in the clear.
    -   If a user agent respects the `Secure` attribute, then you can redirect users to the secure login page over HTTPS, and on *that* page the user agent will send the cookie so you can automatically log in the user without them having to enter their credentials.
    -   In order to *completely* rule out the possibility of cookie capture in the face of user agents which may not respect the `Secure` attribute, the only watertight solution is to *never* permit access to your site via [HTTP](/wiki/HTTP) and serve absolutely everything over [HTTPS](/wiki/HTTPS); depending on the site, this may be resource intensive because SSL traffic generates more load on the CPU.

## First, flawed attempt at validation

My first attempt at validation was as follows, and it seemed to work at first:

      validates_presence_of         :old_passphrase,
                                    :on         => :update,
                                    :if         => Proc.new { |u| !u.passphrase.blank? }

      validates_each                :old_passphrase,
                                    :on         => :update,
                                    :allow_nil  => true, 
                                    :if         => Proc.new { |u| !u.passphrase.blank? } do |model, attribute, value|
        database_record = User.find(model.id)
        if User.digest(value, database_record.passphrase_salt) != database_record.passphrase_digest
          model.errors.add(attribute, 'must match old passphrase on record')
        end
      end

This seemed to work and all [specs](/wiki/specs) passed, but later on I added a seemingly unrelated [spec](/wiki/spec) that revealed the following problem: new users created using `User.create` were also failing this validation, despite the fact that I had specified it should only run on `:update`. That is, the following scenario was failing:

    user = User.create(params)
    user.valid? # always fails!

## Initial diagnosis

Initial diagnosis showed that the `validates_each` block was being called even on new records created with `User.create`. My initial suspicion, therefore, was that [Rails](/wiki/Rails) does not allow `:on` and `:if` to be specified simultaneously in the same validation. In the end, it turned out that this was not the cause of the problem, and I still don't actually know for sure whether you can combine `:on` and `:if` in the same validation, although it seems that you can.

## Second, failed attempt

So in my next revision I aimed to avoid the supposed conflict between `:on` and `:if` by rolling all of the functionality into the `:if` `Proc`:

      validates_presence_of         :old_passphrase,
                                    :if         => Proc.new { |u| !u.new_record? and !u.passphrase.blank? }

      validates_each                :old_passphrase,
                                    :allow_nil  => true, 
                                    :if         => Proc.new { |u| !u.new_record? and !u.passphrase.blank? } do |model, attribute, value|
        database_record = User.find(model.id)
        if User.digest(value, database_record.passphrase_salt) != database_record.passphrase_digest
          model.errors.add(attribute, 'must match old passphrase on record')
        end
      end

You can see here how I was trying to substitute the `:on => :update` criterion with an explicit test to see whether the record was new or not (`!u.new_record?`). In both cases this strategy won't work:

1.  Use `User.create` to create a new record: `!u.new_record?` will now return `true`
2.  Call `user.valid?`: validation proceeds even though you don't want it to, because `!u.new_record?` is `true` and `!u.passphrase.blank?` is `true` as well.

## The real cause of the problem

Digging a little deeper I discovered the real cause of the problem. The problem lies in the existing implementation of the `valid?` method in [Rails](/wiki/Rails) (current `ActiveRecord` source at the time of writing):

    777:     def valid?
    778:       errors.clear
    779: 
    780:       run_validations(:validate)
    781:       validate
    782: 
    783:       if new_record?
    784:         run_validations(:validate_on_create)
    785:         validate_on_create
    786:       else
    787:         run_validations(:validate_on_update)
    788:         validate_on_update
    789:       end
    790: 
    791:       errors.empty?
    792:     end

Analysis of this method reveals why the previous workaround didn't work. Intuition and the fact that you can use the `:on` clause to restrict validation to `:save` (the default), `:create`, or `:update` might lead you to believe that the `valid?` method will call the validations in one of three cases:

-   Whenever saving (the default); *or*
-   Only when creating; *or*
-   Only when updating

In reality however, the real options are:

-   Whenever saving; *and*
-   One of the following:
    -   When creating; or
    -   Any other time

It's the "any other time" bit which tripped me up. It means that every single time you call `valid?` on an existing record you're actually calling the `:update` validations:

    user = User.create # "save" validations, "create" validations
    user.valid? # "save" validations, "update" validations

This to me is counter-intuitive and so we'll have to chalk it up as another [Rails "gotcha"](/wiki/Rails_%22gotcha%22).

## The final solution

Armed with knowledge of the true cause of the problem we can now work towards a solution. I didn't however, like the idea of tying my solution to knowledge of the internal workings of `ActiveRecord`, workings that could change at any time in the future.

The solution actually comprises two parts.

### Part 1: Validation

The first step is to dispense with the `validates_presence_of` helper and do all the work from inside `validates_each`. I made the following changes:

-   Use `:on => :update` to only fire on updates (although we know that [Rails](/wiki/Rails) will fire us whenever the user calls `valid?` and so further code inside the validation will be needed)
-   Drop `:allow => :nil` because that could cause validation to be skipped in some cases where it shouldn't (such as when the user really does try to update the passphrase on an existing record and doesn't supply the old password at the same time)
-   Drop the `:if` clause because of the suspicion that it doesn't work in conjunction with `:on`

<!-- -->

      validates_each                :old_passphrase,
                                    :on         => :update do |model, attribute, value|
        unless model.passphrase.blank?
          database_record = User.find(model.id)
          if value.blank?
            model.errors.add(attribute, "can't be empty") # same as Rails default for validates_presence_of
          elsif User.digest(value, database_record.passphrase_salt) != database_record.passphrase_digest
            model.errors.add(attribute, 'must match old passphrase on record')
          end
        end
      end

As I wasn't sure about the interaction between `:on` and `:if` I also tried this version:

      validates_each                :old_passphrase,
                                    :if         => Proc.new { |u| !u.passphrase.blank? },
                                    :on         => :update do |model, attribute, value|
        database_record = User.find(model.id)
        if value.blank?
          model.errors.add(attribute, "can't be empty") # same as Rails default for validates_presence_of
        elsif User.digest(value, database_record.passphrase_salt) != database_record.passphrase_digest
          model.errors.add(attribute, 'must match old passphrase on record')
        end
      end

This slightly shorter version still passes all the [specs](/wiki/specs), so until evidence leads me to believe otherwise, I am going to go with the combined `:on`/`:if` version.

### Part 2: ActiveRecord callback

The critical piece of the puzzle is the use of the following `ActiveRecord` callback in the `User` model:

      def after_save
        @passphrase               = nil
      end

By clearing this virtual attribute we ensure that it doesn't interfere with later validations. The solution is quite clean because it doesn't depend on knowledge of the internal workings of the `valid?` method.

The cycle now looks like this:

1.  Create a new user with `User.create`
    1.  [Rails](/wiki/Rails) runs the `:save` validations:
        1.  Here the `validates_length_of :passphrase` validation runs (and passes)
    2.  [Rails](/wiki/Rails) then the runs our `:create` validations
        1.  This is where our `validates_presence_of :passphrase` validation is called (and passes)
    3.  Validation has completed successfully at this point
    4.  The `after_save` callback fires and the `@passphrase` instance variable is cleared
2.  Now we call `user.valid?`
    1.  [Rails](/wiki/Rails) runs the `:save` validations:
        1.  The `validates_length_of :passphrase` validation is skipped because `@passphrase` is no longer set
    2.  [Rails](/wiki/Rails) runs the `:update` validations:
        1.  This time our custom `validates_each :old_password` validation is considered, but again doesn't run because `@passphrase` is not set
    3.  Validation has completed successfully

In the case where a user sets a new passphrase the cycle looks like this:

1.  [Rails](/wiki/Rails) runs the `:save` validations:
    1.  Here the `validates_length_of :passphrase` validation runs (and will pass if the user satisfies the length requirements); a missing password will cause a failure here, so it doesn't matter that the `validates_presence_of :passphrase` validation is not performed
2.  [Rails](/wiki/Rails) runs the `:update` validations:
    1.  This time our custom `validates_each :old_password` validation is considered and this time it *does* run because `@passphrase` is set
3.  At this point validation has completed (successfully or unsuccessfully, depending on the input provided by the user)

# See also

-   [Rails "gotchas"](/wiki/Rails_%22gotchas%22)

