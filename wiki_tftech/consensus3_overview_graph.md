
```mermaid
graph TB
    subgraph Stellar
        stellar_blockchain --> account1
        stellar_blockchain --> account2
        stellar_blockchain --> account3
        click stellar_blockchain "/threefold/#stellar_blockchain"
    end
    subgraph TFGridBCNode1
        Explorer1-->BCNode1
        ConsensusEngine1-->BCNode1
        ConsensusEngine1 --> stellar_blockchain
        ConsensusEngine1 --> ReputationEngine1
        ReputationEngine1 --> Monitor_Engine1
        click ReputationEngine1 "/threefold/#reputationengine"
        click ConsensusEngine1 "/threefold/#consensusengine"
        click BCNode1 "/threefold/#bcnode"
        click Explorer1 "/threefold/#tfexplorer"
    end
    subgraph TFGridBCNode2
        Explorer2-->BCNode2
        ConsensusEngine2-->BCNode2
        ConsensusEngine2 --> stellar_blockchain
        ConsensusEngine2 --> ReputationEngine2
        ReputationEngine2 --> Monitor_Engine2
        click ReputationEngine2 "/threefold/#reputationengine"
        click ConsensusEngine2 "/threefold/#consensusengine"
        click BCNoBCNode2de1 "/threefold/#bcnode"
        click Explorer2 "/threefold/#tfexplorer"

    end
    Monitor_Engine1 --> 3Node1
    Monitor_Engine1 --> 3Node2
    Monitor_Engine1 --> 3Node3
    Monitor_Engine2 --> 3Node1
    Monitor_Engine2 --> 3Node2
    Monitor_Engine2 --> 3Node3
    click 3Node1 "/threefold/#3node"
    click 3Node2 "/threefold/#3node"
    click 3Node3 "/threefold/#3node"
    click Monitor_Engine1 "/threefold/#monitorengine"
    click Monitor_Engine2 "/threefold/#monitorengine"


```
