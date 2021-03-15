
### Future IT Workloads Demand Decentralization

The current digital world is built around centralized infrastructure and datastores. We have been educated to store value in central places as that allows for "perimeter" security similar to how we secured money in large bank vaults.  However, the world has changed and storing everything in central locations is no longer viable, as it causes massive data replication.

We need to move to a model where the data stays close to where it is created and is not moved to central storage locations that enable remote access. The traditional model has allowed us to innovate and control costs over the last two decades but will not fuel/allow for innovation in the next decade.

For innovation to excel going forward, we need to decentralize the compute and storage model to allow an exponential increase in data generation to happen, while retaining the reliability of data, and making sure that the security model around all of this data is good enough to keep out the bad people.  

Also, with the exponential growth of data creation, we need to be much more aware of the effectiveness and sustainability of the compute and storage model. 

These points are illustrated in the infographic below.

![image alt text](threefold__need_autonomous.png  ) **Current Information Technology is very Centralized**![image alt text](threefold__very_centralized.png  )

![image alt text](threefold__ok_half_not.png  )

The current centralized infrastructure cannot deliver on the required items to support the exponential growth of compute and storage requirements.

For reliability of such infrastructure, the current model of deploying infrastructure and applications is too complex. Many people are required to build simple setups and it is very easy to make mistakes leading to a lower-than-required reliable setup. Same thing for security – it is mind-bogglingly complex to manage a four football field sized datacenter and all its technology

![image alt text](threefold__security_scale_cost.png  )

#### Is Blockchain up to the Challenge ?

Blockchain is a great technology for certain usecases like digital money or smart contracts but not efficient to build a new internet with.

![image alt text](threefold__blockchain_challenge.png  )

A newcomer in the IT space has been the rise of blockchain technology. Blockchain technology is seen as technology that can improve on the delivery of decentralized compute and storage capacity – but can it? Looking at the same aspect of what needs to improve for this exponential growth in data creation and storage, it certainly delivers on certain aspects, but does not cover all of the requirements. Two to mention are that most blockchain technologies: 1. are far from sustainable and 2. certainly not usable by all of us they require a certain amount of "nerdiness" to be able to drive and interact with them.

![image alt text](threefold__blockchain_dilemma.png  )

## Our 6 Point Smart IT Program

Our aim is to make your IT platform a "profit" center rather than a “cost” center. For this we believe a decentralized IT solution is the best way. IT technology providers have created technologies that are hard to install, manage, operate, and upgrade, which creates a necessity for experts to be trained, involved in, and constantly administering and supporting your IT infrastructure. Unless this dynamic is addressed, IT will always remain a cost center to your business. 

We intend to shift this dynamic and change the status quo through our **Autonomous IT** approach, an approach where your applications and digital workloads are able to install, maintain, and operate themselves, independently. 

The following 6 point program intends to improve your IT environment.

### Be more cost-effective (at least 2x better)

Our **Autonomous IT****_ _**system delivers IT that is self-driving and self-healing. This system requires a lot less hardware and has no dependency on any third-party software vendors. This system can reduce your annual expenditure on IT by at least 2X.

### Be more sustainable (at least 3x better)

Our **Autonomous IT **system delivers IT that is far more sustainable. We offer improved sustainability by:

* Using upto 3x less hardware for the same output. 

* Using hardware at least 2x longer while maintaining good performance..

* Having capacity everywhere, local to where the users are: this reduces network requirements and can even improve security;

* Using new algorithms (e.g. for blockchain and storage) which have dramatic efficiency improvement;

* Re-using hardware where possible – let's not throw away.

For storage we are 10x more "green." For blockchain workloads we can be up to 50x more sustainable.

### Be more secure (at least 10x better)

Hacking has become a part of life and is almost impossible to avoid in the current IT systems. The current IT systems are too complex and require too many people to operate. This results in less security which results in lots of security breaches. 

Most governments do not even know how often they have been hacked and it is a fact that a lot of backdoors are in their systems already today, simply waiting to be used by hacking groups. The only way to really address this security challenge is by making an IT system that is truly autonomous and with considerably fewer lines of code and significantly fewer components. The fewer components there are and the fewer people required to keep a system up and running, the safer it will be.

### Be in control 

Every large organization today is very dependant on many IT providers for the IT systems they require. These systems are often very expensive and complex to operate, and expensive maintenance programs are often required. Many of these systems have been designed to lock in their customers as much as possible and in no way encompass open standards. 

What if there were an IT system where:

* Every software component were understood and 100% owned by local teams (up to code level), and could be maintained & improved by local teams?

* Source code were available for these local teams? Where there was nothing closed source and no modules were used which were not fully understood and audited?

* These local teams would build out advanced IT expert knowledge for the country and many positive spin-offs could have a good impact on economic growth?

* The user were in total control – every user owned his or her own data – this, without losing the requirement for a government to make sure that no malintent were at stake and data could be audited?

### Be the future

We want this system to be 100% future-proof. It is not our intention to copy what is already available in the IT industry today. The goal is to leapfrog the industry with a system that is able to support the applications and workloads of the future.

No more complex upgrades or re-installs. The system is dynamic and constantly adapts in line with future requirements.

### Be complete, avoid complex integration efforts

A government does not want to have to deal with 100+ systems and large teams of consultants required to integrate these systems. There is frankly no reason why current systems are so extremely complex. Our decentralized [3Bot](threefold__3bot_def) system does not need integration – it is integrated by design, no other glueing systems are needed.

