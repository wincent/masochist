---
tags: development wiki
---

[Defense in depth](/wiki/Defense_in_depth) is a security paradigm in which multiple layers of defense are engineered into a system so that if an attacker breaches one or more levels within a system, there is still a chance that the remaining levels will prevent a successful attack.

An example of [defense in depth](/wiki/defense_in_depth) as applied to a web application might include:

-   Protecting the server with a firewall
-   Monitoring for intrusion attempts with a port scanning sentry and log watcher
-   Keeping all software on the server up to date
-   Disallowing root logins
-   Allowing [SSH](/wiki/SSH) logins only (not [telnet](/wiki/telnet))
-   Rejecting remote connections to the database
-   Using filesystem permissions to limit visibility of private data to other users
-   Encrypting all [HTTP](/wiki/HTTP) traffic (with [SSL](/wiki/SSL)) to guard against man-in-the-middle attacks
-   Using [CAPTCHAs](/wiki/CAPTCHAs) to reduce possibility of automated attacks
-   Implementing a user login system
    -   Imposing minimum requirements on passphrase quality
    -   Storing only passphrase digests in the database rather than actual passphrases
    -   Using random salts to generate digests
-   Requiring passphrase confirmation for critical actions to protect against cookie capture attacks
-   Storage of sensitive information outside the "web root"
-   Filtering of the sensitive information from logs
-   Implementing an [Access Control List](/wiki/Access_Control_List) or some other kind of access control within your application at various levels in the [Model-View-Controller](/wiki/Model-View-Controller) paradigm
-   Limiting privileges of executable code using [PHP Safe Mode](/wiki/PHP_Safe_Mode), [Apache](/wiki/Apache)'s [suEXEC](/wiki/suEXEC), or similar
-   Possible use of [security through obscurity](/wiki/security_through_obscurity)

These are just some general possibilities; in the specific case of a given application a [defense in depth](/wiki/defense_in_depth) strategy would look to employ security measures at other points as well.
