![](twin__threefold_mgmt.png  )

# ThreeFold Farmer Management System

Stores information like:

- farms and relation to [3Node](threefold__3node)s
- pricing
  - of CU/SU/NU
  - can be more than 1
  - can be linked to specific groups of users (customers)
  - can be linked to farms
- blacklist for customers:
  - specify who can use a [3Node](threefold__3node) capacity
  - blacklist for consumers of capacity in relation to [3nodes](twin__3node.md)
  - can be linked to farms
- reserve [3Node](threefold__3node)s (are reserved, not usable for capacity, but still count for farming)
- cultivation wallet: where does money come to as paid for users
  - can be linked to farms
- escalation to farmer when issues
  - over chat in [Digital Twin](threefold__digitaltwin)
  - e.g. node down, registration of capacity did not work, inability to do billing,...

executes on

- billing for the farmer
  - asks for payment to the right digital twin of the consumer using the [autopay](threefold__autopay.md) system.
- some basic health check & escalation to [notification system](twin__notifications.md).

## Implementation

Accessible by [Zero-OS](threefold__zos) and any other Digital Twin over Rest Interface.

In version 0.9 this will be done as data files which need to be editted, an use remote interface like ftp.

- specified in [dtml](threefold__dtml.md) or json
- accessible on [dtfs](threefold__dtfs.md)
- interface = [dtftp](threefold__dtftp.md)

> No UI features in 0.9 release, only editable over [DTFS](threefold__dtfs.md).

## Roadmap

- power management (< end March)
  - make sure that nodes which are reserved are turned on once a day to do the registration of uptime
- rating system for farmers & nodes
- monitoring overview of health of [3Node](threefold__3node)s