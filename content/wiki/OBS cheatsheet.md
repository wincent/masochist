---
tags: wiki
title: OBS cheatsheet
---

Just making some notes for this stuff because I find it tremendously fiddly and sensitive.

Topics covered:

- **OBS:** Screencasting software.
- **Audacious:** For playing background music.
- **screenkey:** For showing keypresses.
- **irssi:** For showing Twitch chat.

# OBS

## Audio Mixer

- Audacious
  - Filters:
    - Duckety "Ducking" McDuckface
      - Ratio: 12.00:1
      - Threshold: -35.00 dB (the correct value is very sensitive to the noise level in the environment: the louder I am, the closer I can get to zero; as I and the environment get quieter, I have to drop further into negative territory).
      - Attack: 6 ms
      - Release: 1000 ms
      - Output Gain: 0.00 dB
      - Sidechain/Ducking source: Mic/Aux
- Mic/Aux
  - Filters:
    - Limiter
      - Threshold: -9.00 dB
      - Release: 60 ms
- Advanced Audio Properties
  - Audacious:
    - Volume: -15.0 dB
    - Audio Monitoring: Monitor and Output
  - Mic/Aux:
    - Volume: 0.0 dB
    - Audio Monitoring: Monitor Off (I used to monitor this, but the lag messes with your brain)

## Scenes

- "Paused"
  - Sources:
    - Audacious
    - Text
    - Image
- "Casting"
  - Sources:
    - Audacious
    - Video Capture Device (V4L2)
    - Screen Capture
      - Screen DisplayPort-1 (3840x2160 @ 0,0)
      - Capture Cursor

Note: can use the same "Audacious" source in both scenes using "Copy" and "Paste (reference)"

## Settings

### General

- Output:
  - Automatically record when streaming.
  - Keep recording when stream stops.

### Stream

- Service: Twitch
- Server: Auto (Recommended)
- Stream Key: `$TEH_SECRET_KEY`
- Maximum Video Bitrate: 6000 kbps
- Maximum Audio Bitrate: 320 kbps

### Output

- Output Mode: Simple
  - Streaming
    - Video Bitrate: 6000 Kbps
    - Encoder: Software (x264)
    - Audio Bitrate: 160
  - Recording
    - Recording Quality: Same as stream
    - Recording Format: mkv
- Output Mode: Advanced
  - Streaming
    - Rate Control: CBR
    - Bitrate: 6000 Kbps
    - CPU Usage Preset (higher = less CPU): medium

### Audio

- General
  - Sample Rate: 48 kHz
  - Channels: Stereo
- Global Audio Devices
  - Mic/Auxiliary Audio: Blue Microphones Analog Stereo
- Advanced:
  - Monitoring Device: Monitor of MOMENTUM 3

One thing to note: I was getting low latency monitoring with this set-up, but as soon as I recorded a test video, latency spiked and didn't go down again until I changed the monitoring device setting to something else and then back again.

### Video

- Base (Canvas) Resolution: 3840x2160
- Output (Scaled) Resolution: 1920x1080
- Downscale Filter: Bilinear (Fastest, but blurry if scaling)
- Common FPS Values: 30

### Hotkeys

- Casting
  - Switch to scene: Control + Print
- Paused
  - Switch to scene: Control + Pause
- Mic/Aux
  - Mute: Control + Pause
  - Unmute: Control + Print

# Audacious

- Output
  - Audio Settings...
    - Audio
      - Output Settings
        - Output plugin: PulseAudio Output

# pavucontrol

Assuming a virtual sink created with:

```bash
pactl load-module module-null-sink sink_name=Music
```

- Playback
  - System sounds: 100%
  - Audacious: 100% - Music Audio/Sink sink (ie. the virtual sink)
  - OBS-Monitor: Mic/Aux on, 100% - MOMENTUM 3; actually, this should be _off_ otherwise the lag scrambles your brain.
  - OBS-Monitor: Audacious on, 100% - MOMENTUM 3; if everything is working, you will hear the ducking of the music when you talk, even though you don't hear your own voice.
- Recording
  - OBS: Mic/Aux 100% from: Blue Microphones Analog Stereo
  - OBS: Audacious 100% from: Monitor of Music Audio/Sink sink
- Output Devices
  - Everything 100%
- Input Devices
  - Everything 100%
- Configuration
  - Everything default; eg.
    - MOMENTUM 3
      - High Fidelity Playback (A2DP Sink, codec aptX)
    - Blue Microphones
      - Profile: Analog Stereo Duplex

Note the extreme sketchiness of the "Unknown input" above, but it seems to be the only way to get all of this stuff plus the monitoring working acceptably. ("Acceptably" is a relative term; the longer my recordings go, the higher the latency of the monitoring seems to creep.)

# `screenkey`

## Starting

1. Hit Command/Super+Space to bring up dmenu launcher.
2. Type `screenkey` and hit enter.

## Configuring

Config file lives at `~/.config/screenkey.json` ([current `main` contents](https://github.com/wincent/wincent/blob/main/aspects/dotfiles/files/.config/screenkey.json), [2022-02-21 snapshot](https://github.com/wincent/wincent/blob/05c2c482244bfe452be372ed22bf1afcf94a5804/aspects/dotfiles/files/.config/screenkey.json)). Can get to preferences GUi from system tray icon, or by running `screenkey --show-settings`.

## Manipulating i3-gaps to fit `screenkey`

Given the `screenkey.json` I currently have committed to my dot-files, I need to use an outer bottom gap of 70 to stop `screenkey` from overlapping with my terminal (and other) windows.

This does this trick:

```
i3-msg gaps bottom all set 70
```

As a convenience, I made a `gaps` function ([source](https://github.com/wincent/wincent/blob/05c2c482244bfe452be372ed22bf1afcf94a5804/aspects/dotfiles/files/.zsh/functions#L183-L193)) that I can use to toggle this; example usage:

```
gaps on
gaps off
gaps 100
```

## How to turn off/on `screenkey` before/after entering passwords or other sensitive info

Hold Command/Super to reveal i3 task bar, then right-click screenkey icon in system tray and toggle the "Show keys" option.

## Troubleshooting

I install `screenkey` by default, but it has on occasion stopped working for me with:

```
ModuleNotFoundError: No module named 'dbus'
```

Uninstalling and reinstalling did not fix it:

```
yay -R screenkey
yay -S screenkey
```

But this did:

```
pip install dbus-python
```

# irssi

After initial set-up (see notes in [Arch Linux cheatsheet]), basic usage:

1. Run `irssi` in a tmux pane; this can be in the background if you want — new messages will cause tmux to show the pane as having received activity, and if they don't, you can try this[^beeps]:
   - `/set beep_when_window_active ON`
   - `/set beep_msg_level PUBLIC`
2. `/connect Twitch`.
3. `/join #greghurrell`.
4. When you're done, `/quit` or `/exit`.

[^beeps]: In theory I only have to do this once because after doing it I ran `/save`, but, you never know.

[Arch Linux cheatsheet]: /wiki/Arch_Linux_cheatsheet
