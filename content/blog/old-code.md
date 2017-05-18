---
title: Old code
tags: blog
---

I was just looking at some very old code that I wrote several years ago when I didn't really understand the mysteries of Objective-C (or even straight C for that matter!). Quite laughable really:





    - (id) objectOnDiskForKey:(NSString *)keyName
    {
        NSObject            *returnedObject;
        returnedObject  =   [_woPreferencesOnDisk objectForKey:keyName];
        return              returnedObject;
    }

The code works perfectly and is bug-free, but it has some shortcomings that leap out at the eye like a pack of rabid attack dogs:

1.  Returned object (`NSObject *`) doesn't match return type of method (`id`); it's fairly clear here that I didn't understand the difference/relationship between `id` and `NSObject *`.
2.  It's also clear I don't know that `objectForKey:` returns an object of type `id`, otherwise I wouldn't have chosen `NSObject *` as the type for `returnedObject`.
3.  Extra space between `(id)` and `objectOnDiskForKey` flies in the face of convention.
4.  Variable name `keyName` reveals misunderstanding of what a key actually is and makes it seem as though the "name" is an attribute of the key.
5.  Declaration of `returnedObject` variable and assignment to it unnecessarily split across two lines, again showing a misunderstanding about the nature of and rules for declaration and assignment.
6.  Method `return` appears on a separate line when it could be rolled into the line above.
7.  The instance variable name `_woPreferencesOnDisk` sucks: Apple advises not to use names that start with underscores for instance variables, reserving them for their own use; the "wo" prefix is unnecessary (what kind of namespace clash do I expect in a direct `NSObject` subclass?; and even if the prefix were necessary it should have been capitalized in keeping with conventions.)

Today I'd write that same method like this:

    // convenience method for accessing preferencesOnDisk
    - (id)objectOnDiskForKey:(NSString *)aKey
    {
        return [preferencesOnDisk objectForKey:aKey];
    }

You'll notice that this version also includes a comment: I like to write a one-line "nutshell" comment before each function describing what it does and what its rationale is. I think the rationale is important because otherwise I might look at such code one day in the future and think, "Bah, this method is superfluous, I'm going to trash it!". Here the rationale is implied in the words "convenience method"; basically, there's no real reason for this method to exist other than convenience because you could equally do a `[[prefs preferencesOnDisk] objectForKey:@"foo"]` rather than a `[prefs objectOnDiskForKey:@"foo"]`. It's just that the latter looks better, and anything which makes code look better (and therefore more readable) is a good thing.
