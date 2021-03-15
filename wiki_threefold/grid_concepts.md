 # Grid Concepts

![](threefold__grid_header.png  )


## Cloud Units

![](threefold__cloudunits_abstract.png  )

Cloud units are a unified way to account for capacity on the [ThreeFold Grid](threefold__threefold_grid) = [Peer2Peer](threefold__peer2peer) Cloud.

Cloud units represent compute, storage and network equivalent to kW - kilowatt - unit of energy.

We use three categories of cloud units:

- Compute Unit (CU): The amount of data processing power, specified as the number of virtual CPU cores (logical [CPUs](https://en.wikipedia.org/wiki/Central_processing_unit)) and RAM ([Random Access Memory](https://en.wikipedia.org/wiki/Random-access_memory))
- Storage Unit (SU): The size of data storage capacity
- Network Unit (NU): The amount of data that travels in and out of the acquired storage units or data that travels to/from compute capacity expressed in GB.

It's a very easy way to express capacity.

- The TF Certified Farmers can define the price per CU,SU,NU.
- When a solution gets requested, it always gets converted to the required amount of CU,NU,SU required.

### Cloud Units (v4)

In this table you find all you need to know to how we calculate cloud units on the [ThreeFold Grid](threefold__threefold_grid).

_v4 is the one used in summer 2020 on [ThreeFold Grid](threefold__threefold_grid) 2.2+_

#### Compute

| CU (Compute Unit)                          |     |     |      |                    |
| ------------------------------------------ | --- | --- | ---- | ------------------ |
| GB Memory                                  | 4   | 8   | 2    |                    |
| nr vCPU                                    | 2   | 1   | 4    |                    |
| GB disk capacity (max for root filesystem) | 50  | 50  | 50   | new for v 2.3      |
| Passmark Minimum                           | 500 | 250 | 1000 | is performance cpu |

Passmark (CPU benchmark) is not measured in the grid, we only use resource units to calculate the SU & CU. Passmark is used in simulators to check the mechanisms and ensure we have enough performance per CU.

#### Storage

| SU (Storage Unit)   | HD   | SSD |
| ------------------- | ---- | --- |
| GB Storage Capacity | 1200 | 300 |

- HD is only usable for ZDB driven storage (e.g. our zero-stor can use this backend)
- why 1200: if someone deploys 16+4 as storage policy it results in 20% overhead, so the net usable storage would be 1TB, in other words the SU corresponds in that case with 1TB of netto usable storage
- starting Jan: 2021, pricing is not for reservation but for capacity actually used

#### Network

| NU (Network Unit = per GB) = NRU per month | GB (NRU) |
| ------------------------------------------ | -------- |
| GB transferred OUT or IN                   | 1        |

## Cloud Unit Typical Pricing

- Cloud Unit pricing is alwasy the unit in relation to a certain period (e.g. month)
  - CU/month : 10-30 USD
  - SU/month: 5-20 USD

> We use SU-month and CU-month to show SU monthly costs <BR>
> Can be compared to kilowatt (kW) and kilowatthour (kWh) to see electricity usage per hour, but we don't calculate per hour.

## Resource Units

Resource Units is how we measure capacity as produced by the hardware (compute & storage). Learn more about Resource Units [here](threefold__resource_units.md).

### Some Examples of CU and SU in Detail

#### Compute Unit (CU):

- 4 GB memory & 2 virtual CPU
- Recommended price on TF Grid = 10 USD
- Market price = between 40 USD and 180 USD

#### Storage Unit (SU):

- 1TB of usable storage as provided by the Zero-DB's (the backend storage systems)
- Recommended price on TF Grid for 1 SU = 10 USD
- Market price = between 20 USD and 200 USD

> Check how we with the market on the suggested sales prices [here](threefold__cloud_pricing.md).

# The Cloud Production Rate (CPR)

The Cloud Production Rate ([CPR](threefold__cloud_production_rate)) indicates how ‘productive’ a compute or server hardware platform is. The higher the [CPR](threefold__cloud_production_rate), the more capacity in form of compute and storage is added.
This makes it simple for a non-tech farmer to select the best farming hardware for the budget available. It is similar to the hashrate of a Bitcoin miner for example.

To calculate the [CPR](threefold__cloud_production_rate) are very simple and straightforward formula is used:

**CPR = 1.5 \* the amount of Compute Units (CU) of the hardware + the amount of Storage Units (SU) of the hardware**

How CU and SU are composed and calculated can be found [here](threefold__cloud_units.md)
