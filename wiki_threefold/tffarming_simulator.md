# ThreeFold Farming Business Model

ThreeFold Farming, means buying servers and connecting it to the internet to farm (mine) internet capacity is a very good business. We have created a simulator to demonstrate this to a farmer and allow the farmer to change all possible parameters to see the outcome in relation to these parameters.

Please note, its impossible for us to make any prediciton in relation to the token price, but even if the token price would not go anywhere there is still return to be made based on the sound fundamentals of the business model of farming of IT capacity.

The calculator is on [this link](https://secure.threefold.me/sheet/#/2/sheet/view/Y6-o+TeVN73qI3WQ-gl7l0-BDoa4HjoXu4ITagVZWWs/).

> To play with the simulator, download the sheet and change the red parameters only.


## Farm Parameters

![](threefold__farming_simulator_1.png  ':size=700x')

A very well-chosen box (super good pricing) is 3000 eur and has 32CU & 23SU which is a lot of capacity for a small box. 

On 1U in a datacenter rack (about 4.5 cm height), 2 of those boxes fit, which means there can be upto 80 of these nodes in 1 rack. In this simulation we work with the scaleout box.

In this simulation we have put 60 nodes in 1 rack.


The chosen node consumes 250 watt and 0.5 of rackspace (see above).

The std sales price: 3.3k for this simulation.

we allocated 75% of the cost price to compute units.


![](threefold__farming_simulator_4.png  ':size=700x')

Each server can be categorized by using compute & storage units.

For more info see: [cloud units](threefold__cloud_units.md).

This box is very well optimized and has 32 CU and 23 SU per box.

The MRU/CRU/SRU/HRU are described in [resource units](threefold__resource_units.md) and describe the physical capabilities of a server, they allow us to calculate from physical resource availability to the compute & storage units (CU/SU).

After calculation we can see that this chosen node would have a cost prive of 2.7 per CU and 1.5 per SU which is super good.

In this simulation, the setup cost has license cost inside if the farming solution would be certified, all of this can be chosen on the parameter sheet.

Prices of competition can be checked on [cloud_pricing](threefold__cloud_pricing.md)

> Prices for CU are typicall between 20 and 120 USD. For SU from 20 to 160 USD per month. This shows how good the cost price is for a CU and SU as produced by our solution thanks to our unique technology.

## Simulation Parameters Used

![](threefold__farming_simulation_3.png  ':size=500x')

TF Foundation fee and staking fee is put on 10% for this simulation.

Power cost is very dependent per region, the 0.12 EUR is at the high side.

Maintenance cost is for replacing broken hardware, doing support, ... 10% is also at high side.

Rack cost of 300 EUR can also be optimized for sure, the real cost in datacenters today is mainly related to how much power is being used.

## TFTech License Fees

![](threefold__farming_simulation_tftech_licensefees.png  ':size=700x')

The license fee is only relevant for certified farming solutions, this fee is negotiable and depends of the size of the deployment and in the future will also depend on the technical capabilities.

Today each farming solution has the same capabilities, we don't make disctinction, they come all in (-:

The pricing is done per CU and SU so its easy to model cost and let the license work independent of the size of the chosen deployment.

There is a setup component which is only paid at deployment and a monthly fee.

For all first projects the monthly fee only needs to be paid once 30% of the solution is being used, this is a sort of ramp up period to allow a farmer to conserve their cash balance. In other words the montly only need to be paid for once there are enough customers on the solution.

## Token Parameters

![](threefold__farming_simulation_4.png  ':size=700x')

This is the hard one, no-one knows what the tokens will do.

This part of the simulator allows to model token price and how many tokens there will be created in line with the size of the grid. There can never be more than 4 billion tokens.

The token minting is a result of more farmers deploying their boxes (servers, nodes).

There is a cool [TFGrid simulator, see here](threefold__tfgrid_simulator.md)

This simulator allows you to simulate the behavior of the grid, see also further.

The liquidity parameter allows you to model when the tokens on the grid will be liquid.

Personally we believe that if the grid will be large a 1 USD token price should be realistic, but this is only an educated guess, for sure not a promise !!!

The amount of tokens minted for the farmer are in line with the amount of tokens being minted already, this is the result of a difficulty level. All of this is well described on the wiki.

## Farming Assumptions

![](threefold__farming_simulator_6.png  ':size=700x')

How fast will the boxes be used, e.g. 25% after year 1, which is rather conservative.

There are plenty of usecases being developed on the grid to drive utilization but this will take a time thats why we only slowly ramp this up.

the sales price can be chosen by you, 15 and 10 is recommended for certified farming only, we believe for DIY farming (Do It Yourself) it will be a lot lower e.g. only 50% of it.

We also modelled a price erosion in the model.

The network farming allows you to model at what price you will buy bandwidth, this pricing is dependent on size of your connection. For small farmers this is not really relevant, they will probably rely on capabilities of larger network farmers.

## Token Sales Assumptions

![](threefold__farming_simulation_7.png  ':size=700x')

The first argument here let you define how many of the tokens you will sell over your own portal and get FIAT in yourself. Many farmers will rely on exchanges to have the tokens liquid and the will just sell enough [TFT](threefold__threefold_token) to maintain the cash requirements.

The disaster scenario switch lets you simulate in case of disaster that the token would not go anywhere.

Here a simulator can also choose if its a certified farming solution or not (the last argument).

## The Result

![](threefold__img_farming_simulation_8.png  ':size=700x')

For this specific simulation the return on investment would be a crazy 13.9 times money in.

PLEASE NOTE THE DISCLAIMER (-:

The results havily depend on the future token price !!!


## What If Scenario's

![](threefold__farming_simulation_whatiff.png  ':size=700x')

These are parameters which let you change high leven parameters with big impact.

- home scenario (only use when small nr of nodes you want to put at home or small office)
- disaster scenario can be considered as worst case scenario
- certified: do you want do it yourself capacity or certified

### What if all goes bad

Because there is real hardware behind and cloud is a super big growing market there is always going to be demand for the services we deliver. In worst case everyone will just pay in fiat currencies and there will still be a return on investment but.

## Disclaimer

> The costs, prices, investment return projections and related data in this Farmer Simulation are simulated. This website contains simulated returns which do not represent actual performance of assets during a period.  These simulations are no guarantee of future results and actual performance may be higher or lower than the performance shown. Therefore the stated figures should not be relied upon. The investment return will fluctuate, or might be nil. ThreeFold disclaims any responsibility or liability for the disclosure of these returns to you.


> Important note: The ThreeFold Token (TFT) is not an investment instrument. <BR>
> [TFT](threefold__threefold_token)s are used to buy and sell IT capacity on the [ThreeFold Grid](threefold__threefold_grid).
