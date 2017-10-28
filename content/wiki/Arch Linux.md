---
tags: wiki arch linux
---

# Experimenting with Arch in VirtualBox

Under the virtual machine "Settings" → "Ports" → "USB" → "Enable USB Controller" set "USB 2.0 (ECHI) Controller".

https://www.youtube.com/watch?v=GKdPSGb9f5s

First try here I chose GPT for partition table format, which doesn't seem to have been a good choice. Need to do MBR instead.

```
loadkeys colemak # :-)
ping -c 3 google.com
pacman -Syy
pacman -S --noconfirm reflector
reflector -c "United States" -f 12 -l 10 -n 12 --save /etc/pacman.d/mirrorlist
fdisk -l
cfdisk /dev/sda # choose dos (mbr), not gpt (at least in VirtualBox); make it bootable
mkfs.ext4 /dev/sda1
mount /dev/sda1 /mnt
lsblk
pacstrap -i /mnt base base-devel
genfstab -U -p /mnt >> /mnt/etc/fstab
arch-chroot /mnt /bin/bash
vi /etc/locale.gen # uncomment desired locale en_US.UTF-8 UTF-8
locale-gen
ln -sf /usr/share/zoneinfo/America/Los_Angeles /etc/localtime
hwclock --systohc --utc
echo archvm > /etc/hostname
vi /etc/hosts # add 127.0.1.1 localhost.localdomain archvm
echo KEYMAP=colemak > /etc/vconsole.conf
systemctl enable dhcpcd
passwd # pass
pacman -S --noconfirm grub
grub-install /dev/sda # errors/warnings about gpt... may need to try again
grub-mkconfig -o /boot/grub/grub.cfg
exit
umount -R /mnt
reboot

useradd -m -g users -G wheel -s /bin/bash glh
passwd glh # pass
visudo # allow wheel to sudo
exit

sudo pacman -S xorg xorg-xinit
echo 'exec i3' > ~/.xinitrc
sudo pacman -S i3 sddm rxvt-unicode
sudo systemctl enable sddm.service
startx
```