## Technical Components

![image alt text](threefold__components.png  )

<!-- tabs:start -->

### **Zero-OS**

[Zero-OS](threefold__zos) is a minimal operating system serving one single purpose: to make the hardware available to the autonomous layer. [Zero-OS](threefold__zos) is a stateless operating system and is not installed on a storage device in the server. At boot time, the needed binaries and config files are made available over a secure network connection. The zero-footprint locally on the server simplifies administration work needed for these servers, enabling these servers to live anywhere.

In [Zero-OS](threefold__zos), the number of active components and therefore the complexity of the operating system has been brought down to the absolute minimum, making maximum execution capacity available to real-world use cases and applications.

Read more about the [Zero-OS](threefold__zos) in [our capacity white paper](threefold__capacity_layer.md)

### 3Bot = Your Virtual System Administrator

Read more about the [3Bot](threefold__3bot_def) in [our autonomous white paper](threefold__autonomous_layer.md).

### Jumpscale

**Jumpscale-ng**: The automation platform which makes the [3Bot](threefold__3bot_def) possible

Jumpscale is an automation framework written in Python . It has been developed for more than a decade and originates from an automation product which was acquired by SUN Microsystems from Q-Layer, which was one of our previous companies. Our newest release is version 10, called JSX.
Jumpscale is the foundation for the autonomous layer. To get to autonomous operations, IT experts have to model IT architectures. These models have to describe all the components involved in creating the architecture (e.g. a container running a webserver, a container running a database server, and then all the required network paths between these two containers and the rest of the world). Once this description is complete and tested, it can be given to the autonomous layer which launches, monitors, and operates the architecture. Hence, autonomous IT.

### BCDB

**BCDB** = A Beyond Blockchain Database
This is a database (scalable, secure, etc.) incorporating all the features of modern blockchain technology.

The blockchain database (BCDB) is a super-efficient database that uses blockchain technology to securely store and retrieve data. Blockchain principles like "always append" and “store data in an immutable manner” are key aspects of this database technology.

The blockchain database is used in the autonomous layer for storing information of users, farmers, the digital representatives (3Bots), IT Architecture descriptions, and the state information of these running applications. This database technology provides distributed storage of key information of the autonomous layer.

For a 100 node deployment, our BCDB will be **50x more efficient **compared to other blockchain technologies for storing data from a storage and network perspective.

The BCDB is used in the [3Bot](threefold__3bot_def) which means every user has his or her own Blockchain DataBase. A BCDB can also be used as a shared ledger between multiple people.

This technology component alone is significant enough to grow a big startup business on its own. Read more about the BCDB in [our autonomous white paper](threefold__autonomous_layer.md).

### Zero-Store

The Zero-Store technology contains all the logic to store data in a reliable and effective manner over multiple devices in multiple geo-locations. Embedded in the software are basic storage primitives to process data before sending it to distributed devices, which are aimed at increasing the performance of searching, finding data, and securing data.

- **Chunking:** makes large datasets indexed and cut into smaller organized data chunks, improving access and search speed.
- **Compression:** makes data storage use less physical storage by passing it through an algorithm that compresses the data volume.
- **Encryption:** creates unreadable data for the people or processes that do not have the (proper) key to decipher the information.
- **Disperse:** storage in such a way that data becomes 100% secure and cannot be retrieved from one site alone. It also allows you to retrieve your data when some of the storage nodes are offline.

All of these primitives are configurable and you can decide how data will be processed (optimized) before being sent to the distributed storage devices → the zero-databases. This makes dispersed storage a very reliable and performant storage solution without compromising effective use of physical storage capacity.

Read more about our storage system in [our autonomous white paper](threefold__autonomous_layer.md).

### Zero-DB

A optimized storage technology which uses physical storage media like SSD or HDD. The technology has dedicated management processes per physical storage device, ensuring optimized usage parameters to maximize performance.

Zero-DB technology is characterized by the following aspects:

- Backend Storage Engine
- Can do +50.000 transactions per/sec
- Can work on SSD & HD
- Optimized for easy (soft/green) operation on HD
- Works with reservations
- Always append store
- Can keep unlimited history
- Master/Slave replication

### CORE-0 and CORE-X

**Core-0**

We call Core-0 the combination of all the low level components of [Zero-OS](threefold__zos). Each component is responsible for a part of the logic handled by [Zero-OS](threefold__zos) when exposing the hardware capacity (storage, compute, and network) to the higher layers.

**Core-X**

Is the process manager for an individual container. Because of the secure nature of the [3Node](threefold__3node)s, a direct connection from a user to a node is not possible, but Core-X allow users to connect to their own containers and manage the processes inside. It has a web interface as well as a REST interface. So, the containers can be managed both manually and programatically.

<!-- tabs:end -->

### Stellar

**[Stellar Blockchain](threefold__stellar_blockchain)** ThreeFold Uses the [Stellar Blockchain](threefold__stellar_blockchain) Blockchain for issuance of the [TFT](threefold__threefold_token)(TFT).
Stellar's values match very well with ThreeFold's values, and their technology is proven and had a huge community backing it.

## Integrated Technology

The 3-layer technology stack provides a very flexible, efficient, and powerful setup to create and run many different IT workloads. The components are available to be used in specific setups, creating a large number of actual use cases.

The capacity, autonomous, and distributed application layers are created by combining and integrating all of these technology components.

![image alt text](threefold__3node_3bot.png  )