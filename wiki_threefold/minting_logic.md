# Farming Rewards v3

![](threefold__becomefarmer.png  )

[TFT](threefold__threefold_token) are rewarded when new capacity (storage & compute) is added to the [ThreeFold Grid](threefold__threefold_grid) in the form of hardware. 

This is done by [TFT Farming](threefold__become_a_farmer.md), ThreeFolds more sustainable equivalent of cryptocurrency miners. 

The amount of [TFT](threefold__threefold_token) which need to be farmed are calculated once a month by the opensource [blockchain based minting software](tftech__consensus3_mechanism.md).

## Minting Logic Variables

The amount of [TFT](threefold__threefold_token)s that are created by farmers depends on 3 variables:

### 1. Proof-of-Capacity

The server/Node specs of the Farmers hardware:

- Compute Capacity (CPU)
- Memory Capacity (RAM)
- Storage Capacity (SSD/HDD)

The performance/capability of this hardware is attributed with [Cloud Units](threefold__cloud_units.md) that then summarized to a [Cloud Production Rate (CPR)](threefold__cloud_production_rate.md) for the individual node. 

The higher the [CPR](threefold__cloud_production_rate), the more tokens are earned. Simply put, the more capable the hardware, the more [TFT](threefold__threefold_token)s are earned.

The Cloud Production Rate ([CPR](threefold__cloud_production_rate)) indicates how ‘productive’ a compute or server hardware platform is. The higher the [CPR](threefold__cloud_production_rate), the more capacity in form of compute and storage is added. 

This makes it simple for a non-tech farmer to select the best farming hardware for the budget available. It is similar to the hashrate of a Bitcoin miner for example.

To calculate the [CPR](threefold__cloud_production_rate) are very simple and straightforward formula is used:

`CPR = 1.5 * the amount of Compute Units (CU) of the hardware + the amount of Storage Units (SU) of the hardware`

### 2. The CPR reward

Today the [CPR](threefold__cloud_production_rate) reward is 80 USD per [CPR](threefold__cloud_production_rate) (over life span of 48 months).

This number can be changed over time and requires approval from the [Wisdom Council](threefold__wisdom_council).

### 3. The price of TFT in USD

To maximize the stability of farming returns, the amount of [TFT](threefold__threefold_token)s earned for farming is normalized against the US Dollar. This ensures that farming profits are stable in relation to currencies used to do the investment with (USD is possibly less speculative than TFT).

Min [TFT](threefold__threefold_token) price is USD 0.1 (its not possible to buy capacity for less than 0.1 per [TFT](threefold__threefold_token) for IT capacity).

## Minting Logic V3.0 (April 2021)

Each month the farmer receives the following amount of [TFT](threefold__threefold_token):

```TFT mined per month = CPR of node * CPR reward / 48 / TFT price in USD in that month ```

remarks:

- /48 : its calculated per month over 4 years
- CPR Reward for March 2021 is 80 USD, once rewarded this does not change
- the reward is registered in the TF_Chain blockchain per node and can be queried by every interested party.
- the TF_Chain Consensus_Engine will make sure that minting happens in the right way and all validator blockchain nodes agree.
- registration date of 3Node is registered in TF_Chain .
- farming rewards go for 48 months.

> for more info see the [farming simulator](threefold__tffarming_simulator.md)

## Undervalued TFT by design.

The TFT is undervalued by design.

Typically the amount of TFT rewarded is less than 1/6 of the commercial value of what a 3node can provide (see example below).

This leads to a shortage of TFT's in relation to economica capability of the TFGrid.


## Example For a Larger 3Node

Example Machine (node)

- 128 GB memory
- 24 virtual cpu cores
- 4000 GB of SSD storage
- 14000 GB of HD storage
- cost of machine: 3300 EUR

this results in

- CU: 32
- SU: 23

which results in

- nr of CPR for that node = 70
- the cost to produce this CPR = 3300/70 = 47 EUR per CPR (investment)

- CPR MINTING rate at this point is 80 USD

This means over 48 months, this machine will produce 60 USD worth of TFT per CPR which means = 70 CPR * 80 USD - 10% = 5040 USD which is more than the investment cost. 

> Do note that in reality the price is higher, because the TFT price should go up over time.

A Farmer gets return on his investment in 2 ways

- Farming tokens (minting): which is this 5040 USD + the value increase of tokens
- Cultivation of tokens (customers buying capacity from your node-10%)

Yet still the commercial capability of the 3node is

``` (32 * 12 + 23 * 10) * 60 = 36.840 USD```

As you can see the commercial capability is way higher than the value of the [TFT](threefold__threefold_token) created, in this example its 7 times higher.

As prices we took $12 for compute and $10 for storage (1TB) which is super low see [cloud pricing comparison](threefold__cloud_pricing_compare.md).


## Farming Process

- Farming is calculated once a month, on the first day of the next month.
  - executed by opensource [blockchain based minting software](tftech__consensus3_mechanism.md)
  - all the proof of capacities are stored on a redundant storage system and hashed (hashed means fingerprinted)
  - these hashes verify the authenticity of the report and are stored in the minting transaction on the blockchain
- 4 days later the [TFT](threefold__threefold_token) are being transferred to the farmer.
  - minting consensus needs to be achieved before minting can happen
  - in transaction message the hash will be stored which is link to the proof of the capacity for each minting operation

> DISCLAIMER: ThreeFold Foundation organizes this process, but is not controlling it. 

No claims can be made or damages asked for to any person or group related to ThreeFold Foundation like but not limited to the different councils or guardians.

## Maximum amount of TFT

There is a maximum amount of 4 billion [TFT](threefold__threefold_token) minted.

The [TFT](threefold__threefold_token) not rewarded to farmers yet are stored in farming_pool .