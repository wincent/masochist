---
tags: rails wiki
cache_breaker: 1
---

# Note

When this article was originally written storing the session in the database was the faster way of storing session data. It should be noted that once the number of sessions grows pruning the table can become quite expensive (see "[Clearing out old Rails session records from a MySQL database](/wiki/Clearing_out_old_Rails_session_records_from_a_MySQL_database)" and the related ticket, [ticket \#1142](/issues/1142), "Set-up automated pruning of sessions table").

Since then, alternative stores have become available, such as the cookie-based store.

# Storing user session data in the database

For better performance, see:

<http://weblog.textdrive.com/article/196/on-rails-sessions>

In summary, uncomment this line in your `config/environment.rb` file:

    config.action_controller.session_store = :active_record_store

Then to create the sessions table run:

    rake db:sessions:create

To have the migration take effect you could do the following:

    rake migrate

Or to do this for a specific environment:

    rake RAILS_ENV=test migrate

# Example

After performing several iterations of [Behaviour-Driven Development](/wiki/Behaviour-Driven_Development) as described in [Behaviour-Driven Development with Rails](/wiki/Behaviour-Driven_Development_with_Rails) I decided that I wanted to create a `Session` model to handle user sessions (login, logout). At the same time it made sense to start storing [Rails](/wiki/Rails)' user session data in the database as described in this article.

    # create sessions migration
    rake db:sessions:create

    # create Session model and spec files
    script/generate rspec_model Session --skip-migration

    # create Session controller with appropriate actions
    script/generate rspec_controller sessions create destroy

    # perform the migrations on the development and test databases
    rake db:migrate
    env RAILS_ENV=test rake db:migrate

    # make sure all the specs still pass
    rake spec

    # check changes into SVK
    svk st | grep '?' | awk '{print $2}' | xargs svk add
    svk ci -m "Sessions model and controller (initial creation)"

The `--skip-migration` switch is needed because without it `script/generate rspec_model` will create an additional, duplicate migration to create the `sessions` table in the database (already created on the previous step).

In fact, creating the `Session` model may not be necessary at all, unless you wish to add some custom behaviour. A basic controller similar to the following may be all that is needed:

    class SessionsController < ApplicationController
      
      def create
        if current_user = User.authenticate(params[:login_name], params[:password])
          flash[:notice]  = 'Successfully logged in.'
          redirect_to home_path
        else
          flash[:error]   = 'Invalid login or password.'
          render :action => 'new'
        end
      end
      
      def destroy
        session.delete
        flash[:notice]  = 'You have logged out successfully.'
        redirect_to home_path
      end
      
    end
