> IT” CAPACITY IS THE OIL THAT FUELS THE DIGITAL ECONOMY

# Capacity Layer

Today, IT capacity is mainly being delivered by means of centralized cloud technology which gets deployed in a private or public context. ThreeFold Tech has created technology to make the cloud 100% decentralized.

![alt_text](threefold__centralized_decentralized.png  )
 
 Our solution has two components: 
 
 - a [3Node](threefold__3node), which is the box which can deliver capacity in a very compute/storage and power efficient manner
 - the [3Bot](threefold__3bot_def), which is our “digital self” – it is the decentralized component which makes autonomous IT possible and allows the grid to scale forever.

![alt_text](threefold__many_to_many.png  )

The [3Bot](threefold__3bot_def)s are the coordinators which can run 100% autonomously – they are super intelligent digital creatures who know how to protect your data and how to deploy/manage any IT workload on the capacity layer, which is the grid of the [3Node](threefold__3node)s.

# The 3Node 

![alt_text](threefold__3node.png  )

The [3Node](threefold__3node) is a physical box which is connected to the Internet or a local network. A [3Node](threefold__3node) can be deployed privately, as well as for high-security use cases. The [3Node](threefold__3node)s deliver the required capacity for the TF Grid.



![alt_text](threefold__core_node_kernel.png  )

The [3Node](threefold__3node) boot process is ultra-safe and cannot be intercepted by hackers. It is designed in such a way that no person, not even ourselves, has access to the internals of the [Zero-OS](threefold__zos).

We do this by means of strong integration with the physical hardware security and boot capabilities (e.g. secure-boot). There is no shell in [Zero-OS](threefold__zos), no user interface, and no RPC layer (remote procedure call).

The only way how the [Zero-OS](threefold__zos) can be commanded is by means of the Blockchain Database.


![alt_text](threefold__3node_commanded.png  )

Core-0 is our main process manager which will deploy and manage our primitive workloads. There are three types of workloads: compute, storage, & network.
# 3 Node Primitive Workloads

The primitive workloads which are delivered by the [Zero-OS](threefold__zos):

<!-- tabs:start -->
##  **Compute = Containers-Based**

![alt_text](threefold__hw_os_virtualization.png  )

The world started with hardware virtualization (virtual machines). It was a big step in the right direction but has lead to many layers of complexity, and total cost of ownership did not get lower. Security is also a big issue.


![alt_text](threefold__virtualization_containers_threefold.png  )

Containerization is the current wave for deploying compute applications. It is more flexible and has big efficiency benefits, but complexity and security remain a big issue. A high level of automation can be achieved but it is a very centralized model where centralized managed applications are the big boss.



![alt_text](threefold__tf_containers.png  )

In our [Zero-OS](threefold__zos), we have eliminated lots of layers and as such we can be much more efficient and we are not dependent on third-party software vendors. Our operating system is not managed by humans. It is an autonomous system which gives you the ability to run any container workload in all safety while achieving more performance and efficiency. Our container technology is compatible with docker, yet still has quite a lot of great benefits.


##  **Storage = Zero-DB**


<table border="0">
  <tr>
   <td>

![alt_text](threefold__zero_db.png  ':size=250x400')   </td>
   <td>
    Backend Storage Engine
<ul>

<li>Can do +50.000 transactions per second

<li>Can work on SSD & HD

<li>Optimized for easy (soft/green) operation on HD

<li>Always append store (can keep unlimited history)

<li>Master-Slave replication
</li>
</ul>
   </td>
  </tr>
</table>

0-db is a super fast and efficient key-value store redis-protocol (mostly) compatible, which makes data persistent inside an always append datafile, with namespaces support.


## **Network = Zero-GW and Zero-Net**


<table border="0">
  <tr>
   <td>
    
![alt_text](threefold__0_net_0_gw.png  )

   </td>
   <td>
    <strong>Z-GW = Network Gateway</strong>
<p>

Interfaces:
<ul>

<li>VXlan

<li>IPv4/6

<li>Bridge to Public Network

<li>WireGuard

<li>HTTP(S) proxy
<p>
<strong>Z-NET =  Overlay Network</strong>
<p>
Wireguard based encrypted overlay network between any containers
</li>
</ul>
   </td>
  </tr>
</table>


![alt_text](threefold__overlay_network.png  )

 The Zero-nets are the overlay networks connecting all the containers. They can exit on multiple areas using the gateways. Here we called them web gateways but many types of access methods can be used (e.g. VPN technology or port forwarding). This allows for achieving full network and systems redundancy.

In the above picture, any datacenter or network gateway can fall away, and the solution will still be available.

<!-- tabs:end -->

# Smart Contract for IT

![](threefold__smartcontractit_intro.png  )

Autonomous self-driving IT is possible when we adhere to a few principles from the start:

