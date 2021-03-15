# Hercules Compute 

![](threefold__hercules1.png  )


## What is Hercules Compute?

Hercules Compute is a container management & deployment platform. It presents a 1 click deployment solution for a full decentralized Kubernetes environment.  *Every* [3Node](threefold__3node) on the TF Grid is able to run these containers and/or master and worker nodes.  This presents the advantage that edge based [3Node](threefold__3node)s and  core data based [3Node](threefold__3node)s centers create a distributed platform of nodes providing full scale-out capabilities to solutions. 

Hercules compute uses the ThreeFold capacity layer build by hardware and [Zero-OS](threefold__zos) and is orchestrated by your virtual system administrator called [3Bot](threefold__3bot_def).

## Features

*   It is 100% compatible with Kubernetes & Docker (market std)
*   It has full integration with [Zero-OS](threefold__zos) overlay networking layer (efficient, ultra secure (encrypted) network between the containers)
*   Deploying it is easy at the edge and central datacenter locations
*   It can be integrated with scalable & capable monitoring systems (prometheus based). Monitoring agent deployed by default in the containers and kubernetes nodes
*   It can be integrated with our advanced billing/charge back mechanism
*   Very secure because it uses a strict single-tenant policy!

## Main Benefits

### Secure and Reliable

*   [Hercules Protect](threefold__hercules_protect.md): no hacking surface to the Zero-Nodes, integrated silicon route of trust
*   [Hercules P2P Network](threefold__hercules_p2p_network.md): encrypted private overlay network connects all *N* containers to all other *(N-1)* containers.  Consider it to be your Virtual Private Datacenter.
*   [Hercules Planetary Network](threefold__hercules_planetary_network.md): a true global single backplane network connecting us all
*   [Hercules Filesystem](threefold__hercules_filesystem.md) (v2.x): A filesystem that has built in deduplication facilities , creates a zero-install environment for applications and is hacker-proof for use in containers on Kubernetes
*   [Hercules Web Gateway](threefold__hercules_web_gateway.md): intelligent connection between web (internet) and container services.  By default your private virtual (overlay) network is not connected tot he public internet.  You have to design the network to be connected to the public internet through a web gateway.  This web gateway can exist anywhere on the TF Grid.

####  Sustainable & Decentralized

* Green Energy efficient compute and storage platform
* Decentralized and distributed (owned by many - installed everywhere)

#### Smart & Manageable

*   [Hercules Smart Contract](threefold__hercules_smart_contract.md): 
    *   Blockchain supported deployment of network services
    *   Fine-grain control over where to deploy
    *   Multi-signature 
    *   Verification of location, governance steps 
    *   Auditability
*   [Hercules Monitoring](threefold__hercules_monitoring.md): Prometheus/Grafana based monitoring system
*   [3Bot](threefold__hercules_3bot.md): use a virtual system administrator to manage your environment.
*   [3bot SDK](threefold__hercules_3botsdk.md): manage one million instances as easy as 1 (datacenter as code)
*   [Hercules Boot](threefold__hercules_boot.md): 
    *   +5 different ways how to boot the zero-nodes (ready for global deployments)
    *   Blockchain support in bios (Zero-OS TBD version)
*   [Hercules Charge-Back](threefold__hercules_charge_back.md): 
    *   By default there is already chargeback based on [TFT](threefold__threefold_token) 
    *   on request, any chargeback mechanism can be integrated super easily
*   [3Bot Hercules Chat Wizard](threefold__hercules_chat_wizard.md): 
    * Chat with your private virtual system admin assistant to repair, manage your deployment
    * Easy to extend and create your own chatflows
*   Integration with zero-hub see https://hub.grid.tf/
*   Integration with TF Directory see http://explorer.grid.tf/  (find capacity to deploy workloads on)
#### Scalable

* Use or deploy where needed
* Small, medium or super large
* Create ready to go off the shelf blockchain protocol nodes.
* see [hercules_scale](threefold__hercules_scale.md)


### Reliable / Secure

*   [Hercules Protect](threefold__hercules_protect.md): no hacking surface to the Zero-Nodes, integrate silicon root of trust
*   [Hercules Filesystem](threefold__hercules_filesystem.md): dedupe, zero-install, hacker-proof deployment of all required components
*   [Hercules Compliance](threefold__hercules_compliance.md) (OEM only): on request, ultra-strong compliance can be proven (location, network usage, auditing trails …)


## Roadmap

### v2.1: Active

*   Integrated with our grid based [3Bot](threefold__3bot_def) solution: interactive workflows for deployment/upgrade/troubleshooting (chatbots in Jumpscale) 
*   Custom logging: [Zero-OS](threefold__zos) Alerts & Logs to a memory database of choice for customer (redis, at a location at choice of the customer).
*   Statistics aggregated in memory database of choice for customer (redis, at a location at choice of the customer).
*   Super fast boot time: the use of our ultra-efficient virtual filesystem allows boot in seconds without downloading of docker images (v1.2).
*   Edge cloud efficient virtual filesystem: deduped virtual filesystem leads to huge space & bandwidth savings
*   Hacker proof launch of files: each file started gets compared against a secure hash making sure only the pre-defined files can be launched in a container
*   redundancy for Kubernetes controller


### v2.x: OEM (on request by larger customers)

*   [Hercules Virtual Disk integration](threefold__hercules_disk.md)