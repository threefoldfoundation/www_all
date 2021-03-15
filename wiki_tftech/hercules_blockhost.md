# Hercules Blockhost

![](tftech__bh1.png  )

## What is Hercules Blockhost

Blockchain protocols (of which there are many, to name a few, Ethereum, EOS.IO, Ripple, Steem etc) have to make a choice on how to actually run their blockchain nodes to operate their protocol.  There is a spectrum of options to choose from but the two most common ones are the following ones:

*   Create a software package (source code or binaries) that can be downloaded and run on virtual machines or  containers on public clouds.  Examples of public cloud are Amazon Web Services, Google Cloud Platform  and Microsoft Azure.
*   Create the same software package and rely on people to run this software on their laptop or home / office server or on specified mining equipment.

Both options come with a number of disadvantages.  Using the public cloud presents ease of deployment and hassle free operations but comes with a price:  the actual purpose of blockchain protocols is lost as clouds do not build decentralized deployments.  For example [ethereum runs for almost 60% on public cloud services](https://thenextweb.com/hardfork/2019/09/23/ethereum-nodes-cloud-services-amazon-web-services-blockchain-hosted-decentralization/).  

On the other hand there is a  desire to have individuals select and operate their own (specific) hardware setups. But there is a huge barrier for doing so (knowledge, capital requirements etc.) which makes the blockchain protocols vulnerable to pooling of capacities by large organizations [finetuning their capabilities to run these protocols](https://www.newsbtc.com/2018/04/18/consolidation-in-cryptocurrency-mining-industry-to-pressure-the-price-of-bitcoin/).  This is also referred to as “cloud mining”.

Both options lead to sub-optimal operations of blockchain protocols and do not deliver on the promise of being decentralized, peer to peer and  by people for people.

The Hercules blockhost product allows blockchain protocols to take advantage of the decentralised and distributed nature of the TF Grid while still enjoying hassle free creation and operation of blockchain nodes. 

Also, if people are interested in operating their own blockchain nodes they can quite easily invest in some hardware, install the ThreeFold [Zero-OS](threefold__zos) operating system to create a [3Node](threefold__3node) creating new capacity to the TF grid.  This capacity can then be utilized to operate blockchain nodes. 

![](tftech__bh2.png  )


## Features
* Uses our other components
    - [ZOS Containers](tftech__zos_container.md)
    - [VDC Network](tftech__vdc_network.md)
    - [VDC Storage](tftech__vdc_storage.md)
    - [Hercules Blockhost](tftech__hercules_blockhost.md)
    - [Hercules Coder](tftech__hercules_coder.md)
*   Flexible
    * Choose to use existing nodes and deploy blockchain protocol nodes
    * Choose to deploy TF [3Node](threefold__3node)s, farm TF Tokens and deploy blockchain protocol nodes.

## Main Benefits

### Reliable / Secure

*   [Hercules Protect](tftech__zos_protect.md): no hacking surface to the Zero-Nodes, integrate silicon root of trust
*   [ZOS Filesystem ](zos_filesystem): dedupe, zero-install, hacker-proof deployment of all required components
*   [Hercules Compliance](tftech__vdc_compliance.md) (OEM only): on request, ultra-strong compliance can be proven (location, network usage, auditing trails …)

####  Sustainable & Decentralized

* Green Energy efficient compute and storage platform
* Decentralized and distributed (owned by many - installed everywhere)

#### Smart & Manageable

- [Hercules Smart Contract](sdk__smart_contract.md):
  - Blockchain supported deployment of network services
  - Fine-grain control over where to deploy
  - Multi-signature
  - Verification of location, governance steps
  - Auditability
- [ZOS Monitoring](tftech__zos_monitoring.md): Prometheus/Grafana based monitoring system
- [3Bot](tftech__3bot.md): use a virtual system administrator to manage your environment.
- [3bot SDK](tftech__3bot_sdk.md): manage one million instances as easy as 1 (datacenter as code)
- [ZOS Boot](tftech__zos_boot.md):
  - +5 different ways how to boot the zero-nodes (ready for global deployments)
  - Blockchain support in bios (Zero-OS TBD version)
- [Hercules Charge-Back](threefold__hercules_charge_back.md):
  - By default there is already chargeback based on [TFT](threefold__threefold_token)
  - on request, any chargeback mechanism can be integrated super easily
- [3Bot 3Bot Chat Wizard](tftech__3bot_chat_wizard.md):
  - Chat with your private virtual system admin assistant to repair, manage your deployment
  - Easy to extend and create your own chatflows
- Integration with zero-hub see https://hub.grid.tf/
- Integration with TF Directory see http://explorer.grid.tf/ (find capacity to deploy workloads on)
#### Scalable

* Use or deploy where needed
* Small, medium or super large
* Create ready to go off the shelf blockchain protocol nodes.
* see [vdc_scale](tftech__vdc_scale.md)



## Architecture

The ThreeFold grid provides raw compute and storage utility by people for people, ideal to create independent blockchain node operations by people for the blockchain project network.


![](tftech__bh3.png  )



>TODO: need to describe the real difference here which is thanks to the smart contract layer