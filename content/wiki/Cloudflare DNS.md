---
tags: wiki cloudflare DNS
title: Cloudflare DNS
---

# Context

In May 2022 I switched to using [Cloudflare Registrar](https://blog.cloudflare.com/cloudflare-registrar/) for my domain registrations (from [Namecheap](https://www.namecheap.com/)) because they offer domain renewals at fair prices. Basically, they run the registry "at cost" as a kind of loss-leader for their other offerings. I don't know how long they will keep this up, but their registrar went public in 2018, so it's 4 years so far at the time of writing. Back in the day, Namecheap used to offer reasonably fair renewal prices too — that's why I ran into their warm embrace, fleeing from an abusive relationship with [GoDaddy](https://www.godaddy.com/), pausing in an intermediate rebound relationship with [Joker](https://joker.com/) along the way — but unfortunately, it wasn't to last...

Anyway, Cloudflare also hosts the DNS for free, allowing me to save a few pennies by switching that away too (from [Amazon Route 53](https://aws.amazon.com/route53/)). All of this follows on from another cost-saving measure I undertook in 2021, which was [moving some static pages](https://wincent.com/blog/simplified-ansible-set-up) from [Amazon EC2](https://aws.amazon.com/ec2/) (paid) to [GitHub Pages](https://pages.github.com/) (free). Speaking of free, I stopped paying for SSL certificates once [Let's Encrypt](https://letsencrypt.org/) took off; any time I need an SSL certificate for a site I run, I use that, and for sites I don't run (eg. GitHub Pages, Cloudflare URL forwarding etc) the corresponding providers deal with the SSL for free. Overall, having a simple, static presence online has gotten a lot cheaper since the early days.

## Static hosting on GitHub Pages with redirects

### Case study #1: greg.hurrell.net

#### GitHub set-up

-   Source code: [github.com/wincent/cv](https://github.com/wincent/cv).
-   [Build script](https://github.com/wincent/cv/blob/main/scripts/publish).
-   [`gh-pages` branch](https://github.com/wincent/cv/tree/gh-pages).
    -   [wincent.github.io/cv](https://wincent.github.io/cv): GitHub pages site for this repo (redirects to `greg.hurrell.net`).
    -   [`CNAME` configuration](https://github.com/wincent/cv/blob/gh-pages/CNAME), telling GitHub that there's a `CNAME` for `greg.hurrell.net` pointing at the GitHub pages site for this repo.

#### Cloudflare set-up

-   DNS for `hurrell.net`:
    -   `CNAME` `greg` → `wincent.github.io`
    -   `CNAME` `@` (root) → `github.hurrell.net` (proxied); used for a redirect — see "Page Rules" below.
    -   `CNAME` `www` → `github.hurrell.net` (proxied); used for a redirect — see "Page Rules" below.
-   Page Rules for `hurrell.net`:
    -   `hurrell.net/*` via Forwarding URL (301 — Permanent Redirect) → `https://greg.hurrell.net/$1`
    -   `www.hurrell.net/*` via Forwarding URL (301 — Permanent Redirect) → `https://greg.hurrell.net/$1`
-   DNS for `greghurrell.net` (and a couple of other similar domains that I have):
    -   `CNAME` `@` (root) → `github.greghurrell.net` (proxied); used for a redirect — see "Page Rules" below.
    -   `CNAME` `www` → `github.greghurrell.net` (proxied); used for a redirect — see "Page Rules" below.
-   Page Rules for `greghurrell.net`:
    -   `greghurrell.net/*` via Forwarding URL (301 — Permanent Redirect) → `https://greg.hurrell.net/$1`
    -   `www.greghurrell.net/*` via Forwarding URL (301 — Permanent Redirect) → `https://greg.hurrell.net/$1`

The net effect of the above on requests is:

-   [greg.hurrell.net (HTTPS)](https://greg.hurrell.net/) → handled by GitHub Pages site.
-   [greg.hurrell.net (HTTP)](http://greg.hurrell.net/) → redirects to HTTPS URL.
-   [hurrell.net (HTTPS)](https://hurrell.net/) → redirected to [greg.hurrell.net (HTTPS)](https://greg.hurrell.net).
-   [hurrell.net (HTTP)](http://hurrell.net/) → redirected to [greg.hurrell.net (HTTPS)](https://greg.hurrell.net).
-   [www.hurrell.net (HTTPS)](https://www.hurrell.net/) → redirected to [greg.hurrell.net (HTTPS)](https://greg.hurrell.net).
-   [www.hurrell.net (HTTP)](http://www.hurrell.net/) → redirected to [greg.hurrell.net (HTTPS)](https://greg.hurrell.net).
-   [greghurrell.net (HTTPS)](https://greghurrell.net/) → redirected to [greg.hurrell.net (HTTPS)](https://greg.hurrell.net).
-   [greghurrell.net (HTTP)](http://greghurrell.net/) → redirected to [greg.hurrell.net (HTTPS)](https://greg.hurrell.net).
-   [www.greghurrell.net (HTTPS)](https://www.greghurrell.net/) → redirected to [greg.hurrell.net (HTTPS)](https://greg.hurrell.net).
-   [www.greghurrell.net (HTTP)](http://www.greghurrell.net/) → redirected to [greg.hurrell.net (HTTPS)](https://greg.hurrell.net).
-   Non-root requests get redirected too; eg. [www.hurrell.net/cv-full.en.html](https://www.hurrell.net/cv-full.en.html) → [greg.hurrell.net/cv-full.en.html](https://greg.hurrell.net/cv-full.en.html).

Note that all the redirects are a single "hop", which you can see with a command like `curl -L -i http://www.hurrell.net/cv-full.en.html`; it shows an immediate 301 redirect to the HTTPS URL on the GitHub Pages site.

Credit for the Page Rules configuration goes to [this Stack Overflow answer](https://stackoverflow.com/questions/55274360/cloudflare-redirect-domain) and [comment](https://stackoverflow.com/questions/55274360/cloudflare-redirect-domain#comment126284596_64796153). Conveniently Cloudflare gives you three Page Rules for free with every site.

### Case study #2: hex.wincent.com

#### GitHub set-up

-   Source code: [github.com/wincent/hextrapolate](https://github.com/wincent/hextrapolate).
-   [Build script](https://github.com/wincent/hextrapolate/blob/main/publish.sh).
-   [`gh-pages` branch](https://github.com/wincent/hextrapolate/tree/gh-pages).
    -   [wincent.github.io/hextrapolate](https://wincent.github.io/hextrapolate): GitHub pages site for this repo (redirects to `hex.wincent.com`).
    -   [`CNAME` configuration](https://github.com/wincent/hextrapolate/blob/gh-pages/CNAME), telling GitHub that there's a `CNAME` for `hex.wincent.com` pointing at the GitHub pages site for this repo.

#### Cloudflare set-up

-   DNS for `wincent.com`:
    -   `CNAME` `hex` → `wincent.github.io`
    -   A zillion other `A` and `CNAME` records for various things hosted elsewhere, like:
        -   `A` record for `git.wincent.com` pointing at an EC2 Elastic IP.
        -   `A` record for `wincent.com` root pointing at another Elastic IP.
        -   `CAA` record `wincent.com` saying that `letsencrypt.org` is allowed to issue certificates; this works because GitHub Pages uses Let's Encrypt to create the certificate for `hex.wincent.com` and I also use Let's Encrypt to generate the other certificates for `wincent.com`, `git.wincent.com` (etc) domains on EC2. If GitHub Pages ever switches to a different Certificate Authority, I'll have to add another `CAA` record.
-   Page Rules for `wincent.com`: none.

### Case study #3: s3.wincent.com

As the name suggests, this is a AWS S3 bucket, which I use for hosting binary archives. Normally, these would only be accessible over HTTP, not HTTPS, because Amazon uses a wildcard certifate that does not match buckets with dots in their names (ie. it covers `bucket.s3.amazonaws.com` but not `s3.wincent.com.s3.amazonaws.com`). Ideally I would have chosen a different bucket name, but this one was created many moons ago, and there are links to it out in the wild.

As suggested in [this ServerFault Pro-Tip](https://serverfault.com/a/661982), we can see the certificate info as follows (edited for brevity, but note the `Subject Alternative Name` info, which says `DNS:*.s3.amazonaws.com, DNS:s3.amazonaws.com`):

```shell
$ echo | openssl s_client -showcerts \
  -servername s3.wincent.com.s3.amazonaws.com \
  -connect s3.wincent.com.s3.amazonaws.com:443 2> /dev/null | \
  openssl x509 -inform pem -noout -text
Certificate:
    Data:
            ...
        X509v3 extensions:
            ...
            X509v3 Subject Alternative Name:
                DNS:*.s3.amazonaws.com, DNS:s3.amazonaws.com
```

#### Cloudflare set-up

-   DNS for `wincent.com`:
    -   `CNAME` `s3` → `s3.wincent.com.s3.amazonaws.com` (proxied)
-   Under SSL/TLS, turn on "Flexible" mode (default is "Full"):
    -   Note that this means the traffic between Cloudflare and Amazon is not encrypted, so downloading from https://s3.wincent.com only gives the illusion of security.
    -   Also note that the "Flexible" mode applies to the entire domain, but this is OK because I'm not using Cloudflare proxying for anything else under wincent.com.
