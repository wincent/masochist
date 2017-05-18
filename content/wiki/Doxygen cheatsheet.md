---
tags: doxygen wiki
---

# Documenting [Objective-C](/wiki/Objective-C) with [Doxygen](/wiki/Doxygen)

## Files

    //! @file thing.ext
    //! Description of the file
    //!
    //! @author Jake Smith
    //! @version 1.0
    //! @date 1999
    //! @bug A known bug

## Methods

    //! Brief (one-line) description of method
    //!
    //! Extended description (may extend over several lines).
    //!
    //! @code
    //! NSString *example = @"example string!";
    //! @endcode
    //!
    //! We can also use lists.
    //!
    //!   - item 1
    //!   - item 2
    //!
    //! @param first Description of first param
    //! @param second Description of second param
    //! @return Description of returned value
    //! @exception e Description of e
    //! @warning Bad things can happen
    //! @note Using on your birthday will provide a bonus
    //! @see [name-list]

# See also

-   <http://developer.apple.com/tools/creatingdocsetswithdoxygen.html>: "Using Doxygen to Create Xcode Documentation Sets"
