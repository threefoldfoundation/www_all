
# IT Systems Without People Involved Are the Future


## Introduction

## The "cost" of complexity in traditional IT

Classic IT infrastructure setup is complex and is not cost-effective. Applications need a certain environment to operate in and this environment is built by integrating different technology components from different vendors. Example components of such a setup are: operating systems, storage systems, networks, security systems, authentication systems, etc etc.  

Putting components together is called (system) integrating, and integration requires agreement on how these components will fit together as well as the knowledge to do it.

This complexity and need for integration originate from the way the IT industry historically developed. Layer over layer has been added. Additional layers masked existing problems, and instead of fixing the underlying issues, several third parties needed to be involved. This added complexity and increased costs (such as license costs, upgrades, updates, remote hands etc.) Complexity has become a business model.
## Where can we get inspiration to do it a different way?

What if we could build IT architectures in a different way.  What if we would not accept component solution approaches anymore and would start over with a complete blank sheet of paper?  Would we then come up with a different way of actually building automation, architectures and business models?

### Looking at nature for inspiration

Let’s start with looking for inspiration in nature. If we consider IT systems to be a complex system, are there any parallels that we can draw to systems that exist in nature and have evolved and improved over thousands of years compared to a few decades of improvement in the IT industry.

In nature, we see two kinds if systems (societies) being used: centralised and decentralized systems.  Examples of centralized systems are hurds/groups of animals living together where there is a hierarchy in the way they organize themselves and for decentralized systems, we can look at beehives and anthills.  The two different kinds of organising effort and benefit work, but in very different ways and to very different cost, efficiency and benefit structures.

### Centralised systems in nature

In centralised systems, there is governance of activities, wealth positions etc.  Think of a group of lions or chimpanzees.  There is always an alpha male, who is dominant to the whole group.  He is the only that enjoys all of the benefits because the whole group/structure works towards his wishes.  He gets to mate with most female group members because the system believes that he has the strongest genes to help the group to exist in the future, he gets most of the food that is found or killed the group and if he doesn’t get it he will claim it by showing his dominance and fight for it.  All the others are working towards this alpha male and all the other males in the group will occasionally challenge the alpha male for dominance.  This is very similar to how the IT industry has been operating to date:  there are a few alpha males in the industry - one for each sector that can be recognised (for example in cloud you have Amazon, Google, Microsoft and on the system integration front you have Dell, Siemens, CA Technologies).  They end up with the majority of business available in their specific market when challenged by new companies they fight them (in every way possible including killing them or acquiring them). And in analogy to the animal group, these alpha male companies have a lot of organisations that work with them usually called "partners" or “channels”.

### Decentralised systems in nature

