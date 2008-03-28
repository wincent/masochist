---
tags: terminal
---

Tim Wood posted instructions on how to do this [here](http://blog.omnigroup.com/2007/11/03/terminal-scripting-in-105/). This is extremely useful if you are working on different machines at the same time and you want to be able to distinguish between them at a glance, without having to scrutinize the [Terminal](/wiki/Terminal) prompt. I'm finding this particularly useful right now because I am doing a server migration and it helps me to avoid making silly mistakes.

## The `ts` ([Terminal](/wiki/Terminal) settings) script

I modified Tim's script in a couple of ways:

-   get tabs a little more directly (avoid some temporary variables)
-   provide textual feedback to the user on errors
-   don't hardcode name of "default" settings, nor try switching to them in the event of an error
-   shorter variable names ([AppleScript](/wiki/AppleScript) is already verbose enough as it is!)

The modified script looks like this:

    #!/usr/bin/osascript
    # Copyright 2007 Tim Wood
    # Copyrght 2008 Wincent Colaiuta
    #
    # Based on snippet published at:
    # http://blog.omnigroup.com/2007/11/03/terminal-scripting-in-105/

    on run (set_name)
    	set tty_id to do shell script "tty"
    	set tab_id to tab_for_tty(tty_id)
    	if tab_id is missing value then
    		return "error: failed to get tab"
    	else
    		tell application "Terminal"
    			try
    				set set_id to settings set named set_name
    			on error
    				return "error: failed to get settings set"
    			end try
    			set current settings of tab_id to set_id
    		end tell
    	end if
    end run

    on tab_for_tty(tty_id)
    	tell application "Terminal"
    		repeat with win_id in windows
    			repeat with tab_id in tabs of win_id
    				if tty of tab_id is tty_id then
    					return tab_id
    				end if
    			end repeat
    		end repeat
    	end tell
    end tab_for_tty

## Using the script

In my case I wanted to distinguish between three types of session:

-   local sessions
-   sessions on my old host, [Rackspace](/wiki/Rackspace)
-   sessions at my new host, [INetU](/wiki/INetU)

One way of doing this would be to open three [Terminal](/wiki/Terminal) windows, and in the Rackspace window do something like:

    # switch to the "pro" settings set
    ts pro
    ssh me@rackspace.example.com

And in the INetU window do:

    ts novel
    ssh me@inetu.example.com

But as Tim points out, you can set up a couple of shell functions for this. Here's what I added to my [bash profile](/wiki/bash_profile):

    inetu()
    {
      test "$TERM_PROGRAM" = "Apple_Terminal" && ts novel
      ssh $1@inetu.example.com
      test "$TERM_PROGRAM" = "Apple_Terminal" && ts wincent
    }

    inetu()
    {
      test "$TERM_PROGRAM" = "Apple_Terminal" && ts novel
      ssh $1@rackspace.example.com
      test "$TERM_PROGRAM" = "Apple_Terminal" && ts wincent
    }

Once you've sourced this you can do `inetu username` to start a new session, and notice how it restores my default settings set ("wincent") after the session closes. You'll also notice how it only takes one parameter. If you're in the habit of passing other options to [ssh](/wiki/ssh) then it would be straightforward to incorporate that with something like the following (which I haven't tested):

    sesh()
    {
      USER=$1
      shift
      test "$TERM_PROGRAM" = "Apple_Terminal" && ts novel
      ssh $@ $USER@host.example.com
      test "$TERM_PROGRAM" = "Apple_Terminal" && ts my_default
    }
