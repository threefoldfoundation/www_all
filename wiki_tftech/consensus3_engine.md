# Consensus Engine


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


## metadata as needed for consensus engine

- [restricted accounts metadata](tftech__restricted_account_records.md)

## weights for multisignature

We define a logical set of weights to make sure that no party can transfer money unless all conditions are achieved.

### for vesting & locking

- a person account = weight of 5
- 9 signers have weight of 1
- signing weight in total needs to be 10

This means a person holding [TFT](threefold__threefold_token) can not transfer money out unless Consensus engine has signed as well.
This means consensus engine cannot send money out unless person agrees.

## for minting

- ThreeFold asks for the transaction = weight of 5
- 9 signers have weight of 1
- signing weight in total needs to be 10
- the signers are the Guardians of ThreeFold.

## relation with minting


### consensus engine in reltion to minting in TFGrid 3.0


[Consensus Engine](threefold__consensus_engine) checks the following:

- if uptime + 99.5% per month then
  - formula [CPR](threefold__cloud_production_rate) * [CPR](threefold__cloud_production_rate) REWARD / [TFT](threefold__threefold_token) price -> [TFT](threefold__threefold_token) mined
    - CRP reward is prob 60 USD per [CPR](threefold__cloud_production_rate)
- required metadata per account is registered on the parity based [ThreeFold Chain](threefold__tfchain).