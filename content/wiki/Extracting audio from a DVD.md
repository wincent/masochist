---
tags: macos wiki
---

# Disclaimer

These are notes I made while trying to extract the audio from public domain (not copyrighted) DVDs of live convert performances. This information should not be used (and probably wouldn't help anyway) on copyrighted or copy-protected material. On the one hand, copyright law provides you with "[Fair Use](/wiki/Fair_Use)" rights that allow you time-shift and format-shift the content you purchased. On the other hand, laws like the [DMCA](/wiki/DMCA) make it illegal to circumvent the [DRM](/wiki/DRM) on DVDs that you've purchased, and this [DRM](/wiki/DRM) prevents you from exercising your [Fair Use](/wiki/Fair_Use) rights.

Because of the [DMCA](/wiki/DMCA) I am not going to link to software that would enable you to circumvent any [DRM](/wiki/DRM), nor will I provide instructions on how to do so.

# Demuxing

I usually try using [bbDEMUX](/wiki/bbDEMUX) directly on the DVD first and if that fails I fall back to using [MacTheRipper](/wiki/MacTheRipper) to extract the [VOB](/wiki/VOB) files and then I try running [bbDEMUX](/wiki/bbDEMUX) on those.

[bbDEMUX](/wiki/bbDEMUX) is fairly out of date, no [Universal Binary](/wiki/Universal_Binary) version is available, and it runs slowly under [Rosetta](/wiki/Rosetta). The drag-and-drop feature seems broken in the main window (although dragging to the Dock icon seems to work, as does the "Open" item in the "File" menu). [bbDEMUX](/wiki/bbDEMUX) can fail even on non-copy-protected DVDs, but the [MacTheRipper](/wiki/MacTheRipper) step often helps.

# [AC3](/wiki/AC3) conversion

After demuxing you will have a bunch of [AC3](/wiki/AC3) files, one per [VOB](/wiki/VOB), but neither [QuickTime](/wiki/QuickTime) nor [iTunes](/wiki/iTunes) can read them. See "[Installing PAC (Perl Audio Converter) on Mac OS X](/wiki/Installing_PAC_%28Perl_Audio_Converter%29_on_Mac_OS_X)" for a description of using [PAC](/wiki/PAC) to perform the conversion; I've never been able to get that technique to work (I always get a message like "Unsupported codec (id=86020) for input stream \#0.0").

I then tried using the "Streaming/Export Wizard" of [VLC](/wiki/VLC):

1.  Drag the [AC3](/wiki/AC3) files to the [VLC](/wiki/VLC) playlist window.
2.  From the "File" menu choose "Streaming/Export Wizard".
3.  Choose "Transcode/Save to file".
4.  Choose an audio-only transcode. I choose to use the [FLAC](/wiki/FLAC) codec because it is lossless, and a [RAW](/wiki/RAW) container type.

I then tried using [PAC](/wiki/PAC) as follows:

    pacpl --rawtoflac --file *.raw

I was told that I needed [SoX](/wiki/SoX), so I installed that (see "[Installing SoX 13.0.0 on Mac OS X](/wiki/Installing_SoX_13.0.0_on_Mac_OS_X)").

Then [PAC](/wiki/PAC) couldn't find the `sox` executable so I ended up editing the configuration file at `/etc/pacpl/pacpl.conf`.

This time [PAC](/wiki/PAC) worked and converted the files to [FLAC](/wiki/FLAC). I then used `flac` to convert them to [WAV](/wiki/WAV) format.

    flac -d *.flac

Finally I had something I could play in [iTunes](/wiki/iTunes) (and there convert to [Apple Lossless](/wiki/Apple_Lossless)) but on playing the tracks I discovered that they were all 100% white noise. I checked and the [FLAC](/wiki/FLAC) files were white noise as well. I checked the "raw" files and [VLC](/wiki/VLC) couldn't play them despite the fact that it created them, so here I think [VLC](/wiki/VLC) is to blame.

I tried transcoding again, this time using [FLAC](/wiki/FLAC)/[OGG](/wiki/OGG) instead of [FLAC](/wiki/FLAC)/[RAW](/wiki/RAW). The resulting [OGG](/wiki/OGG) files couldn't be played in [VLC](/wiki/VLC) (why then did it create them with reporting any errors?).

I decided to forget about trying with VLC. Back to trying with [PAC](/wiki/PAC):

    pacpl --ac3towav --file *.ac3

Failed:

    Unsupported codec (id=86020) for input stream #0.0

A search yielded this post: <http://lists.mplayerhq.hu/pipermail/ffmpeg-user/2006-March/002426.html>

So I decided to update/recompile my [FFmpeg](/wiki/FFmpeg) install. See "[Building FFmpeg on Mac OS X](/wiki/Building_FFmpeg_on_Mac_OS_X)".

I believe that once [FFmpeg](/wiki/FFmpeg) is successfully built with [A52](/wiki/A52) support that the above [PAC](/wiki/PAC) invocation will work, although a quick test with the GUI wrapper for [FFMpeg](/wiki/FFMpeg) (see <http://www.ffmpegx.com/>) yielded the following:

    FFmpeg version CVS, Copyright (c) 2000-2004 Fabrice Bellard
    Tue Feb 20 14:01:14 CET 2007
    Mac OSX universal build for ffmpegX
      libavutil version: 49.0.0
      libavcodec version: 51.9.0
      libavformat version: 50.4.0
    Input #0, ac3, from '/Users/wincent/tmp/demuxed/VTS_01_1S189SS129.ac3':
      Duration: 00:34:14.0, start: 0.000000, bitrate: 384 kb/s
      Stream #0.0: Audio: ac3, 48000 Hz, stereo, 384 kb/s
    Could not find input stream #0.1

Given that I was unable to build [FFmpeg](/wiki/FFmpeg) I was able to use the copy which comes inside the GUI version as follows:

    /Applications/ffmpegX.app/Contents/Resources/ffmpeg -ab 256 -i in.ac3 out.mp3

Not exactly the conversion I wanted (I wanted a lossless format) but it will suffice. Better:

    /Applications/ffmpegX.app/Contents/Resources/ffmpeg -ab 256 -i in.ac3 out.wav

The same or similar techniques will work on [AVI](/wiki/AVI) files:

    /Applications/ffmpegX.app/Contents/Resources/ffmpeg -ab 256 -i in.avi out.mp3

# Alternatives

See also [vobinfo](/wiki/vobinfo) for an alternative to [bbDEMUX](/wiki/bbDEMUX); I've never gotten [vobinfo](/wiki/vobinfo) to work.
