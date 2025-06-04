---
tags: wiki
title: Peripherals
---

Notes on peripherals because, believe it or not, my cable management is so obsessive that actually getting around the back of my desk and figuring out what is plugged into what is kind of difficult.

# Display

[BenQ 2700U](https://www.benq.com/en-us/monitor/professional/pd2700u.html):

![benq-pd2700u-ports](/system/images/benq-pd2700u-ports.png)

Not using the "hub" functionality because it is not reliable enough in my experience, but plugging:

- Laptop video coming in via DisplayPort (v1.4) connector (from dock, see below), labeled as "D-IN" in the photo.
- Desktop video coming in via Mini DisplayPort (v1.4), labeled as "MINI D" in the photo.

One day, I'd like to upgrade to the 5K model, the [BenQ PD2730s](https://www.benq.com/en-us/monitor/professional/pd2730s.html), which [will have](https://www.benq.com/en-us/monitor/professional/pd2730s/spec.html):

- HDMI (v2.1)
- DisplayPort (v1.4)
- Thunderbolt 4 ([recommended](https://www.benq.com/en-us/campaign/monitor-for-mac/articles/how-do-i-connect-my-mac-m1-to-benq-monitor-update.html) by BenQ for connecting Macs)

# Dock

[OWC Thunderbolt 3 14-port dock](https://www.owc.com/solutions/thunderbolt-3-dock-14-port):

![owc-thunderbolt-3-dock-14-port-back](/system/images/owc-thunderbolt-3-dock-14-port-back.png)

From left to right (as viewed from the back), I'm connecting:

- USB 3.1 "high-powered" port (USB-A): USB-A connector running to micro-USB connector on power port of UGREEN switching hub.
- USB 3.1 port (USB-A): empty.
- USB 3.1 port (USB-A): to data port (1) on back of UGREEN switching HUB.
- USB 3.1 port (USB-A): empty
- S/PDIF (digital audio output): empty
- Gigabit ethernet: via crossover cable to desktop PC
- Thunderbolt 3 (15W): USB-C/Thunderbolt connector running to monitor (into DisplayPort socket, as mentioned above)
- Thunderbolt 3 (host port, 96W): USB-C/Thunderbolt connector running to laptop (USB-C/Thunderbolt port).
- Mini DisplayPort: empty
- DC IN (20V 9A): power in

In the future, I'd like to upgrade to the [CalDigit TS5 Plus](https://www.caldigit.com/thunderbolt-5-dock-ts5-plus/), which would deliver 140W over the host port, as well as offering more ports overall.

# USB switching hub

[UGREEN 4-port USB 3.0 switch](https://www.amazon.es/dp/B01N6GD9JO):

- Front (inputs, from left to right, as viewed from the front):
    - USB-A port: empty
    - USB-A port: to keyboard (terminating with a micro-USB connector)
    - USB-A port: Blue Yeti microphone (terminating with a micro-USB connector)
    - USB-A port: Elgato Facecam (terminating with a USB-C connector)
- Rear (outputs, from right to left, as viewed from the back):
    - Output 1: USB-A to USB-A cable to dock (for use with laptop)
    - Output 2: USB-A to USB-A cable to desktop PC
