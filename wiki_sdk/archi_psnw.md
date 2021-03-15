# Planetary Secure Network 

![](threefold__planet_network.png  )

# Planetary Secure Network (PSN)

ThreeFold is working on a Planetary Scalable LAN, a Peer-to-Peer network which connects everthing with everyone in a direct [Peer2Peer](threefold__peer2peer) encrypted connection.

This is an overlay network which lives on top of the existing internet or other peer-to-peer networks created.

Benefits of this Planetary LAN :

- it finds shortest possible paths between peers;
- all is end-to-end encrypted;
- it allows for peer-to-peer links like meshed wireless;
- it can survive broken internet links and re-route when needed;
- it resolves the shortage of IPV4 addresses

We are creating and packaging clients for the multiple platforms (mobile and desktop).

![](threefold__planetary_network_0.png  )

## More Info

Unlimited scalable network, connects every user, digital twin and IT appliction running on the [ThreeFold Grid](threefold__threefold_grid).

Think about it like a network on top of the network which resolves some of the challenges today like redundancy, scale and security.

All traffic is encrypted, hackers do not see what is going on.

## Unique Features

- end 2 end encrypted
- each user and/or digital twin has a unique IP address which does not change over time or if internet network changes
- looks for shortest path between end points (e.g. if link goes down can look for other route)
- is a [Peer2Peer](threefold__peer2peer) system, our traffic can be routed over other nodes if this would be needed to reach our implementation

## architecture

![](threefold__qsnetwork_architecture.png  )

## implementation

- based on Yggdrasil
- supports mobile & desktop clients = [ThreeFold Connect](threefold__tfconnect)
- ipv6 based, links to our quantum safe storage backend.


### planetary network

![](tftech__planetary_lan.png  )

Whereas current computer networks depend heavily on very centralized design and configuration, this networking concept breaks this mould by making use of a global spanning tree to form a scalable IPv6 encrypted mesh network.  This is a [Peer2Peer](threefold__peer2peer) implementation of a networking protocol.

The following table illustrates high-level differences between traditional networks like the internet, and the planetary threefold network:

| Characteristic |	Traditional |	Planetary Network |
|---------------|-------------|---------------|
| End-to-end encryption for all traffic across the network |No | Yes |
| Decentralized routing information shared using a DHT | No |	Yes |
| Cryptographically-bound IPv6 addresses |	No 	| Yes |
| Node is aware of its relative location to other nodes 	| No | 	Yes |
| IPv6 address remains with the device even if moved |	No 	| Yes |
| Topology extends gracefully across different mediums, i.e. mesh |	No |	Yes |

#### What are the problems solved here?

The internet as we know it today doesn’t conform to a well-defined topology. This has largely happened over time - as the internet has grown, more and more networks have been “bolted together”. The lack of defined topology gives us some unavoidable problems:

- The routing tables that hold a “map” of the internet are huge and inefficient
- There isn’t really any way for a computer to know where it is located on the internet relative to anything else
- It’s difficult to examine where a packet will go on its journey from source to destination without actually sending it
- It’s very difficult to install reliable networks into locations that change often or are non-static, i.e. wireless mesh networks

These problems have been partially mitigated (but not really solved) through centralization - rather than your computers at home holding a copy of the global routing table, your ISP does it for you. Your computers and network devices are configured just to “send it upstream” and to let your ISP decide where it goes from there, but this does leave you entirely at the mercy of your ISP who can redirect your traffic anywhere they like and to inspect, manipulate or intercept it.

In addition, wireless meshing requires you to know a lot about the network around you, which would not typically be the case when you have outsourced this knowledge to your ISP. Many existing wireless mesh routing schemes are not scalable or efficient, and do not bridge well with existing networks.


The planetary network is a continuation & implementation of the [Yggdrasil](https://yggdrasil-network.github.io/about.html) network initiative. This technology is in early beta but has been proven to work already quite well.

![](sdk__archi_psn.png  )

![](sdk__archi_psn_bridge.png  )

![](sdk__archi_psn_public.png  )