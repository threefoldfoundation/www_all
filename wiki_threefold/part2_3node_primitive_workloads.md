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

