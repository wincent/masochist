---
tags: migration mail
---

These notes were made while migrating my mail server server from my old host, [Rackspace](/wiki/Rackspace), to my new host, [INetU](/wiki/INetU).

## Strategy

The two main goals are to keep downtime to a minimum and to not lose any incoming email during the move. Luckily the Internet's mail infrastructure copes well with transitory failures and unreliable connections; this means that we can afford a small window of inaccessibility in which neither the old server nor the new server will be online accepting incoming mail. During that window we transfer the mailboxes from the old server to the new, and [MTAs](/wiki/MTAs) trying to deliver mail will get temporary bounce messages; in this way when the new server comes back online and the MTAs retry delivery, the mail will get through and there won't be any messages that got inappropriately routed to the old server *after* we transferred the mailboxes.

## Method

There are three "windows" in the process: before the downtime, the downtime itself, and after the downtime. In order to minimize the downtime we'll do as much work as possible in the two windows on either side. While it would be possible to minimize the downtime away to zero through the use of secondary mailservers that would spool mail and later forward it, the built-in retrying mechanisms of the [MTA](/wiki/MTA) infrastructure mean that such measures aren't really necessary. Your mileage may vary, but I'm estimating roughly an hour in which messages get temporarily bounced, and for my business needs that kind of exceptional situation is fine given that it only occurs once every three years or so.

### The "before" window

We do as much preparation on the new machine here as possible:

-   Set the [TTL](/wiki/TTL) on the [DNS](/wiki/DNS) to a relatively low value like 600 seconds (10 minutes) so that any changes made to the DNS propagate out quickly
-   Create accounts for the email addresses to be transferred
-   Create (empty) mailboxes as required that will be used when it comes time to import

We'll also want to do some trial runs at this point, and make sure that we have working scripts for doing stuff like importing mailboxes. Developing such scripts may not be a trivial task if your migration is between machines with different operating systems and different software, so they should be prepared well in advance.

To provoke the actual move we update the [MX](/wiki/MX) record for the domain to point to an [IP](/wiki/IP) on the new server *on which [sendmail](/wiki/sendmail) is **not** listening*. This point is key. We *want* remote [MTAs](/wiki/MTAs) that try connecting to the server to get connection failures at this moment, as these will be identified as temporary failures and the MTA will retry again later.

We don't want to start accepting email yet, even though we've already set up the accounts and mailboxes, because we want to import the old messages first.

### The "during" window

So once the DNS change goes live we wait about 10 minutes (or whatever interval we have as a TTL). This should be enough time to minimize the risk of a machine attempting delivery to the old machine *after* we've done the mailbox export/transfer/import.

After this interval, we export the mailboxes from the old server and transfer them to the new server, where we import them. Importing is done with a script for speed.

### The "after" window

Another DNS update: this time we update the MX again, this time pointing it at an [IP](/wiki/IP) on the new machine on which the server is listening. Within about 10 minutes incoming mail should be working again, and any [MTAs](/wiki/MTAs) which got temporary failures during the downtime should soon retry.

One trick you can apply here (if you have no control over how fast your host updates the [DNS](/wiki/DNS)) is to tell [sendmail](/wiki/sendmail) to listen on all interfaces now that the migration is complete; that way it doesn't matter how long the host takes to do the DNS update.

On the old server it is worth setting up some forwarding just in case any [MTAs](/wiki/MTAs) with stale [DNS](/wiki/DNS) information try connecting and delivering old mail.

The major crunch is now over so you can now going about doing the rest of the migration. I had a *lot* of things to move over, so I did the mail first and only later followed through with things like the web server.

## Monitoring for [DNS](/wiki/DNS) changes

My hosts manage the [DNS](/wiki/DNS) for me and that means that I don't have precise control over *when* the changes that I've requested will go live, although I have an approximate idea. In my case I wanted the [MX](/wiki/MX) records updated for both wincent.com and wincent.org. I used the following [shell](/wiki/shell) snippet to query their nameservers every 60 seconds to see when the changes went live:

    while true
    do
      dig @ns3.inetu.net MX wincent.com | grep MX | egrep -v '^;'
      dig @ns4.inetu.net MX wincent.com | grep MX | egrep -v '^;'
      dig @ns3.inetu.net MX wincent.org | grep MX | egrep -v '^;'
      dig @ns4.inetu.net MX wincent.org | grep MX | egrep -v '^;'
      sleep 60
    done

This basically yields four lines like this each minute:

    wincent.com.		600	IN	MX	10 secure.wincent.com.
    wincent.com.		600	IN	MX	10 secure.wincent.com.
    wincent.org.		600	IN	MX	10 secure.wincent.com.
    wincent.org.		600	IN	MX	10 secure.wincent.com.

As soon as the server name on the right changed I knew the DNS update had taken place.
