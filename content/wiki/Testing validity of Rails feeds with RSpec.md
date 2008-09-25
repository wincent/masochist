---
tags: rspec rails atom xml
---

It's actually quite hard to find information about testing feeds because *so* many pages out there feature the words "feed" nowadays, but some of the first results that I turned up talked about the [FeedValidator](/wiki/FeedValidator) [gem](/wiki/gem).

The gem actually hits the W3C Feed Validation service, although it uses caching to minimize redundant queries. This approach doesn't really appeal to me because of the latency of performing a query across the network, as well as the reliance on a third-party service (if the service goes down you can't run your specs). Also, the need to avoid hammering the service, even with caching, makes running really comprehensive specs prohibitive.

So I started looking for offline validation solutions. My first attempt was using `xmllint` because it comes installed on both my local ([Mac OS X](/wiki/Mac_OS_X) [Leopard](/wiki/Leopard)) machine and my remote ([Red Hat](/wiki/Red_Hat)) host.

    $ curl http://www.atompub.org/2005/07/11/atom.rnc > spec/2005-07-11-atom.rnc
    $ curl http://www.atompub.org/2005/08/17/atom.rnc > spec/2005-08-17-atom.rnc

This didn't work because `xmllint` obviously doesn't handle [RelaxNG](/wiki/RelaxNG) schemas in the "compact" format:

    $ xmllint --schema spec/2005-08-17-atom.rnc public/wiki.atom
    spec/2005-08-17-atom.rnc:1: parser error : Start tag expected, '<' not found
    # -*- rnc -*-
    ^
    Schemas parser error : xmlSchemaParse: could not load 'spec/2005-08-17-atom.rnc'.
    WXS schema spec/2005-08-17-atom.rnc failed to compile

So I downloaded [Trang](/wiki/Trang) to try converting the compact schema into another format:

    $ curl -O http://www.thaiopensource.com/download/trang-20030619.zip
    $ curl -O http://www.thaiopensource.com/download/jing-20030619.zip
    $ unzip trang-20030619.zip 
    $ unzip jing-20030619.zip 
    $ java -jar trang-20030619/trang.jar spec/2005-08-17-atom.rnc spec/2005-08-17-atom.xsd
    $ xmllint --schema spec/2005-08-17-atom.xsd public/wiki.atom 
    spec/2005-08-17-atom.xsd:83: element complexType: Schemas parser error : CT local: The content model is not determinist.
    spec/2005-08-17-atom.xsd:107: element complexType: Schemas parser error : CT local: The content model is not determinist.
    spec/2005-08-17-atom.xsd:258: element complexType: Schemas parser error : CT local: The content model is not determinist.
    spec/2005-08-17-atom.xsd:61: element complexType: Schemas parser error : CT 'atomPersonConstruct': The content model is not determinist.
    WXS schema spec/2005-08-17-atom.xsd failed to compile

Googling for information on these "non determinist" errors suggested that this *might* be a bug in the version of libxml I was using, but seeing as it was a bit of a long shot and I don't really want to go changing that on either of my machines I decided to continue looking for alternative solutions.

Trying another format:

    $ java -jar trang-20030619/trang.jar spec/2005-08-17-atom.rnc spec/atom.dtd
    /Users/wincent/trabajo/unversioned/wincent.com/src/spec/2005-08-17-atom.rnc:306:13: error: sorry, wildcards are not supported
    ...

And many more errors omitted from the excerpt... Evidently a DTD cannot express all of the constraints that can be specified in a RelaxNG schema.

So my next attempt was to use [Jing](/wiki/Jing), which [Trang](/wiki/Trang) depends on, to do the validation instead of `xmllint`:

    $ java -jar jing-20030619/bin/jing.jar spec/2005-08-17-atom.rnc public/wiki.atom 
    spec/2005-08-17-atom.rnc:1:1: fatal: Content is not allowed in prolog.

Evidently `jing` doesn't like the compact syntax either (although it would have if I had read the manual and seen the `-c` switch!), so we try the XML syntax and voila it works:

    $ java -jar jing-20030619/bin/jing.jar spec/2005-08-17-atom.rng public/blog.atom; echo $?
    public/blog.atom:7:29: error: bad character content for element
    1
    $ java -jar jing-20030619/bin/jing.jar spec/2005-08-17-atom.rng public/wiki.atom; echo $?
    0

So here we have offline validation with information about problems printed to the [standard error](/wiki/standard_error) and the process exit code indicating failure or success. All we need now is to wrap this up in the appropriate [RSpec](/wiki/RSpec) code.
