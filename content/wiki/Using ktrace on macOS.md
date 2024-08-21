---
tags: wiki
title: Using ktrace on macOS
---

# Example: tracing network activity, BSD (system calls, signals etc), and filesystem activity

```
sudo ktrace trace -p 8484 -S -f C2,C3,C4
```

- `-p 8484`: Show events for process ID `8484`.
- `-S`: Print arguments as strings for trace points known to include strings.
- `-f`: Filter to show only:
    - `C2`: [`DBG_NETWORK`](https://github.com/apple-oss-distributions/xnu/blob/xnu-10063.141.1/bsd/sys/kdebug.h#L103)
    - `C3`: [`DBG_FSYSTEM`](https://github.com/apple-oss-distributions/xnu/blob/xnu-10063.141.1/bsd/sys/kdebug.h#L104)
    - `C4`: [`DBG_BSD`](https://github.com/apple-oss-distributions/xnu/blob/xnu-10063.141.1/bsd/sys/kdebug.h#L105)

**Note:** In order to determine which tag to link to for `C1`, `C2`, `C3` (etc) above, I looked up which xnu version corresponds to the current macOS release at: https://opensource.apple.com/releases/

e.g. macOS 14.6 Sonoma corresponds to xnu-10063.141.1 (so that's what I'm linking to throughout this article).

# Example: tracing memory operations

```
sudo ktrace trace -p 8484 -S -f S0x010C
```

As above, but now the filter description is:

- `S0x010C`: class [`DBG_MACH`](https://github.com/apple-oss-distributions/xnu/blob/xnu-10063.141.1/bsd/sys/kdebug.h#L102), subclass [`DBG_MACH_LEAKS`](https://github.com/apple-oss-distributions/xnu/blob/xnu-10063.141.1/bsd/sys/kdebug.h#L160) (alloc/free)

# Example: tracing only system calls

```
sudo ktrace trace -p 8484 -S -f S0x040C
```

As above, but now the filter description is:

- `S0x040C`: class [`DBG_BSD`](https://github.com/apple-oss-distributions/xnu/blob/xnu-10063.141.1/bsd/sys/kdebug.h#L105), subclass [`DBG_BSD_EXCP_SC`](https://github.com/apple-oss-distributions/xnu/blob/xnu-10063.141.1/bsd/sys/kdebug.h#L720)

# Filter descriptions

Here's what `man ktrace` says about `FILTER DESCRIPTIONS`:

> ## FILTER DESCRIPTIONS
>
> A filter description is a comma-separated list of class and subclass specifiers that indicate which events should be traced.  A class specifier starts with ‘C’ and contains a single byte, specified in either decimal or hex.  A subclass specifier starts with ‘S’ and takes two bytes.  The high byte is the class and the low byte is the subclass of that class.
>
> For example, this filter description would enable classes 1 and 37 and the subclasses 33 and 35 of class 5: ‘C1,C0x25,S0x0521,S0x0523’.  The ‘ALL’ filter description enables events from all classes.

From [`kdebug.h`](https://github.com/apple-oss-distributions/xnu/blob/xnu-10063.141.1/bsd/sys/kdebug.h), here are some of the interesting sections.

## `DBG_MAC` subclasses

```c
#pragma mark DBG_MACH subclasses

#define DBG_MACH_EXCP_KTRAP_x86 0x02 // Kernel Traps on x86
#define DBG_MACH_EXCP_DFLT      0x03 // deprecated name
#define DBG_MACH_EXCP_SYNC_ARM  0x03 // arm/arm64 synchronous exception
#define DBG_MACH_EXCP_IFLT      0x04 // deprecated name
#define DBG_MACH_EXCP_SERR_ARM  0x04 // arm/arm64 SError (async) exception
#define DBG_MACH_EXCP_INTR      0x05 // Interrupts
#define DBG_MACH_EXCP_ALNG      0x06 // Alignment Exception
#define DBG_MACH_EXCP_UTRAP_x86 0x07 // User Traps on x86
#define DBG_MACH_EXCP_FP        0x08 // FP Unavail
#define DBG_MACH_EXCP_DECI      0x09 // Decrementer Interrupt
#define DBG_MACH_CHUD           0x0A // deprecated name
#define DBG_MACH_SIGNPOST       0x0A // kernel signposts
#define DBG_MACH_EXCP_SC        0x0C // System Calls
#define DBG_MACH_EXCP_TRACE     0x0D // Trace exception
#define DBG_MACH_EXCP_EMUL      0x0E // Instruction emulated
#define DBG_MACH_IHDLR          0x10 // Interrupt Handlers
#define DBG_MACH_IPC            0x20 // Inter Process Comm
#define DBG_MACH_RESOURCE       0x25 // tracing limits, etc
#define DBG_MACH_EXCLAVES       0x2A // Exclaves
#define DBG_MACH_EXCLAVES_SCHEDULER 0x2B // Exclaves Scheduler
#define DBG_MACH_VM             0x30 // Virtual Memory
#define DBG_MACH_LEAKS          0x31 // alloc/free
#define DBG_MACH_WORKINGSET     0x32 // private subclass for working set related debugging
#define DBG_MACH_SCHED          0x40 // Scheduler
#define DBG_MACH_MSGID_INVALID  0x50 // Messages - invalid
#define DBG_MACH_LOCKS          0x60 // new lock APIs
#define DBG_MACH_PMAP           0x70 // pmap
#define DBG_MACH_CLOCK          0x80 // clock
#define DBG_MACH_MP             0x90 // MP related
#define DBG_MACH_VM_PRESSURE    0xA0 // Memory Pressure Events
#define DBG_MACH_STACKSHOT      0xA1 // Stackshot/Microstackshot subsystem
#define DBG_MACH_SFI            0xA2 // Selective Forced Idle (SFI)
#define DBG_MACH_ENERGY_PERF    0xA3 // Energy/performance resource stats
#define DBG_MACH_SYSDIAGNOSE    0xA4 // sysdiagnose
#define DBG_MACH_ZALLOC         0xA5 // Zone allocator
#define DBG_MACH_THREAD_GROUP   0xA6 // Thread groups
#define DBG_MACH_COALITION      0xA7 // Coalitions
#define DBG_MACH_SHAREDREGION   0xA8 // Shared region
#define DBG_MACH_SCHED_CLUTCH   0xA9 // Clutch scheduler
#define DBG_MACH_IO             0xAA // I/O
#define DBG_MACH_WORKGROUP      0xAB // Workgroup subsystem
#define DBG_MACH_HV             0xAC // Hypervisor subsystem
#define DBG_MACH_KCOV           0xAD // Kernel coverage sanitizer
#define DBG_MACH_MACHDEP_EXCP_SC_x86 0xAE // Machine Dependent System Calls on x86
#define DBG_MACH_MACHDEP_EXCP_SC_ARM 0xAF // Machine Dependent System Calls on arm
#define DBG_MACH_VM_RECLAIM     0xB0 // Deferred Memory Reclamation
```

## `DBG_NETWORK` subclasses

```c
/* **** The Kernel Debug Sub Classes for Network (DBG_NETWORK) **** */
#define DBG_NETIP       1       /* Internet Protocol */
#define DBG_NETARP      2       /* Address Resolution Protocol */
#define DBG_NETUDP      3       /* User Datagram Protocol */
#define DBG_NETTCP      4       /* Transmission Control Protocol */
#define DBG_NETICMP     5       /* Internet Control Message Protocol */
#define DBG_NETIGMP     6       /* Internet Group Management Protocol */
#define DBG_NETRIP      7       /* Routing Information Protocol */
#define DBG_NETOSPF     8       /* Open Shortest Path First */
#define DBG_NETISIS     9       /* Intermediate System to Intermediate System */
#define DBG_NETSNMP     10      /* Simple Network Management Protocol */
#define DBG_NETSOCK     11      /* Socket Layer */
```

## `DBG_FSYSTEM` subclasses

```c
/* The Kernel Debug Sub Classes for File System (DBG_FSYSTEM) */
#define DBG_FSRW      0x1     /* reads and writes to the filesystem */
#define DBG_DKRW      0x2     /* reads and writes to the disk */
#define DBG_FSVN      0x3     /* vnode operations (inc. locking/unlocking) */
#define DBG_FSLOOOKUP 0x4     /* namei and other lookup-related operations */
#define DBG_JOURNAL   0x5     /* journaling operations */
#define DBG_IOCTL     0x6     /* ioctl to the disk */
#define DBG_BOOTCACHE 0x7     /* bootcache operations */
#define DBG_HFS       0x8     /* HFS-specific events; see the hfs project */
#define DBG_APFS      0x9     /* APFS-specific events; see the apfs project */
#define DBG_SMB       0xA     /* SMB-specific events; see the smb project */
#define DBG_MOUNT     0xB     /* Mounting/unmounting operations */
#define DBG_EXFAT     0xE     /* ExFAT-specific events; see the exfat project */
#define DBG_MSDOS     0xF     /* FAT-specific events; see the msdosfs project */
#define DBG_ACFS      0x10    /* Xsan-specific events; see the XsanFS project */
#define DBG_THROTTLE  0x11    /* I/O Throttling events */
#define DBG_DECMP     0x12    /* Decmpfs-specific events */
#define DBG_VFS       0x13    /* VFS layer events */
#define DBG_LIVEFS    0x14    /* LiveFS events; see the FSKit project */
#define DBG_NFS       0x15    /* NFS-specific events; see the nfs project */
#define DBG_CONTENT_PROT 0xCF /* Content Protection Events: see bsd/sys/cprotect.h */
```

## `DBG_BSD` subclasses

```c
/* The Kernel Debug Sub Classes for BSD */
#define DBG_BSD_PROC              0x01 /* process/signals related */
#define DBG_BSD_MEMSTAT           0x02 /* memorystatus / jetsam operations */
#define DBG_BSD_KEVENT            0x03 /* kqueue / kevent related */
#define DBG_BSD_EXCP_SC           0x0C /* System Calls */
#define DBG_BSD_AIO               0x0D /* aio (POSIX async IO) */
#define DBG_BSD_SC_EXTENDED_INFO  0x0E /* System Calls, extended info */
#define DBG_BSD_SC_EXTENDED_INFO2 0x0F /* System Calls, extended info */
#define DBG_BSD_KDEBUG_TEST       0xFF /* for testing kdebug */
```

# See also

- [Stack Overflow answer](https://stackoverflow.com/a/76987655/2103996) on the `-f` switch.
