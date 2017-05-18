---
tags: wiki
---

An experiment with some leaking strings:

    #import <Foundation/Foundation.h>

    int main (int argc, const char * argv[]) {
        NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];

        // Question: how does initWithBytesNoCopy:length:encoding:freeWhenDone: handle NULL bytes?

        const char *str = "hello"; // 5 letters plus NULL terminating byte
        NSLog(@"str \"%s\" has length %d", str, strlen(str));   // str "hello" has length 5

        NSString *string = [[NSString alloc] initWithBytesNoCopy:(void *)str
                                                          length:5
                                                        encoding:NSUTF8StringEncoding
                                                    freeWhenDone:NO];
        
        NSLog(@"string created with length 5: %@ (%d)", string, [string length]);       // string created with length 5: hello (5)
        NSLog(@"roundtrip back to string -> length %d", strlen([string UTF8String]));   // roundtrip back to string -> length 5
              
        string = [[NSString alloc] initWithBytesNoCopy:(void *)str
                                                length:6 
                                              encoding:NSUTF8StringEncoding 
                                          freeWhenDone:NO];
        
        // note that in this line echoing the string causes the NULL byte to be echoed, cutting off the rest of the NSLog
        NSLog(@"string created with length 6: %@ (%d)", string, [string length]);       // string created with length 6: hello
        NSLog(@"length %d", [string length]);                                           // length 6
        NSLog(@"roundtrip back to string -> length %d", strlen([string UTF8String]));   // roundtrip back to string -> length 5
        
        string = [NSString stringWithUTF8String:str];
        NSLog(@"string created with stringWithUTF8String: %@ (%d)", string, [string length]);   // string created with stringWithUTF8String: hello (5)
        NSLog(@"roundtrip back to string -> length %d", strlen([string UTF8String]));           // roundtrip back to string -> length 5
        
        // char array with NULL byte in the middle
        char tricky[10] = { 'h', 'e', 'l', 'l', 'o', 0, 'r', 'o', 'b', 0 };  
        string = [NSString stringWithUTF8String:tricky];
        NSLog(@"string: %@ (%d)", string, [string length]);                             // string: hello (5)
        NSLog(@"roundtrip back to string -> length %d", strlen([string UTF8String]));   // roundtrip back to string -> length 5
        
        string = [[NSString alloc] initWithBytesNoCopy:(void *)tricky
                                                length:9
                                              encoding:NSUTF8StringEncoding
                                          freeWhenDone:NO];
        
        NSLog(@"string created with length 9: %@ (%d)", string, [string length]);       // string created with length 9: hello
        NSLog(@"length %d", [string length]);                                           // length 9
        NSLog(@"roundtrip back to string -> length %d", strlen([string UTF8String]));   // roundtrip back to string -> length 5
        
        string = [[NSString alloc] initWithBytesNoCopy:(void *)tricky
                                                length:10
                                              encoding:NSUTF8StringEncoding 
                                          freeWhenDone:NO];
        
        NSLog(@"string created with length 10: %@ (%d)", string, [string length]);      // string created with length 10: hello
        NSLog(@"length %d", [string length]);                                           // length 10
        NSLog(@"roundtrip back to string -> length %d", strlen([string UTF8String]));   // roundtrip back to string -> length 5
        
        // are the characters after the NULL byte really there?
        int i;
        for (i = 0; i < 10; i++)
            NSLog(@"%d: %C", i, [string characterAtIndex:i]);

        // 0: h
        // 1: e
        // 2: l
        // 3: l
        // 4: o
        // 5: 
        // 6: r
        // 7: o
        // 8: b
        // 9: 

        [pool release];
        return 0;
    }

# Conclusions

-   The value you pass for length need not include space for a NULL terminating byte.
-   You can pass a buffer containing mid-string NULL bytes and provided the length is set correctly the string won't be truncated.
-   If you try to print such a string containing a mid-string NULL byte using `NSLog` output will be incorrectly truncated at the NULL byte.
-   Even so, the actual characters really are present in the created string.
