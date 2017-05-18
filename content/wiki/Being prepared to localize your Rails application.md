---
tags: rails wiki
---

Localizing your application during its early development stages may reduce your ability to change and move forward quickly. Nevertheless, it may be useful to prepare the way for later localization; that is, lay down some infrastructure which won't require too much effort during the early stages but which will make the job of localizing in the future somewhat easier.

This article describe one technique for doing this.

# Goal

The goal is to regularly use a `_` localization function styled like [gettext](/wiki/gettext) where ever user-visible strings appear in your code base. You won't actually perform any localizations during development, and the functions you insert won't alter your strings in any way, but the code base will be ready for localization if you decide to go ahead and do so in the future.

# Add a [spec](/wiki/spec) describing the desired behaviour

In the spirit of [Behaviour-Driven Development](/wiki/Behaviour-Driven_Development), we'll write a [spec](/wiki/spec) before writing any other code.

In `spec/lib/kernel_spec.rb` add a [spec](/wiki/spec) like this:

    require File.dirname(__FILE__) + '/../spec_helper'

    describe 'The "_" localization method' do
      
      it 'should return the passed-in string' do
        _('foobar').should == 'foobar'
      end
      
      it 'should return nil if passed nil' do
        _(nil).should be_nil
      end
      
    end

# Implement desired behaviour

In `lib/kernel.rb` add the minimal code to make the [spec](/wiki/spec) pass:

    module Kernel
      def _(localize)
        localize
      end
    end

# Customize configuration

In `config/environment.rb` add a `require` so that the `_` method will be available throughout your application:

    require File.dirname(__FILE__) + '/../lib/kernel.rb'

# Use localization function

Now when developing user-visible strings that should be localized, use the newly defined `_` function; that is:

    flash[:error] = _('Invalid login name or passphrase')

Instead of:

    flash[:error] = 'Invalid login name or passphrase'

As you can see, this entails adding some additional punctuation (an underscore and parentheses) to each user-visible string, but only a minimal effort is required.

# Conclusion

Now the basic infrastructure is in place so that when the time comes to "flip the switch" and do real localization you can insert [gettext](/wiki/gettext) into your project, roll your own, or shoe-horn just about any localization plugin into your `_` method.

Obviously the technique described here is only worthwhile if you know that it's likely that you'll one day want to localize your project. If you have no intention of ever doing so then it is almost certainly a wasted effort.
