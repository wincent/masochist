---
tags: macos wiki
---

Notes made while finding out how to convert [MPC](/wiki/MPC) files to another format suitable for encoding as [MP3](/wiki/MP3) or [AAC](/wiki/AAC).

# Obtaining [mppdec](/wiki/mppdec)

At the time of writing version 1.95z2 is the latest available version of [mppdec](/wiki/mppdec).

-   <http://www.musepack.net/index.php?pg=osx>
-   <http://files.musepack.net/mac/mppdec-1.95z2-mac.tar.bz2>

<!-- -->

    curl -O http://files.musepack.net/mac/mppdec-1.95z2-mac.tar.bz2
    tar xjvf mppdec-1.95z2-mac.tar.bz2
    chmod +x mppdec

# Options

To show available options I simply typed `./mppdec`. The output was:

    MPC Decoder  SV7  1.95z2     (C) 1999-2005 Buschmann/Klemm/Piecha/Wolf/MDT
         
    usage:
      mppdec [--options] <Input_File> <Output_File>
      mppdec [--options] <List_of_Input_Files> <Output_File>
      mppdec [--options] <List_of_Input_Files> <Output_Directory>

    options:
      --start x   start decoding at x sec (x>0) or at |x|% of the file (x<0)
      --dur x     decode a sequence of x sec duration (dflt: 100%)
      --prev      activate clipping prevention (gain=0,2:title based; 1,3:album based)
      --noprev    deactivate clipping prevention (dflt)
      --scale x   additional scale signal by x (dflt: 1)
      --gain x    replay gain control (0,1:off (dflt), 2:title, 3:album)
      --silent    no messages to the terminal
      --wav       write Microsoft's WAVE file (dflt)
      --aiff      write Apple's AIFF file
      --raw       write RAW file in native byte order
      --raw-le    write RAW file in little endian byte order
      --raw-be    write RAW file in big endian byte order
      --random    random play order (don't use options after this one)

    special files:
      -           standard input or standard output
      /dev/null   device null, the trash can
      protocol://[username[:password]@]servername[:port]/directories/file
                  file addressed via URL; username, password and port are optional,
                  protocol can be ftp, http, rtp. servername can be DNS, IP4 or IP6

    examples:
      mppdec Overtune.mpc Overtune.wav
      mppdec "/Archive/Rossini/Wilhelm Tell -- [01] Overtune.mpc" Overtune.wav
      mppdec "/Archive/Rossini/*.mpc" - | wavplay -
      mppdec --start -50% --duration -5% *.mpc - | wavplay -
      mppdec --prev *.mp+ .  &&  cdrecord -v -dao dev=sony -audio *.wav
      mppdec http://www.uni-jena.de/~pfk/mpp/audio/Maire_10bit_48kHz_Dithered.mpc
      mppdec --gain 2 --prev --random /Archive/Audio/  /dev/audio
      mppdec playlist.m3u  /dev/audio

# Conversion

    mkdir converted
    ./mppdec --aiff *.mpc converted

The resulting [AIFF](/wiki/AIFF) files are then easily imported into [iTunes](/wiki/iTunes) and then converted to [MP3](/wiki/MP3) or [AAC](/wiki/AAC). Or, to use an installed copy of [FFmpeg](/wiki/FFmpeg) as described in "[Extracting audio from a DVD](/wiki/Extracting_audio_from_a_DVD)":

    cd converted
    find . -name "*.aiff" -exec /Applications/ffmpegX.app/Contents/Resources/ffmpeg -ab 256 -i {} {}.mp3 \;
