---
title: Firefox and self-signed SSL certificates
tags: firefox rant
---

I guess I arrived late at [this party](http://www.google.com/search?q=firefox+self-signed+ssl+certificate), but I only just discovered that [Firefox](/wiki/Firefox) makes working with self-signed [SSL](/wiki/SSL) certificates an ***enormous** pain in the butt*.

As noted [here](http://royal.pingdom.com/2008/08/19/new-ssl-policy-in-firefox-hurting-tens-of-thousands-of-sites/) (click for images), and many other places, viewing a site with such a certificate is now only possible after a multi-step click-fest in which you have to dismiss a number of scary warning dialogs.

Personally I don't mind about the inconvenience, seeing as all too few sites that I visit actually have that kind of certificate.

But today when I stumbled across the first such site that I really wanted to see, I discovered that Firefox's brain-deadness knows now bounds... It turns out that if you are unfortunate enough to be running a localized, non-English version of Firefox, then the multi-step click-fest is replaced with a brick-wall you-no-get-past-this-point-fest.

![firefox-braindead.png](/system/images/firefox-braindead.png)

Epic fail\[sic\] if ever there was one. We're not just talking about a bug inflicted upon non-English usrs. The utter stupidity of the situation is underlined when you look at the name of the host I am trying to connect to: **localhost**.

In other words, I am using a self-signed certificate for *local testing purposes*. Why the heck is Firefox complaining about the certificate? There is not a certificate authority in the world that would issue a certificate for the "domain" named "localhost". What the hell does Firefox expect me to do?

So the problem isn't just the glitch in my Spanish version of Firefox; it's that Firefox is doing something fundamentally stupid and idiotic in *all* localized versions.

The workaround [suggested here](http://tim.cexx.org/?p=558), namely going to `about:config` in Firefox and making the following tweaks doesn't work in the non-English version either:

    browser.xul.error_pages.expert_bad_cert: true
    browser.ssl_override_behavior: 2

I guess the only way to do it would be to go to the Firefox preferences and somehow convince it to import your certificate. Alas, in my cursory attempt at doing so I wasn't able to; Firefox helpfully informed me that there was a "Fallo en la recuperación del archivo PKCS \#12 por motivos desconocidos" (that is, "Error retrieving PKCS \#12 file *for unknown reasons*").

Great, just great. No local testing with Firefox. Looks like I'll have to stick to Safari.

**Update:**

Played with it a little more and was able to manually force Firefox to add an exception for me. For the curious, my initial error was that I had gone to:

-   "Preferencias" -&gt; "Avanzado" -&gt; "Cifrado" -&gt; "Ver certificados" -&gt; "Sus certificados" (that is, "Your certificates") -&gt; "Importar"

And I *should* have gone to:

-   "Preferencias" -&gt; "Avanzado" -&gt; "Cifrado" -&gt; "Ver certificados" -&gt; "Servidores" (that is, "Servers") -&gt; "Añadir excepción"

(That's 6 clicks, and after that you still have to type in the server URL and hit "Obtener certificado" and "Confirmar excepción de seguridad"; 2 more clicks. So in addition to the unhelpful error message, we have another hideous UI failure in no uncertain terms, but at least I'm able to do local testing in Firefox again.)
