---
tags: wiki macos
title: $TMPDIR on macOS
---

This [splendid answer](https://unix.stackexchange.com/a/555214/140622) on [unix.stackexchange.com](https://unix.stackexchange.com/) explains how `$TMPDIR` values like `/var/folders/vw/zqs18mzx6w5849bkmxdst7lc0000gp/T/` are produced and used on [macOS]. I was interested in this because I wanted to know whether `$TMDDIR` was stable across reboots (tl;dr: it is), and whether it's safe to share the random-looking `$TMPDIR` value on the internet (tl;dr: it is[^security]).

[^security]: Sharing your `$USER` on the internet is relatively benign, when it has already been published in dotfiles, on YouTube, and possibly elsewhere. Sharing a BSD UID like `502` is relatively benign, as it just means it was the third local account created on the Mac (such a value is easily guessed). Sharing the UUID is also benign, as it is an effectively random local identifier generated for macOS directory services; it isn't tied to an Apple ID, or iCloud, or any online service, and has no authentication value (it's an identifier, not a credential). Knowing the value of `$TMPDIR` is not useful for a non-privileged local attacker, because filesystem permissions prevent them from accessing it, and if you have a _privileged_ local attacker then you're already hosed.

- The name under `/var/folders/` is a modified [Base32](https://en.wikipedia.org/wiki/Base32) encoding — described below — of the concatenation your MacOS User UUID and your MacOS (BSD) user ID.
- Directories are "bucketed" based on the first 2 characters of the encoding (eg. `vw`).
- The `T` subdirectory is the "user-local temp" directory, and the `C` subdirectory is the "user-local cache" directory.
- Historically, these used to be `-Tmp-` and `-Caches-` respectively.
- Because the inputs are stable across time, absent UID and UUID changes, the location of `$TMPDIR` is stable over time.
- Creation and management of these directories is complicated but handled by a Launch Daemon (`/System/Library/LaunchDaemons/com.apple.bsd.dirhelper.plist`) that runs the `/usr/libexec/dirhelper` (see `man dirhelper`); more details in the appendix below.

# Worked example

Grab BSD and macOS UUIDs:

```
$ whoami
greg.hurrell
$ id
uid=502(greg.hurrell) ...
$ dscl . -read /Users/$USER GeneratedUID
GeneratedUID: DF3F7C85-14FF-4DC2-A089-5CA9D6E7479B
```

The `base32` executable uses RFC4648 encoding, but Apple uses a modified encoding. I initially thought it was ["Crockford's Base32"](https://en.wikipedia.org/wiki/Base32#Crockford's_Base32), so I defined this shell function:

```
crockford32() {
  python3 -c "
    a = '0123456789abcdefghjkmnpqrstvwxyz'
    h = '$1'
    b = int.from_bytes(bytes.fromhex(h), 'big')
    nbits = len(h) * 4
    padded = ((nbits + 4) // 5) * 5
    b <<= (padded - nbits)
    print(''.join(a[(b >> (padded - i - 5)) & 0x1f] for i in range(0, padded, 5)))
  "
}
```

Concatenating the UUID (128 bits) and the BSD UID (in hexadecimal), and Base32 encoding gives us the following:

```
$ uuid=$(dscl . -read /Users/$USER GeneratedUID | awk '{print $2}' | tr -d '-')
$ uid=$(printf '%08x' "$(id -u)")
$ crockford32 "${uuid}${uid}"
vwzqs18mzx6w5849bjmxdst7kc0000fp
```

This mostly matches the expected output, but starts to diverge after a while because they evidently use different alphabets which skip different letters:

```
Crockford: 0123456789abcdefgh jk mnpqrst vwxyz  (skips i,l,o,u)
Apple:     0123456789abcd fgh jklmnpqrst vwxyz  (skips e,i,o,u)
```

ie. they agree on values 0–13 and 20–31, but diverge for 14–19.

So, trying again with this function:

```
apple32() {
  python3 -c "
    a = '0123456789abcdfghjklmnpqrstvwxyz'
    h = '$1'
    b = int.from_bytes(bytes.fromhex(h), 'big')
    nbits = len(h) * 4
    padded = ((nbits + 4) // 5) * 5
    b <<= (padded - nbits)
    print(''.join(a[(b >> (padded - i - 5)) & 0x1f] for i in range(0, padded, 5)))
  "
}
```

we get:

```
$ apple32 "${uuid}${uid}"
vwzqs18mzx6w5849bkmxdst7lc0000gp
```

which matches.

# See also

- ["Create Temporary Files Correctly", from Apple's Secure Coding Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/SecureCodingGuide/Articles/RaceConditions.html#//apple_ref/doc/uid/TP40002585-SW10)
- [rust-lang#131505](https://github.com/rust-lang/rust/pull/131505) showing use of `confstr(_CS_DARWIN_USER_TEMP_DIR, ...)` as a fallback when `$TMPDIR` is not set.

# Appendix

## Snapshot of `/System/Library/LaunchDaemons/com.apple.bsd.dirhelper.plist`:

Produced with `plutil -p`:

```
{
  "EnablePressuredExit" => true
  "EnvironmentVariables" => {
    "CLEAN_FILES_OLDER_THAN_DAYS" => "3"
  }
  "Label" => "com.apple.bsd.dirhelper"
  "MachServices" => {
    "com.apple.bsd.dirhelper" => true
  }
  "ProcessType" => "Adaptive"
  "ProgramArguments" => [
    0 => "/usr/libexec/dirhelper"
  ]
  "RunAtLoad" => true
  "StartCalendarInterval" => {
    "Hour" => 3
    "Minute" => 35
  }
}
```

ie.

- Registers the `com.apple.bsd.dirhelper` Mach service (which is how `confstr()` communicates with the helper).
- Runs at boot.
- Runs every day at 3:35 AM, and cleans only files older than 3 days.

## Snapshot of `man dirhelper`:

```
dirhelper(8)      System Manager's Manual     dirhelper(8)

NAME
     dirhelper – helper for special directory creation

SYNOPSIS
     dirhelper

DESCRIPTION
     The dirhelper command is a launch-on-demand helper
     for special directory creation.  It is launched in a
     privileged context via launchd in order to create
     special directories where the user would not
     otherwise have permission to do so.

     The dirhelper command should not be invoked directly.
     It will exit automatically after a period of
     inactivity.

FILES
     /System/Library/LaunchDaemons/com.apple.bsd.dirhelper.plist

SEE ALSO
     launchd(8), launchd.plist(5)

Mac OS X             November 1, 2006             Mac OS X
```

<!-- References -->

[macOS]: /wiki/macOS
