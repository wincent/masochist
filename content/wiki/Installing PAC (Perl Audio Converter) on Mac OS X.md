---
tags: os.x
---

# Prerequisites

Get the latest versions of libogg, libvorbis and flac from:

<http://www.xiph.org/downloads/>

Make sure to work within a directory that has no spaces in its path

    wget http://downloads.xiph.org/releases/ogg/libogg-1.1.3.tar.gz
    tar zxvf libogg-1.1.3.tar.gz
    cd libogg-1.1.3
    ./configure && make && make check && sudo make install
    cd ..
    wget http://downloads.xiph.org/releases/vorbis/libvorbis-1.1.2.tar.gz
    tar zxvf libvorbis-1.1.2.tar.gz
    cd libvorbis-1.1.2
    ./configure && make && make check && sudo make install
    cd ..
    wget http://downloads.xiph.org/releases/flac/flac-1.1.2.tar.gz
    tar xzvf flac-1.1.2.tar.gz
    cd flac-1.1.2
    ./configure --disable-asm-optimizations
    make && make check && sudo make install
    cd ..

When building on an Intel machine it is necessary to build flac with assembly optimizations turned off, at least in flac version 1.1.2. See "[Building flac 1.2.1 on Mac OS X Leopard](/wiki/Building_flac_1.2.1_on_Mac_OS_X_Leopard)" for updated notes.

# Installing PAC

Download the latest version from:

<http://pacpl.sourceforge.net/>

For some reason the PAC installer failed to install/recognize all the required modules so some had to be installed by hand:

    tar xzvf pacpl-3.2.2.tar.gz
    cd pacpl-3.2.2
    sudo ./pacpl-install --install=all
    sudo perl -MCPAN -e 'install Ogg::Vorbis::Header'
    sudo perl -MCPAN -e 'install MP4::Info'
    sudo perl -MCPAN -e 'install CDDB_get'
    ./pacpl-install --checkinstall
    ./pacpl-install --install=base

# Installing ffmpeg

Get the latest version from:

<http://ffmpeg.sourceforge.net/>

They don't provide downloadable releases. It appears they want everyone to be on the bleeding edge:

    svn checkout svn://svn.mplayerhq.hu/ffmpeg/trunk ffmpeg
    cd ffmpeg
    ./configure --disable-mmx && make && sudo make install

**NOTE:** for up-to-date notes, see "[Building FFmpeg on Mac OS X](/wiki/Building_FFmpeg_on_Mac_OS_X)".

# Installing LAME

Get the latest version from:

<http://lame.sourceforge.net/>

    wget http://kent.dl.sourceforge.net/sourceforge/lame/lame-3.97b2.tar.gz
    tar xzvf lame-3.97b2.tar.gz
    cd lame-3.97
    ./configure && make && sudo make install

Now you must edit the configuration file (unhelpfully installed in `/etc/pacpl` instead of `/usr/local/etc/pacpl`):

    sudo nano /etc/pacpl/pacpl.conf

And specify where LAME and ffmpeg can be found:

    LAME = /usr/local/bin/lame
    FFMPEG = /usr/local/bin/ffmpeg

I later did the same for [SoX](/wiki/SoX):

    SOX = /usr/local/bin/sox

# Example usage

Demuxing DVD [VOB](/wiki/VOB) files using [vobinfo](/wiki/vobinfo) and converting the resulting AC3 files to MP3 with [PAC](/wiki/PAC):

    for ITEM in `ls`;
    do
    vobinfo --demuxall --vob="${ITEM}"
    done
    pacpl --ac3tomp3 --dir .

In my testing this didn't actually work. The produced MP3 files were all only about 1 kilobyte in size.

Alternative: <http://www.mactheripper.org/>
