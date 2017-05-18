---
tags: wiki
cache_breaker: 1
---

# Troubleshooting

About 90% of the time you can avoid filing a bug report by performing some basic troubleshooting first.

## Rule out preference file corruption

Shut down the program, drag the preferences file to the Desktop, and then restart the program.

Preference files are stored in `/Users/<your user name>/Library/Preferences/` and have names like `org.wincent.Synergy.plist`, or `com.wincent.WinSwitch.plist`.

If the problem goes away, you know you had a corrupt preferences file. (**Note:** Your preferences file may contain your registration information so you should make sure that you have a copy of your license details before disposing of the file entirely.)

## Try an uninstall/reinstall cycle

Sometimes in the day-to-day use of a system files get moved, deleted and overwritten. If uninstalling and then reinstalling fixes your problem then you'll know that your previous installation was somehow damaged.

## Eliminate potential conflicts with third-party software

A good example of where third-party software can cause problems is with [Synergy](/wiki/Synergy), which talks to [iTunes](/wiki/iTunes). Before reporting a bug in Synergy you should review your system and see if you have any other third-party software installed that talks to iTunes and could be interfering. Try to reproduce the issue when the other software is uninstalled or disabled. If you can't reproduce it, then you know you've discovered a conflict.

## Try from another user account

Create another account if you don't have one on your machine yet. If you can't reproduce the problem then you'll know something specific to your user account is triggering the problem — whether it be corrupt fonts or something bad in the caches — and this narrows the scope of the investigation.

## Try another machine

Try reproducing the problem on another machine. This can help to identify factors which contribute to the problem (such as operating system versions on which the problem exists or don't exist; hardware and peripherals which appear related to the problem, and so forth).

## Try rebooting

Rebooting returns your machine to what is hopefully a "known good" state, something that may not be true if your machine has been running for hours, days or weeks. If the problem goes away then you know that something in the environment was triggering the issue.

## Check for a corrupt disk

If you are seeing generalize problems there may be an issue with a corrupt filesystem rather than a bug in a specific piece of software. Try using the "First Aid" tab of the Disk Utility (`/Applications/Utilities/Disk Utility`) to verify and possibly repair your disk(s).

# Search first

If you can't solve the problem through troubleshooting as described above then you should file a bug report.

But before you do, go to the [issue tracker](/support) and perform a search. There may be an existing report already in the database, and adding a comment to that report rather than opening a new one will be easier for you and will help to get the problem solved more quickly.

The idea of the public database is that bugs will get squished more quickly when people share information. By comparing similarities and differences between the experiences of different users, common factors can be identified, and causes targeted.

# Reporting

It's very important that you provide high-quality information with your bug report. The more detail and accuracy in your report, the more likely that the bug will get fixed.

## Include Crash Reporter logs

If your bug involves a crash, look for a crash log in `/Users/<your user name>/Library/Logs/CrashReporter/`.

If the log entry is relatively short, you can paste it directly into your bug report. If the log is very long, you can email it to me at <win@wincent.com>. (The ability to add attachments to the issue tracker is coming soon. Some products include a built in crash reporter which allows you to submit crash reports with a click.)

## Use the Activity Monitor

If the program is hung (stuck, or "beachballing") but hasn't crashed, you may be able to collect useful information by doing a sample with the Activity Monitor application (in `/Application/Utilities/`). Find the stuck process in the list, double-click it to get more information, and then click the "Sample" button. The output from the sample could prove useful in finding exactly where the program is stuck.

## Include relevant `system.log` and `console.log` output

Use the [Console.app](/wiki/Console.app) (in `/Applications/Utilities/`) to see if anything relevant was printed to the `system.log` or `console.log` files at the time of the problem.

## Include system and version information

Tell me what operating system you are running (including the version) and the exact version of the program you're reporting the bug for.

## Describe how to reproduce the problem

Reproducibility is the most important factor in getting a bug squished. The enemies of getting bugs fixed are vagueness and imprecision.

Rather than being vague and saying "it doesn't work", be precise and detailed and describe how "when I click 'X' I expect to see 'Y' but instead see 'Z'". Provide a "recipe" describing the steps necessary to make the problem occur.

## One bug per ticket

Make sure that your report only contains one problem.

# About this page

This is an updated version of the article that I wrote in 2004 titled, "[How to file a good bug report](http://wincent.com/a/knowledge-base/archives/2004/11/how_to_file_a_g.php)".
