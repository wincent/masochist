---
tags: rr wiki
cache_breaker: 1
---

# Proxying

## mock proxy

Confirm a message was sent, but pass it through to original implementation:

```ruby
# call to be tested:
@forums = Forum.all

# spec:
mock.proxy(Forum).all
```

This is useful where later code depends on the return value of the mocked call, and without `proxy` we would otherwise have to manually specify an object to be returned, something which we are not interested in doing if our intention in the spec is only to confirm that `Forum.all` was sent:

```ruby
# lengthier manual set-up:
mock(Forum).all { [Forum.make!] }
```

# Chaining

## top-level stub, second-level mock

Here we want to confirm that a message was sent at the second level:

```ruby
# call chain to be tested:
@forum = Forum.find(params[:id])
@forum.to_json(...) # <== want to test this call

# spec:
@forum = Forum.make!
stub(Forum).find(@forum.id).mock(@forum).to_json(anything)
```

Note that we can also confirm at both levels of the chain:

```ruby
mock(Forum).find(@forum.id).mock(@forum).to_json(anything)
```

But in practice if the first level stub is not exercised, the second level mock will fail anyway, so it is not necessary to use `mock` at both levels, unless it is pertinent to the spec to test the exact params passed into the top-level method.

## top-level stub, second-level stub

Here we want to inject a return value at the second level:

```ruby
# call chain to be tested:
@forum = Forum.find(params[:id])
if @forum.update_attributes(params[:forum])
  ...
else
  ... # <== want to test this code path
end

# spec:
@forum = Forum.make!
stub(Forum).find(@forum.id).stub(@forum).update_attributes(anything) { false }
```

We can change either of these stubs for mocks if we want an exception to be raised if the message isn't sent:

```ruby
stub(Forum).find(@forum.id).mock(@forum).update_attributes(anything) { false }
mock(Forum).find(@forum.id).mock(@forum).update_attributes(anything) { false }
mock(Forum).find(@forum.id).stub(@forum).update_attributes(anything) { false }
```

And we can use a more lax double for the top-level if the circumstances allow it (ie. no other calls to `find` are expected):

```ruby
stub(Forum).find.stub(@forum).update_attributes(anything) { false }
```

Another example:

```ruby
# in controller
@tag = Tag.find_by_name! params[:id]
if @tag.update_attributes params[:tag]
  ...
else
  ... # <= want to test this code path
end

# in spec
stub(Tag).find_by_name!(tag.name).stub!.update_attributes { false }
```

## multi-level stubbing and mocking

```ruby
# given this method:
def new
  @user   = User.new
  @email  = @user.emails.build # <== want to confirm the calls to "emails" and "build"
end

# spec:
stub(User).new.mock!.emails.mock!.build
```

Note that there are other specs we can (and should) write which complement this one:

```ruby
describe '#new' do
  it 'assigns a new user' do
    get :new
    assigns[:user].should be_kind_of(User)
    assigns[:user].should be_new_record
  end

  it 'assigns a new email' do
    get :new
    assigns[:email].should be_kind_of(Email)
    assigns[:email].should be_new_record
  end

  it 'associates the email with the user' do
    stub(User).new.mock!.emails.mock!.build
    get :new
  end

  it 'renders users/new' do
    get :new
    response.should render_template('users/new')
  end

  it 'succeeds' do
    get :new
    response.should be_success
  end
end
```

## Alternatives to multi-level chaining

Given a method like this:

```ruby
def create
  @user = User.new params[:user]
  @email = @user.emails.build :address => @user.email
  if @user.save
    ...
  else
    ... # <= want to test this code path
  end
end
```

Rather than mocking or stubbing the `User.new` call, or touching the `@user.emails.build` chain, we can use `instance_of` to just target the `save` call and forget about the rest:

```ruby
stub.instance_of(User).save { false }
```

# General observations

Sometimes doubles can interact in bizarre and unpredictable ways, so it is absolutely important to check that your specs properly fail when the message expectations are violated. That is, you *must* ensure you've got "red" specs in place before you add or correct the implementation to turn them "green".

## Example

Given this code:

```shell
@paginator = RestfulPaginator.new params, Snippet.published.count, snippets_path, 10
@snippets = Snippet.recent.offset @paginator.offset
```

Among, other things, I wanted to confirm that the correct offset parameter was being passed in to the `Snippet.recent.offset` method.

I would have expected this kind of mock to work:

```ruby
stub(Snippet).recent.mock!.offset(10)
```

But, curiously, it does not (it accepts any parameters rather than the required `10`). I tried alternative syntaxes and methods of chaining, but in the end the only way I could get it to work correctly was to stub out the other call on the `Snippet` class as well:

```ruby
stub(Snippet).published.stub!.count { 100 }
stub(Snippet).recent.mock!.offset(10)
```

This is puzzling because the `published` call is not at all related to the `recent` call (ie. `published` does not call `recent` internally), so I can't see how or why it might interfere with the other stub.

Whatever the cause, the lesson is clear: make sure your specs fail *first*, otherwise you may end up with an implementation that is incorrect but your mocks won't alert you to the problem.

# Related

-   [Rails model testing cheatsheet](/wiki/Rails_model_testing_cheatsheet)
-   [Rails view testing cheatsheet](/wiki/Rails_view_testing_cheatsheet)
-   [Rails controller testing cheatsheet](/wiki/Rails_controller_testing_cheatsheet)
-   [Rails helper testing cheatsheet](/wiki/Rails_helper_testing_cheatsheet)
-   [Rails mailer testing cheatsheet](/wiki/Rails_mailer_testing_cheatsheet)
-   [Steak cheatsheet](/wiki/Steak_cheatsheet)
