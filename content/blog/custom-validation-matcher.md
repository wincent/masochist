---
title: Custom validation matcher
---

Thanks to [FixtureReplacement](http://www.wincent.com/knowledge-base/FixtureReplacement) my [Rails](http://www.wincent.com/knowledge-base/Rails) model [specs](http://www.wincent.com/knowledge-base/specs) are looking awfully clean:

    describe User, 'validating the login name' do
      it 'should require it to be present' do
         u = new_user(:login_name => nil)
         u.should_not be_valid
         u.should have_at_least(1).errors_on(:login_name)
      end

      # examples continue here...

    end

Note how the `new_user` method provided by FixtureReplacement allows me to focus only on the salient attributes for the example; in this case that's the overridden `login_name` attribute. Constructing new model instances is a breeze in this way, and the spec itself is much more intention-revealing because the salient bits and nothing else are right there up front.

And I've just whipped together a custom validation matcher to make it this kind of spec even clearer:

    describe User, 'validating the login name' do
      it 'should require it to be present' do
         u = new_user(:login_name => nil)
         u.should fail_validation_for(:login_name)
      end

      # another example, this one written on a single line
      it 'should disallow trailing spaces' do
        new_user(:login_name => 'foobar ').should fail_validation_for(:login_name)
      end

      # examples continue here...

    end





Here's the custom matcher, which I've stuck in my `spec/spec_helper.rb` file:

    module Spec
      module Rails
        module Matchers
          class FailValidationFor # :nodoc:
            def initialize attribute
              @attribute = attribute
            end

            def matches? model
              @model = model
              !@model.valid? and !@model.errors.on(@attribute).nil?
            end

            def failure_message
              "expected to fail validation with errors on #{@attribute} but was #{self.valid}; #{self.errors}"
            end

            def negative_failure_message
              "expected to pass validation with no errors on #{@attribute} but was #{self.valid}; #{self.errors}"
            end

            def description
              "fail validation for attribute #{@attribute}"
            end

            def valid
              if @model.valid?
                'valid'
              else
                'invalid'
              end
            end
            
            def errors
              if @model.valid?
                'no errors'
              else
                @model.errors.full_messages.to_sentence
              end
            end
          end # class FailValidationFor

          def fail_validation_for attribute
            FailValidationFor.new attribute
          end
        end # module Matchers
      end # module Rails
    end # module Spec
