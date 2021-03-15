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
