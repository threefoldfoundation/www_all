# Hercules Software Development Kit (SDK)

![](threefold__bh1.png  )

## What is Hercules Software Development Kit (SDK)

The Hercules Software development kit present a platform for developers and systems integrators to create and deploy the IT applications and services on the [ThreeFold Grid](threefold__threefold_grid). The SDK is a total end-to-end development platform to create solutions on the TF Grid and can run on the grid (or on a local server). It uses the [Jumpscale framework](https://github.com/threefoldtech/js-ng)

### Jumpscale: The automation platform which makes the 3Bot possible

Jumpscale is an automation framework written in Python. It has been developed for more than a decade and originates from an automation product that was acquired by SUN Microsystems from Q-Layer, which was one of our previous companies. Our newest release is version 11, called JS-NG.

Jumpscale is the foundation of the autonomous layer. To get to autonomous operations, IT experts have to model IT architectures. These models have to describe all the components involved in creating the architecture (e.g. a container running a web server, a container running a database server, and then all the required network paths between these two containers and the rest of the world). Once this description is complete and tested, it can be given to the autonomous layer which launches, monitors, and operates the architecture. Hence, autonomous IT.

- Uses our other components:
  - [Hercules Network](threefold__hercules_network.md)
  - [Hercules Compute](threefold__hercules_compute.md)
  - [Hercules Storage](threefold__hercules_storage.md)
  - [Hercules Container](threefold__hercules_containers.md)

## Main Benefits

### Reliable / Secure

*   [Hercules Protect](threefold__hercules_protect.md): no hacking surface to the Zero-Nodes, integrate silicon root of trust
*   [Hercules Filesystem](threefold__hercules_filesystem.md): dedupe, zero-install, hacker-proof deployment of all required components
*   [Hercules Compliance](threefold__hercules_compliance.md) (OEM only): on request, ultra-strong compliance can be proven (location, network usage, auditing trails …)

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



## Architecture

<!-- Insert diagram describing architecture -->

<!-- create specific  image -->

![](threefold__bh3.png  )