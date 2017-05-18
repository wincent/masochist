---
title: Coming up with a company name
tags: blog
---

If you are an independent Mac software vendor it seems that *the* way to come up with a company name is to combine a modifier (adjective or adjectival noun) with a noun. Your algorithm for selecting a random modifier should be biased towards selecting a color (red, blue, yellow etc).

    @implementation MYCompany


    - (id)init
    {
        if ((self = [super init]))
        {
            // TODO: check that domain name is available and retry if not
            self->_name = [[NSString alloc] initWithFormat:@"%@ %@", 
                NSRandomAdjective(), NSRandomNoun()];
        }
        return self;
    }


    @end





Examples:

-   [Flying Meat](http://flyingmeat.com/) (by the way, listen to [this screencast](http://flyingmeat.com/voodoopad/images/linkback.mov) and see if you can spot the G5-user... I've been overcome with a wave of nostalgia for my G5-owning days).
-   [Shirt Pocket](http://shirtpocket.com/).
-   [Red Sweater](http://www.red-sweater.com/products/index.html).
-   [Blacktree](http://blacktree.com/).

These are just a few respected companies that I pulled off the top of my head. If I included not-so-respected companies then I could make a list that is much, much longer.

Notable exceptions to the modifier-plus-noun naming algorithm:

-   [Omni](http://www.omnigroup.com/).
-   [Karelia](http://www.karelia.com/).
-   [Ambrosia](http://www.ambrosiasw.com/).

I must admit, I don't really like the modifier-plus-noun algorithm because I think the names it produces are too generic. Imagine that Flying Meat starts to gain momentum and become increasingly popular (but not so popular that it can afford to protect its name in the judicial system); a bunch of competitors start to register names like "Running Meat" and "Flying Steak". Or someone impressed with Blacktree decides to go through their dictionary until they hit an available domain name: Redtree, Bluetree, Graytree, Blackhouse, Blackstock, Blackbarn... On the other hand, names like Omni, Karelia and Ambrosia are much more distinctive and I think they make for better brands.

One thing, at least, is that independent Mac software vendors haven't yet been influenced by the "Web 2.0" style of naming: intentional misspelling, lacking capitalization (flickr, digg), number-plus-noun (37 signals) and countless other "me too!" examples.

#### Update

Daniel Jalkut (of Red Sweater) contacted me with a link to [his own Web 2.0 application](http://www.red-sweater.com/blog/187/adjective-noun-software) which enables you to generate a company name from your browser without the need to roll up your sleeves and learn the hard-to-find-documentation-on `NSRandomAdjective` and `NSRandomNoun` APIs mentioned above.
