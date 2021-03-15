# Hercules Containers

ThreeFold native container technology as implemented in [Zero-OS](threefold__zos).

Uses capacity layer from [Zero-OS](threefold__zos) and your virtual system administrator called [3Bot](threefold__3bot_def) does the orchestration.

![](threefold__container_native.png  )

## Features

*   Import from Docker (market std for containers)
*   Integration with [Zero-OS](threefold__zos) overlay networking layer (efficient, ultra secure (encrypted) network between the containers)
*   Can be easily deployed at the edge
*   Integrated with scalable & capable monitoring system (prometheus based)
*   Can be integrated with our advanced billing/charge back mechanism
*   Single-tenant!

## Main Benefits

### Reliable

*   [Hercules Protect](threefold__hercules_protect.md): no hacking surface to the Zero-Nodes, integrate silicon route of trust
*   [Hercules P2P Network](threefold__hercules_p2p_network.md): encrypted overlay network connects the containers
*   [Hercules Filesystem](threefold__hercules_filesystem.md) (v2.x): dedupe, zero-install, hacker-proof for use in containers on kubernetes
*   [Hercules Web Gateway](threefold__hercules_web_gateway.md): intelligent connection between web (internet) and container services
*   [Hercules Planetary Network](threefold__hercules_planetary_network.md): a true global single backplane network connecting us all

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

### v2.2: on testnet (aug 2020)

*   integrated with our web based bot solution: interactive workflows for deployment/upgrade/troubleshooting (chatbots in jumpscale) 
*   Custom logging: [Zero-OS](threefold__zos) Alerts & Logs to a memory database of choice for customer (redis)
*   Statistics aggregated in memory database of choice for customer (redis)
*   zero time boot: the use of our ultra-efficient virtual filesystem allows boot in seconds without downloading of docker images (v1.2)
*   edge cloud efficient virtual filesystem: deduped virtual filesystem leads to huge space & bandwidth savings
*   hacker proof launch of files: each file started get's compared against a secure hash making sure only the pre-defined files can be launched in a container



### v2.x: OEM (on request by larger customers)

*   [Hercules Virtual Disk integration](threefold__hercules_disk.md)