*   Information technology architectures are configured and installed by bots not people
*   Human beings cannot have access to these architectures and change things.

When we stick to these two principles we have to do a lot of complicated work and thinking upfront - before deploying any architecture components and seeing any benefit.  While a typical IT setup today is based on trial and error continuously improving the installation to a point where everything works, the basis of self driving IT is that everything needs to be considered and described in a “contract” type format before deploying any component. Then and only then you can deploy self-driving and self-healing applications on a grid of capacity

A system that enforces these two principles if the TFTechnology stack. It works as follows:

![alt_text](threefold__smart_contract_for_it_steps.png  )

**STEP 1: IT Experts create smart contracts:**

IT experts create smart contracts describing what needs to be done in order to deploy this architecture. The smart contract has to be specific and describe each little detail of the IT architecture.  The experts create knowledge for the [3Bot](threefold__3bot_def)s (it's like god defining our DNA of our cells)

**STEP 2: Business and or Enduser customers consume smart contracts**: 

 Users have digital needs and in order to procure services for their digital needs they will find smart contracts describing applications (application setups) meeting their needs.  Consumers will instruct their [3Bot](threefold__3bot_def) to deploy an IT workload following their requirements buy using a smart contract created 

*   e.g. give me an archive of 1 PB in CH, e.g. deploy a CRM for 100 users, …
*   e.g. deploy my new banking app feature X
*   e.g. deploy my artificial intelligence data mining job for …

This gets translated to a very low level description of the IT workload as required (networkin topology, files needed, processes to start, ...)

**STEP 3:  Registraton of the smart contract:**

Creates & Registers the “IT” smart contract in the BCDB (Blockchain Database). 

The [Zero-OS](threefold__zos) nodes in cooperation with the smart contract execution code, will provision all the compute and storage capacity needed to meet the IT architecture’s requirement and do all the commercial trades required to get this.  It will then leave instructions for the nodes in a digital notary system in order for nodes to be able to grab instructions on what they have to do in order to meet smart contract completion.  

**STEP 4: Business IT Workload Stakeholders:**

is optional but when required stakeholder can be defined to give consensus and sign off on the successful execution of the “IT smart contract” delivering the appropriate digital service.  Stakeholders can be defined in a “multi signature” blockchain to provide sign off on regulatory, commercial and other business requirements. Approvals can include IT expert checks the quality of the code, a legal guy checks GDPR, a business person checks budget etc. 

**STEP 5: The capacity layer: 3 Nodes…**

*   thousands of 3 nodes can work together to execute and deliver the “IT Smart Contract” (if required)
*   verify if consensus was reached between the business stakeholders
*   verify the validity of the smart contract and download the “IT workload definition”
*   download the right files to execute the smart contract and each file gets verified (signature)
*   run the required processes and again signatures are checked to make sure the workload is pure.
*   ensures that no person (hacker or IT person) can ever gain access or influence on the execution process.



# Architecture

## Structure

![alt_text](threefold__structure.png  )

Kosmos is our scripting environment (see jumpscale) which allows you to deploy any workload in a very efficient, easy manner. The Kosmos shell is very easy to use and can be installed on any platform.

Kosmos and the Kosmos Actors will create a low-level “workload definition” which gets registered on the blockchain database. After verification by humans and or machines (multi-signature on the BCDB) the [Zero-OS](threefold__zos) will pick up the workload and do the local provisioning.
##  Provisioning Flow 


![alt_text](threefold__provisioning_flow.png  )

A [3Bot](threefold__3bot_def) has been educated by means of recipes and has an integrated digital wallet. These two resources are needed to be able to deploy any workload in the field.
# JumpScaleX Empowered

JumpscaleX is a cloud automation platform designed for scalability and fast development with a low memory footprint. It does that by providing very easy-to-use SALs (System Abstraction Layers) language which makes development cross-platform very efficient and unified, as well as easily adaptable to technology changes by exposing an abstract interface.

The main components of the jumpscale automation suite are:

<!-- tabs:start -->

### **SAL**
**SAL** System Abstraction Layer – it is a DSL (domain-specific language) for talking to a system. This allows the developer to use a user-friendly human-looking language when developing the life cycle management actors in Kosmos. This is the main bulk of jumpscale.


### **Clients**
**Clients** are user-friendly clients interfaces that help to connect to a multitude of systems (e.g. SSH, GitHub, FTP, Taiga, .. etc). 
*

### **Kosmos Actors**
**Kosmos Actors** Executing the intelligence required to get to full self-healing & self-driving.  Each actor is responsible for managing one or more services and it is the only location where configuration information resides. Think about them as virtual employees being responsible for a certain part of the universe which needs to be automated.
*   **Kosmos Shell: **Shell to interact with the actors.
*   **Config Manager:** A secure way to manage configuration instances. Anything saved to the file system is NaCl encrypted and only decrypted on the fly when accessed.
*   **Executors**: Jumpscale comes with its own executors that abstract working locally or remotely. Including: 
    *   SSH Executor (for remote execution)
    *   Local Executor (for local execution)
    *   Docker Executor (for executing on dockers)
    *   Z-Container Executor (happens over SSH & CoreX)

### **Startup Managers**
**Startup Managers**: Manage running processes in corex, tmux, etc.

### **tools**
**Tools** are there to automate your daily life as an expert IT person.

### **Schema & Data management**
 **Schema & Data management** layers the data strong typing, safety for your data models and all the tooling for data manipulation.

### **Configmanager**

The config manager in JSX provides an immediately-available security layer for configurations. It manages sensitive data, only decrypting during runtime when needed. It also has a recovery system built-in – built to facilitate creating, retrieving, deleting, importing, and exporting configurations.  \



### **Kosmos**

Kosmos is a new way to interface with all of JSX’s tools, SALs, clients, servers and builders. It gives full control over both the functionality and the instances created seamlessly, making building a deployment world and walking around all its components very simple. 


### **Builders**

A big part of deployments is managing built solutions or components, which JSX makes very simple. Using JSX builders, a developer can build, install, and sandbox their solution in no time. They can then create lists, which are lightweight metadata descriptions to be mounted in the filesystem.
<!-- tabs:end -->
# Use Cases

![alt_text](threefold__use_cases.png  )

## Cloud Workloads

Phase 1 is active today:

- Docker
- S3
- Web gateway = http(s) proxy to any group of containers at the back
- ZDB service = our own storage service on SSD and HD

+90% of all workloads which can run on Google cloud, Amazon, etc, can be made to run on the [ThreeFold Grid](threefold__threefold_grid).
# Example Packaging

![alt_text](threefold__example1.png  )

<table>
  <tr>
   <td>
    

![alt_text](threefold__example2.png  )

   </td>
   <td>
Min configuration for 2U = 10cm height
<p>

 32 core CPU (Intel /AMD)
<p>

256GB of RAM
<p>

1.9 GB of SSD
<p>

96TB of HDD
<p>

(Example on the left is for 4U)
   </td>
  </tr>
</table>



<table border="0">
  <tr>
   <td>
    
![alt_text](threefold__example3.png  )

   </td>
   <td>
    
![alt_text](threefold__example4.png  )

   </td>
  </tr>
</table>

 Threefold Tech is hardware vendor-agnostic as long as it meets the minimum requirements specified above (small box). However, Threefold has partnered with HPE to offer to our farmers certified hardware that runs our technology to generate highly secure certified capacity and is fully supported by HPE.
# Why is the ThreeFold Capacity Layer more Efficient?

![alt_text](threefold__efficient.png  )

!> Hardware improved 10,000 times <BR>
But, user features and performance improvement improved only 10 times ? <BR> .. Why?

*   Education: Too influenced by IT vendors, too many abstraction layers
*   Large IT companies: Acquisition strategy forces them to integrate = complex layers 
*   IT startups: Painkiller approach pays off
*   It is easier to build layers on top of other layers instead of rewriting


![alt_text](threefold__why_efficient.png  )

## layers

Current information systems are very complicated and the result of years of continuous growth and expansion to meet the ever-growing demand. Organic growth of IT systems results in adding layers of software integrating the old and the new. These added layers of software integrating old and new come at a price - they consume compute and storage capacity without adding additional end-user capabilities. It adds to the overhead of running an IT system creating a lot of context switches for the processors. 

## Context Switching

Context switching is the process of storing and restoring the execution state (context) of a process so that execution can be resumed from the same point at a later time. Each layer of abstraction involves multiple expensive user and kernel-mode context switches. Even a simple network interaction between two applications results easily in hundreds of context switches.

Inevitably this increases the inefficiency of IT architectures just like what happens with us, people,  are disturbed every 5 minutes by a request to do an additional task.

Eliminating layers and using other protocols and patterns to avoid context switches has a huge benefit. This is not the only trick we do – we also work on algorithm layer (e.g. for the storage, see [the autonomous whitepaper](threefold__autonomous_layer.md)).

# White Paper Takeaways

1. To deliver the required compute and storage capabilities for the exponential growth in digital services, Information Technology needs to be substantially overhauled so that it can exist everywhere – in datacenters, in homes, in cars, in lamp posts, in mobile masts, without having local or remote administration needs (autonomous).
2. Efficiency gains are mandatory to deliver the exponentially-growing needs. Hardware innovation does not follow Moore’s law anymore and we cannot rely on hardware to fuel the increased needs.
3. A new technology paradigm is needed separating utility (compute and storage) operations from complex application deployments. Compute and Storage need to become the “electricity” that fuels the information age.
