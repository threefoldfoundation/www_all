# Provisioning Code

## Prerequisites

In order to be able to deploy anything on the grid, you will have to have the following components beforehand

- Install ThreeFold Connect App to get an identity. More details could be found in [ThreeFold Connect installation](sdk__threefold_connect_install.md) and [ThreeFold Connect setup](sdk__threefold_connect_overview.md)
- Installation of js-sdk. Getting started instructions to install the sdk could be found [here](sdk__3bot_local_install.md)
- Setup ThreeFold Connect identity on the grid using the installed sdk. Further details could be found [here](sdk__3bot_identity_configure.md)

Identity could be verified by checking `j.core.identity.me`

- Install wireguard software. Instructions to how to get his installed on your platform could be found [here](https://www.wireguard.com/install/)
- capacity reservation are not free so you will need to have some [TFT](threefold__threefold_token)s (TFT) to play around with. Instructions to get tokens to your [Stellar Blockchain](threefold__stellar_blockchain) wallet could be found [here](tokens.md

Once the previously mentioned requirements are met, you are ready to deploy on the grid. This is mainly done using the `zos` client. Some examples are further explained below

## Code Examples

This section contains some example code showing how you could generate workloads reservation using the python SDK.

Examples:

- [Reserve some IT capacity by creating a capacity pool](sdk__code_pool.md)
- [Deploy a network](sdk__code_network.md)
- [Deploy a container](sdk__code_container.md)
- [Deploy a kubernetes cluster](sdk__code_kubernetes.md)
- [Deploy a Minio server for archive storage](sdk__code_storage.md)
- [DNS management](sdk__code_web.md)