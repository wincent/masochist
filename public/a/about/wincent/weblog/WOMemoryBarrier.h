//
//  WOMemoryBarrier.h
//  WODebug
//
//  Created by Wincent Colaiuta on 30/11/04.
//  Copyright 2004 Wincent Colaiuta. All rights reserved.
//  $Id: WOMemoryBarrier.h 57 2006-01-26 17:57:36Z wincent $

/*!
@header     WOMemoryBarrier
@abstract   Memory barrier macros for ppc, ppc64, i386/SSE and i386
 */

#if defined(__ppc__)

// ppc

/*! ReadMemoryBarrier() prevents loads being reordered across the point at which it appears. It can be used to prevent "downwards migration". Its action is an "acquire" operation. It is typically used immediately prior to a critical read (load) operation. */
#define WOReadMemoryBarrier(x)  __asm__ __volatile__ ("sync":::"memory")

/*! WriteMemoryBarrier() prevents stores being reordered across the point at which it appears. It can be used to prevent "upwards migration". Its action is a "release" operation. It is typically used immediately after a critical write (store) operation. */
#define WOWriteMemoryBarrier(x) __asm__ __volatile__ ("eieio":::"memory")

/*! MemoryBarrier(x) prevents loads and stores being reordered across the point at which it appears. This is a full bi-directional "fence" that prevents both "upwards" and "downwards migration". */
#define WOMemoryBarrier(x)      __asm__ __volatile__ ("sync":::"memory")

#elif defined(__i386__)
#if defined(__SSE__)

// i386 with SSE
#define WOReadMemoryBarrier(x)  __asm__ __volatile__ ("lfence":::"memory")
#define WOWriteMemoryBarrier(x) /* no-op: not needed on i386 */
#define WOMemoryBarrier(x)      __asm__ __volatile__ ("mfence":::"memory") 

#else /* not defined __SSE__ */

// i386 without SSE
#define WOReadMemoryBarrier(x)  __asm__ __volatile__                    \
                                ("lock; addl $0,0(%%esp)":::"memory")
#define WOWriteMemoryBarrier(x) /* no-op: not needed on i386 */
#define WOMemoryBarrier(x)      __asm__ __volatile__                    \
                                ("lock; addl $0,0(%%esp)":::"memory")

#endif
#elif defined(__ppc64__)

// ppc64
#define WOReadMemoryBarrier(x)  __asm__ __volatile__ ("lwsync":::"memory")
#define WOWriteMemoryBarrier(x) __asm__ __volatile__ ("sync":::"memory") 
#define WOMemoryBarrier(x)      __asm__ __volatile__ ("sync":::"memory")

#else

#warning Unsupported architecture

// fall back to OS-level
#define WOReadMemoryBarrier(x)  OSMemoryBarrier()
#define WOWriteMemoryBarrier(x) OSMemoryBarrier()
#define WOMemoryBarrier(x)      OSMemoryBarrier()

#endif