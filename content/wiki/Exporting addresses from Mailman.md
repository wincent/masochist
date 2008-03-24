---
tags: mailman export
---

These notes were made while exporting addresses from the [Mailman](/wiki/Mailman) mailing list installation on my old web server, in preparation for the move to the new host.

    cd /var/mailman/bin
    sudo -v
    LISTS=$(sudo ./list_lists -b)
    for LIST in $LISTS
    do
      OUT=~/$LIST-members.txt
      echo "Dumping $LIST to $OUT"
      sudo ./list_members -o $OUT $LIST
      echo "Dumped $(wc -l $OUT | awk '{print$1}') addresses"
    done