For decentralised systems on a Wikipedia [page](https://en.wikipedia.org/wiki/Decentralised_system) we learn:: "One of the most well-known examples of a "natural" decentralized system is one used by certain insect colonies. In these insect colonies, control is distributed among the homogeneous biological agents who act upon local information and local interactions to collectively create complex, global behaviour. While individually exhibiting simple behaviours, these agents achieve global goals such as feeding the colony or raising the brood by using dynamical mechanisms like non-explicit communication and exploiting their closely coupled action and perception systems. Without any form of central control, these insect colonies achieve global goals by performing required tasks, responding to changing conditions in the colony environment in terms of task-activity, and subsequently adjusting the number of workers performing each task to ensure that all tasks are completed. For example, ant colonies guide their global behaviour (in terms of foraging, patrolling, brood care, and nest maintenance) using a pulsing, shifting web of spatio-temporal patterned interactions that rely on antennal contact rate and olfactory sensing. While these interactions consist of both interactions with the environment and each other, ants do not direct the behaviour of other ants and thus never have a "central controller" dictating what is to be done to achieve global goals."

So nature has provided us with solid examples of centralised and decentralised systems.  For much of what works in the modern world, we have ended up using the centralised model, governing of enterprises and countries.  Various type of industries have also adopted the centralised model where there exists a pyramid structure and everything works towards the alpha males.
## A different approach to creating and operating IT workloads

What if we can come up with a new concept for creating, deploying and operating IT workloads.  What if we say goodbye to the centralised way of controlling IT workloads.  Can we develop a concept that works in a decentralised way?

### The concept

To build this concept, we will draw use the human way of operating a large ship. The crew of a ship has different roles which we will call the *coordinators*. Some of these coordinators can be exampled as the captain, officers, engineers and oilers.  These coordinators have deep knowledge of their specific tasks but usually lack a detailed understanding of the other roles on the ship. In the "hive" of a ship, the specific requests to get tasks done are sent to coordinators who will receive, interpret, execute their own specific tasks and will report the (non-) progress of these tasks or subtasks.  As an example, the captain will create and agree to a schedule of maintenance tasks that need to be done in the engine room. These are daily, weekly and monthly tasks that should be completed by the engineers and oilers. The engineers and oilers do not get continuous input from the captain. They get one instruction to follow the schedule and know what needs to be done for each and every task. The intermediate state (by how much is a task complete and what still needs to be done) is stored by the coordinators executing the tasks. This is the most efficient way of accomplishing tasks.

### Jumping to the IT industry

If we bring this concept to the IT world we conclude that today’s IT systems are built in a significantly different way.  Most architectures (if not all) have a central facility that stores *all* information and *all* states of activity in a so-called central ‘database’. This is the general norm within IT. However these types of architectures are clearly inefficient and are very complex - such that as in the analogy of a ship -  a central command room (database) is created where every coordinator needs to report back* i) *the current level of activity and* ii*) completion (state) of each task and on top of that  every coordinator is required to have an understanding of the tasks to accomplish and those that are in process - hence leading to the outcome of unnecessary elements and complexity due to centralisation. 

In case of the ship example we deem this type of functioning/workflow to be inefficient however in the world of IT it is a common way.  To make matters worse, IT infrastructures usually have different databases to store "state" in for different parts of the IT architecture.  In our ship analogy would translate to different command rooms that orchestrate different functions on the ship. This, in turn, introduces the need for another role to start coordinating between the different command rooms to make sure that all information is shared and communicated. Taking this pattern forward leads to an endless loop of adding interfaces, layers, bridges between different parts of the system that all store information, multiple times and in different ways.  

### Datastores

By design, a decentralized IT  architecture should not use centralized data storage (databases) for multiple tasks (roles). It instead should feature a similar approach to the way of functioning as in the ‘ship’ example. In this architecture,  roles get short and precise instructions of the jobs to be completed and then autonomously execute on these instructions.  We call these execution engines *coordinators*.  Coordinators receive instructions, execute on instructions and store all information with regards to the current task *locally.*  They store all the relevant information in a local storage facility (available to the individual coordinators only) and provide information about the state of execution if and when other coordinators ask for a state update.
## Magical Coordinator

### Requirements to let actor based management work

* Less complexity

* State only with the actor itself (no-where else !!!)

* Understood language between actors 

* Process = recipes of a cook, NOT IN A DB

## Actor based IT solutions 

In order to simplify common IT architectures we should look at a   new way of creating such a system that does take the current standards into account:

* No people involved in integrating different components into a single solution

    * Which as a consequence means no revenue generation based on creating and managing complexity.

* No central state / operational data storage

* Individual automated actors with specific knowledge for specific tasks

* Independent operating actors completing specific tasks

Such a system should ideally be owned by many (not just a single organization, bring centralization back into the equations) which operate IT tasks for many.  We have not seen such a system in existence but we are as [ThreeFold Tech](threefold__threefold_tech) building and rolling out technology that is able to do this.

We believe that the future of IT is in decentralization where specific coordinators (bots) will roam a network of capacity looking for a task to do, making themselves available where needed, creating more of them if the system grows and allowing the global population to deploy and operate IT workloads.
