---
tags: wiki
---

Do this:

    session[:symbol]
    cookie[:symbol]

Not this:

    @session["symbol"]
    @session['symbol']
    @session[:symbol]
    session["symbol"]
    session['symbol']
    cookie["symbol"]
    cookie['symbol']

In general accessing `:symbol` will be faster (lightweight class reference) than `"symbol"` (this has to do string interpolation).

# IRC transcript

From `#rubyonrails`:

    [16:02] wincent: Hi folks, should I be using: @session[:symbol] , @session["symbol"] or session["symbol"] in my ApplicationController?
    [16:02] wincent: ah, and let's not forget "session[:symbol]"
    [16:02] shaponagota: wincent: session[:symbol]
    [16:02] wincent: thanks shaponagota
    [16:03] shaponagota: wincent: no more @ on session and params
    [16:04] wincent: shaponagota: the docs at api.rubyonrails.org don't use the @, but I was confused because I saw this DHH example which uses the other style: http://one.textdrive.com/pipermail/rails/2005-March/004980.html (evidently that's the "old way" now...)
    [16:04] shaponagota: wincent: yeah it was the old way
    [16:04] wincent: shaponagota: i guess the same applies for cookies, right?
    [16:04] shaponagota: wincent: yes
    [16:05] wincent: thanks shaponagota
