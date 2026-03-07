---
tags: wiki macos spotlight
title: Disabling Spotlight indexing on external volumes
---

# Disabling for specific volumes

According to ["Spotlight on search: How Spotlight works"](https://eclecticlight.co/2021/01/28/spotlight-on-search-how-spotlight-works/) (2021-01-08)

> The simplest way to exclude volumes and folders from Spotlight’s database is to add them to the **Privacy** list in the **Spotlight** pane, in System Preferences.

It also notes that the trick of:

> putting an empty file named `.metadata_never_index` inside the folder; this no longer works in recent macOS.

**(2026-03-07):** I tested adding removable (USB) volumes to the ignored volumes list. It seems that once unmounted, they disappear from the list. On remounting, they do not reappear in the list. However, perhaps because of the setting below, when I insert one of these volumes again, `mdutil -sa` does report the following:

```
/Volumes/Nemesio:
    Indexing and searching disabled.
```

# Disable for all external volumes

Claude tells me this setting might work, but I don't have confirmation of that:

```
sudo defaults write /Library/Preferences/com.apple.SpotlightServer.plist ExternalVolumesIgnore -bool true
```

[Kagi] indicates the original source is ["Disable Spotlight indexing of network volumes"](https://enterprisemac.bruienne.com/2015/09/15/disable-spotlight-indexing-of-network-volumes/) (2015-09-15; see also [web.archive.org snapshot](https://web.archive.org/web/20230607092723/https://enterprisemac.bruienne.com/2015/09/15/disable-spotlight-indexing-of-network-volumes/)):

> To have mds ignore all external volumes including network volumes run the following command:
>
> ```
> $ sudo defaults write /Library/Preferences/com.apple.SpotlightServer.plist ExternalVolumesIgnore -bool True
> ```
>
> To be able to re-enable indexing for certain external volumes, run this command instead:
>
> ```
> $ sudo defaults write /Library/Preferences/com.apple.SpotlightServer.plist ExternalVolumesDefaultOff -bool True
> ```

The page then goes on to describe how the author uses the [Hopper](https://www.hopperapp.com) disassembler to find candidate strings in the `mds` binary, eventually leading to:

- `CFPreferencesGetAppBooleanValue`
- `ExternalVolumesIgnore`
- `ExternalVolumesDefaultOff`

And these log messages:

- `“ExternalVolumesIgnore” is set. All external volumes (except backup) will be ignored`
- `“ExternalVolumesDefaultOff” is set. All external volumes (except backup) will default off, override with mdutil -i on`

And ultimately with further digging establishes that `kMDSPreferencesName` is `/Library/Preferences/com.apple.SpotlightServer.plist`.

So, finally, the author sets the preferences then attaches a network volume, and finally confirms that the following log entry appears in `/var/log/system.log`:

```
9/15/15 10:14:08.486 PM mds[18428]: (Normal) DiskStore: "ExternalVolumesIgnore" is set.  All external volumes (except backup) will be ignored
```

FWIW, in my own testing (2026-03-07), I was _not_ able to reproduce the log message in `/var/log/system.log`, but as noted above, when I reinserted one of my removable volumes, `mdutil -sa` reports:

```
/Volumes/Nemesio:
    Indexing and searching disabled.
```

<!-- References -->

[Kagi]: /wiki/Kagi
