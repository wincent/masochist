---
tags: rspec textmate wiki
---

I've been using the excellent `spec_mate` tool from within the [RSpec](/wiki/RSpec) [TextMate](/wiki/TextMate) bundle to run [RSpec](/wiki/RSpec) [specifications](/wiki/specifications) from within the editor. The trouble was that it didn't work reliably -- half the time it would fail to run at all -- so I attributed the intermittent problems to bugs in `spec_mate`.

It turns out that the intermittent nature of the fault was caused by differences in the `PATH` environment variable. If I launched [TextMate](/wiki/TextMate) from the [GUI](/wiki/GUI) then `spec_mate` would fail with errors like this:

    /Users/wincent/Library/Application Support/TextMate/Bundles/RSpec.tmbundle/Support/lib/spec_mate.rb:1:in `require': No such file to load -- rubygems (LoadError) from /Users/wincent/Library/Application Support/TextMate/Bundles/RSpec.tmbundle/Support/lib/spec_mate.rb:1 from /tmp/temp_textmate.VXOsUF:3:in `require' from /tmp/temp_textmate.VXOsUF:3

But if I launched from within the terminal using `mate` then everything worked fine. It took a long time for me to wake up and realize that the intermittent failures were caused by the different launch techniques; my launch patterns are totally random and sometimes mixed: I launch from both the [command line](/wiki/command_line) and the [GUI](/wiki/GUI), and when [TextMate](/wiki/TextMate) is already running I'll open files for editing from within the [GUI](/wiki/GUI) and from the [command line](/wiki/command_line), depending on where I am at the time.

It turns out that when you launch using `mate` then you get a nice `PATH` environment, inherited from the shell (usually defined in `~/.bash_profile`). But when you launch from the [GUI](/wiki/GUI) you get a totally empty environment and this causes `spec_mate` to fail because it can't find [RubyGems](/wiki/RubyGems). Not a big deal because you can still run your [specs](/wiki/specs) as normal [Ruby](/wiki/Ruby) scripts using Command-R, but using `spec_mate` is much nicer because you can run individual specs much more easily.

When the suspicion that this was the cause entered my mind I tried to confirm it by launching [TextMate](/wiki/TextMate) with `mate` and running a shell script that contained only the `export` command, showing me the environment. Then I relaunched from the [GUI](/wiki/GUI) and tried the same: surprise, surprise, the environment was still replete with settings. It seems that when you choose "Run Script" from the "Shell Script" bundle [TextMate](/wiki/TextMate) employs a full shell that sources your `~/.bash_profile` and so picks up your `PATH` and all other environment settings.

Using a one-line [Ruby](/wiki/Ruby) command, `puts ENV`, and hitting Control+Shift+E (short for "Execute Line as Ruby") I was able to immediately establish that the environment was totally empty when [TextMate](/wiki/TextMate) was launched from the [GUI](/wiki/GUI). I should have done it the [Ruby](/wiki/Ruby) way right from the beginning, of course.

# The fix

Having identified the cause, implementing the solution was very easy.

First, check the environment settings for [GUI](/wiki/GUI) apps (read at login):

    default read ~/.MacOSX/environment

Add an appropriate `PATH` setting:

    defaults write ~/.MacOSX/environment PATH "/usr/local/bin:/bin:/sbin:/usr/bin:/usr/sbin"

Finally, confirm the changes are as you want them:

    default read ~/.MacOSX/environment

Changes take effect on the next login.
