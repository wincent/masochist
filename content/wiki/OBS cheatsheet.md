---
tags: wiki
---

Just making some notes for this stuff because I find it tremendously fiddly and sensitive.

# OBS

## Audio Mixer

- Audacious
  - Filters:
    - Duckety "Ducking" McDuckface
      - Ratio: 12.00:1
      - Threshold: -35.00 dB (very sensitive to noise in environment, the louder I am, the closer I can get to zero, as I and the environment get quieter, I have to drop lower).
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
    - Audio Monitoring: Monitor and Output

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

- Playback
  - System sounds: 100%
  - Audacious: 100% - Blue Microphones Analog Stereo (ie. just need to output it to something other than my headphones)
  - OBS-Monitor: Mic/Aux on, 100% - MOMENTUM 3
  - OBS-Monitor: Audacious on, 100% - MOMENTUM 3
- Recording
  - OBS: Mic/Aux 100% from: Blue Microphones Analog Stereo
  - OBS: Audacious 100% from: Unknown input (shows up like this when you select the Audio Source in OBS and set it to use Blue Microphones Analog Stereo)
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
