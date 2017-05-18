---
tags: powerpc qemu wiki
cache_breaker: 1
---

I tried to do this the other day. My first attempt progressed fairly well, although with a lot of [yak shaving](/wiki/yak_shaving), but ultimately didn't work. I began a second attempt but ended up aborting it because somebody else did the big-endian testing for me, obviating the need.

Here are the scattered notes that I made along the way.

# Resources

-   <https://gmplib.org/~tege/qemu.html>
-   <https://help.ubuntu.com/community/Installation/QemuEmulator>
-   <http://www.makestuff.eu/wordpress/running-debian-for-arm-powerpc-on-qemu/>

# Installing qemu

```shell
$ brew install qemu
```

# Setting up a PowerPC Debian installation: first attempt

For my first attempt I used the latest "qcow2" disk image format, which turned out to be a bad choice because I couldn't mount it on my OS X machine to get the necessary init ramdisk and kernel files:

```shell
$ qemu-img create -f qcow2 /tmp/disk.img 8G
```

Installing the latest Debian (7.6.0 at the time of writing):

```shell
$ sudo qemu-system-ppc \
  -m 1024 \
  -hda /tmp/disk.img \
  -cdrom ~/Downloads/debian-7.6.0-powerpc-CD-1.iso \
  -boot d
```

Note that installing the bootloader fails, so "Continue without boot loader", and observe that the installer advises:

> You will need to boot manually with the /vmlinux kernel on partition /dev/sda2 and root=/dev/sda3 passed as a kernel argument

# Mounting the disk

After installation, in order to boot the system you need the initrd and kernel files from the disk image.

I tried to attach the disk image on OS X in order to get the initrd and kernel files:

```shell
$ hdiutil attach -imagekey diskimage-class=CRawDiskImage -nomount filename
$ hdiutil mount /dev/disk2
```

Alas, this doesn't work:

> mount failed - no mountable file system

So, time to create a Linux VM and mount the image on that. Relevant resources:

-   <http://www.ubuntu.com/download/desktop/thank-you?country=US&version=14.04.1&architecture=amd64>
-   <http://www.wikihow.com/Install-Ubuntu-on-VirtualBox>

Set up a shared folder, make sure you set up to automount or it probably won't be writable. "diskimages" is the name chosen in the VirtualBox shared folder settings dialog:

```shell
$ mkdir ~/r
$ sudo mount -t vboxsf diskimages ~/r
$ cd ~/r
$ ls # observe we can see the disk QEMU image
```

# Mounting the raw image

-   <http://major.io/2010/12/14/mounting-a-raw-partition-file-made-with-dd-or-dd_rescue-in-linux/>
-   <http://xathrya.web.id/blog/2013/08/01/mounting-qemu-hard-disk-image-on-various-operating-system/>
-   <https://wiki.debian.org/QEMU>

I tried converting the image from "qcow2" to "raw" format in order to mount it directly, but that didn't work:

```shell
$ fdisk -l r/disk.img
$ sudo touch /mnt/loop
$ sudo mount -o ro,loop,offset=32256 r/disk.dmg /mnt/loop -t ext4
```

So instead I tried this:

```shell
$ sudo modprobe nbd max_part=8
$ sudo apt-get install kvm
$ sudo qemu-nbd --conect /dev/nbd0 r/disk.img
$ mkdir m
$ sudo mount /dev/nbd0p2 m
$ cd m
$ cp initrd.img-3.2.0-4-powerpc vmlinux-3.2.0-4-powerpc r/
```

That last step failed because the VirtualBox shared folder had mounted in read-only mode. I rebooted the Linux VM with the shared folder set to automount after first doing this:

```shell
$ sudo usermod -aG vboxsf $(whoami)
```

For more on permissions issues, see:

-   <http://superuser.com/questions/307853/permission-denied-when-accessing-virtualbox-shared-folder-when-member-of-the-vbo>
-   <http://unix.stackexchange.com/questions/52667/file-permission-issues-with-shared-folders-under-virtual-box-ubuntu-guest-wind>

After all that, I could try to boot into the new system:

```shell
$ sudo qemu-system-ppc \
  -m 1024 \
  -hda /tmp/tmp/disk.img \
  -kernel ./vmlinux-3.2.0-4-powerpc \
  -initrd ./initrd.img-3.2.0-4-powerpc \
  -append "root=/dev/hda3"
```

# Attempt two

```shell
$ qemu-img create -f raw /tmp/disk.img 8G # ie. raw format this time
$ sudo qemu-system-ppc \
  -m 1024 \
  -hda /tmp/disk.img \
  -cdrom ~/Downloads/debian-7.6.0-powerpc-CD-1.iso \
  -boot d
```

Note: the screen can be very dark on booting, but there is a prompt that is waiting for you to press enter.
