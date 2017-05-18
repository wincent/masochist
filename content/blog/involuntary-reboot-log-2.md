---
title: Involuntary reboot log #2
tags: blog
---

The most unpleasant kind of kernel panic: you leave the machine idle, leave the office, and come back to find the machine has panicked. Sigh. Had a bunch of unsaved work ready for tomorrow too, the kind you can't save (stuff in browser windows), and documents open in Finder and BBEdit windows ready for uploading. Hope there was no damage to the file system or the files. Sigh.

-   **Operating system version:** Mac OS X 10.4.7
-   **Average time between failures:** 52.5 days
-   **Uptime at moment of failure:** Approximately 10 days?
-   **Kernel panics:** 2
-   **Hard resets:** 0





    panic(cpu 1 caller 0x0019CADF): Unresolved kernel trap (CPU 1, Type 14=page fault), registers:
    CR0: 0x8001003b, CR2: 0x00000014, CR3: 0x0164d000, CR4: 0x000026a0
    EAX: 0x00000003, EBX: 0x07159600, ECX: 0x00000014, EDX: 0x00000000
    ESP: 0x00000014, EBP: 0x2585bce4, ESI: 0x23bd7000, EDI: 0x00000000
    EFL: 0x00010206, EIP: 0x4cd64044, CS:  0x00000008, DS:  0x25850010


    Backtrace, Format - Frame : Return Address (4 potential args on stack) 
    0x2585bb74 : 0x128b5e (0x3bc46c 0x2585bb98 0x131bbc 0x0) 
    0x2585bbb4 : 0x19cadf (0x3c18e4 0x1 0xe 0x3c169c) 
    0x2585bc64 : 0x197c7d (0x2585bc78 0x2585bce4 0x4cd64044 0x4cd60048) 
    0x2585bc70 : 0x4cd64044 (0x4cd60048 0x7150010 0x10 0x25850010) 
    0x2585bce4 : 0x4cd6d376 (0x0 0x4 0x0 0x34f0c1) 
    0x2585bd14 : 0x4cd53d46 (0x23bd7000 0x0 0x7159608 0x800) 
    0x2585bd54 : 0x4cd53dc6 (0x3fb99e0 0x1 0x4cda3560 0x0) 
    0x2585bd74 : 0x4cd5c1ef (0x373cf800 0x0 0x37ac8464 0x4cd591d3) 
    0x2585bdc4 : 0x4cd5c341 (0x2585bdfb 0x0 0x0 0x37ac8434) 
    0x2585be14 : 0x4cd5c3aa (0xfa 0x40a03e8 0xe0 0x2027a03) 
    0x2585be44 : 0x4cd5c4b9 (0x7159770 0x0 0x1 0x3) 
    0x2585be94 : 0x4cd5c7cd (0x0 0x0 0x2 0x4cd56cfb) 
    0x2585bee4 : 0x4cd6d06f (0x2 0xdee77837 0x5181e 0x359e3138) 
    0x2585bf54 : 0x4cd7c71e (0x23bd7000 0x499800 0x2585bf74 0x19caf2) 
    0x2585bf84 : 0x13d683 (0x3e2c200 0x0 0x0 0x0) 
    0x2585bfd4 : 0x197b19 (0x0 0x0 0x4fc6030 0x7159600) Backtrace terminated-invalid frame pointer 0x0
          Kernel loadable modules in backtrace (with dependencies):
             com.apple.driver.AppleAirPortBrcm4311(103.2)@0x4cd3c000
                dependency: com.apple.iokit.IONetworkingFamily(1.5.0)@0x3b7fb000
                dependency: com.apple.iokit.IOPCIFamily(2.0)@0x35764000


    Kernel version:
    Darwin Kernel Version 8.7.1: Wed Jun  7 16:19:56 PDT 2006; root:xnu-792.9.72.obj~2/RELEASE_I386


    Model: iMac4,1, BootROM IM41.0055.B02, 2 processors, Intel Core Duo, 1.83 GHz, 2 GB
    Graphics: ATI Radeon X1600, ATY,RadeonX1600, PCIe, 128 MB
    Memory Module: DIMM0/BANK 0, 1 GB, DDR2 SDRAM, 667 MHz
    Memory Module: DIMM1/BANK 1, 1 GB, DDR2 SDRAM, 667 MHz
    AirPort: spairport_wireless_card_type_airport_extreme (0x14E4, 0x89), 103.2 (3.120.28.3)
    Bluetooth: Version 1.7.5f10, 2 service, 0 devices, 1 incoming serial ports
    Network Service: Ethernet incorporada, Ethernet, en0
    Network Service: AirPort, AirPort, en1
    Network Service: Parallels Host-Guest Adapter, Ethernet, en2
    Serial ATA Device: ST3160023AS, 149.05 GB
    Parallel ATA Device: MATSHITADVD-R   UJ-846, 3.87 GB
    USB Device: Built-in iSight, Micron, Up to 480 Mb/sec, 500 mA
    USB Device: USB Hub, Up to 12 Mb/sec, 500 mA
    USB Device: Back-UPS RS 1500 FW:8.g8 .I USB FW:g8, American Power Conversion, Up to 1.5 Mb/sec, 100 mA
    USB Device: SoundSticks, harman/kardon, Up to 12 Mb/sec, 100 mA
    USB Device: Bluetooth HCI, Up to 12 Mb/sec, 500 mA
    USB Device: IR Receiver, Apple Computer, Inc., Up to 12 Mb/sec, 500 mA
    USB Device: Hub in Apple Pro Keyboard, Mitsumi Electric, Up to 12 Mb/sec, 500 mA
    USB Device: Apple Optical USB Mouse, Mitsumi Electric, Up to 1.5 Mb/sec, 100 mA
    USB Device: Apple Pro Keyboard, Mitsumi Electric, Up to 12 Mb/sec, 250 mA
    FireWire Device: LaCie d2 Extreme LUN 0, LaCie Group SA, Up to 400 Mb/sec
