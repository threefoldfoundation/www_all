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