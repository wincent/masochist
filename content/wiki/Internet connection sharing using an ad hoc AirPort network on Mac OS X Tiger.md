---
tags: wiki
---

Just a quick tip for something that may be non-obvious: **do not** try to set up Internet connection sharing in the following order:

1.  Create a new ad hoc network using the [AirPort](/wiki/AirPort) menu extra.
2.  Turn on Internet connection sharing in the "Sharing" panel of the System Preferences.

I found that every time I did this my just-created network would disappear, to be replaced with an older network. I had no idea where these older network settings were coming from.

The correct way to do this is in the following order:

1.  Turn on Internet connection sharing in the "Sharing" panel of the System Preferences.
2.  There is no step 2: an ad hoc network will automatically be created and you can control the settings for it (WEP encryption etc) by clicking on the options button in the "Sharing" panel.

So it turns out that my ad hoc network was getting wiped out and the older settings were being used from within the "Sharing" panel. I consider this to be a bug as it happens without any visual warning and is puzzling to the user until you've figured out the quirky behaviour -- the OS should probably offer a dialog warning that a new network will be created, or there should at least be a highly visible check box in the panel to use the existing AirPort network -- but at least it has a workaround.
