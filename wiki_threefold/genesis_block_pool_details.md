# genesis block details

## The Genesis Pools

<!-- [photos genesis pool](structure/images_threefold_genisispool_lochristi.html ':include :type=iframe width=100% height=550px frameBorder="0" scrolling="no" align="center"') -->

<!-- ![](lochristi_4 :size:400x) -->

Most of the servers are in Dubai and in Ghent Belgium.

To see the [genesis pool in Ghent see here](threefold__genesis_pool_ghent.md).
To see the [genesis pool in Dubai see here](threefold__genesis_pool_dubai.md).

All genesis pools were owned by the foundation, many of those servers are at this point no longer active.
The operations were done by [ThreeFold Dubai](threefold__threefold_dubai) and [BetterToken](threefold__bettertoken) as Farming Cooperative.


- Information about genesis pool/block see [here](threefold__genesis_block_pool_details.md).


## How much funding was used to make the threefold project possible?

> +- 40m USD

- +-18m USD for all farming (estimate, and done by independent companies & persons)
- 7m USD in ThreeFold Tech as convertible loan (by 30+ investors)
- 5m USD in early IT capacity sales (TFT) sales (by foundation = ThreeFold_Dubai)
- +10m USD funding before spin off from Incubaid (estimate)
  - ThreeFold Tech was established oct 2018, from out of Incubaid
  - related to people related to www.incubaid.com
  - over quite some years, multiple companies/projects

This is funding by means of fiat money, nothing to do with tokens.

## Genesis Pool

Genesis pool is the initial capacity with which the network started, was available when the project officially launched (blockchain launch March 2018)

- +-300 computer (all owned by ThreeFold_Dubai)
  - Belgium: 117+30 (hosted by BetterToken)
  - Dubai: 148 (hosted by TF FZC itself)
- total estimate resource/compute units
  - CRU: 4800,
  - HRU: 8100000
  - MRU: 18600
  - SRU: 106000

## Genesis Block

Genesis block is the first block registered in the blockchain, this consists of a nr of [TFT](threefold__threefold_token) in our case 695m [TFT](threefold__threefold_token).

> Maximum amount of tokens in the ThreeFold Blockchain at launch <br>= 100 Billion (in other words genesis pool < 1% at start of max nr TFT)

### Genesis Block Value

Hard to define the value of the genesis block when it was calculated, there was no established [TFT](threefold__threefold_token) token price.

- if [TFT](threefold__threefold_token) price = USD 0.01: +-7m USD (this token price has not been established but could be 2016-17)
- if [TFT](threefold__threefold_token) price = USD 0.05: +-35m USD

### Calculation

To come up with a reasonable number and show the community that there was hardware available for the genesis block, we made an excel calculation.

- servers as part of genesis pool calculation
  - +-300 computer (all owned by ThreeFold_Dubai)
    - Belgium: 117+30 (hosted by BetterToken)
    - Dubai: 148 (hosted by TF FZC itself)
  - hardware as used in many years before token launch (march 2018)
    - at least 100+ servers over quite some years
- total estimate resource/compute units
  - CRU: 4800,
  - HRU: 8100000
  - MRU: 18600
  - SRU: 106000
- Cloud Units
  - results in 3927 CU and 8225 SU
- The farming rules used were farming.minting rules v1 but with no difficulty level and [TFT](threefold__threefold_token) price 0.01
- Duration
  - we took +- 1.5 years in our calculation
  - averaged out, its for sure not exact science
  - but we can say that the amount of capacity listed has been available long enough for our engineers during the pre-launch period. Probably not with those exact listed servers but in general.
- result: **695m TFT**

_The purpose of this exercise is to demonstrate there is a reasoning behind the 695m [TFT](threefold__threefold_token) and computers which have been available. It's not intended as exact proof nor defense. We believe the value given was in line with the situation at that time._

## Beneficiaries of the genesis pools

[ThreeFold Dubai](threefold__threefold_dubai) = The Foundation was the only beneficiary of the Genesis pool.

The proceeds will be used for

- acquisition of team and technology (initial large investment)
- initial funding: sell [TFT](threefold__threefold_token) as future IT capacity
  - IT capacity delivered amongst others from the computers deployed by genesis pools (+300 servers)
- gifts to community, bounties for coders, evangelists, ...
  - max bounty given to contributors/founders = 2.5m [TFT](threefold__threefold_token)
  - funding for projects like coding, marketing, ...
- token distribution event (still to happen, see [TDE](threefold__tdeoverview.md))
- future funding

> ThreeFold wants to make sure that most of its available tokens are locked up and will stay locked up if not needed for a funding event like the current TDE.

> [ThreeFold Dubai](threefold__threefold_dubai) is run as a [non for profit organization](legal__definitions_legal.md) <BR>
> None of the potential profits generated go to the shareholders of the company. <BR>
> All (future) profits generated, tokens=IT capacity sold are used to promote and grow the ThreeFold Project.  <BR>
> Investments and loans given will of course be paid back to the relevant investors.

### genesis pool details

- block 0: [block 0 on explorer](https://explorer.threefoldtoken.com/hash.html?hash=a2ee0aa706c9de46ec57dbba1af8d352fbcc3cc5e9626fc56337fd5e9ca44c8d)
- genesis block code: [code of block 0](https://github.com/threefoldfoundation/tfchain/blob/master/pkg/config/config.go#L103)

## creation of TFT

### Genesis Pool

- see above

### Since Genesis Pool: Every farmed TFT is the result of farming IT capacity

In more detail:

> since genesis pool, every [TFT](threefold__threefold_token) minted/farmed is the result of [Zero-OS](threefold__zos) (our operating system) measuring the hardware resources available and registering that capacity in the TF Explorer. The minting software will then calculate the nr of [TFT](threefold__threefold_token) to be minted, which is validated by validation scripts.

See [our decentralization status doc for more info](threefold__decentralization_status.md)

### we didn't do an initial coin offering (ICO)

We did not issue (print) tokens and go out onto an exchange to offer these tokens to the market, this is referred to as an ICO.

Some ICO's were not very clean in how they created hyped and convinced people to invest. Because of our decision not to do an ICO we have not been able to raise much money, but we feel that this was more aligned with our values.

We have sold initial IT capacity in the form of [TFT](threefold__threefold_token) from [ThreeFold Dubai](threefold__threefold_dubai) and from [BetterToken](threefold__bettertoken) which was a reseller of these [TFT](threefold__threefold_token). Every buyer could at any point in time use these [TFT](threefold__threefold_token)'s to buy IT capacity.

## remarks

In Q2 2020 we went to TF Grid 2.0 and the mining rules (tf_farming) have been changed. As part of these farming rules the max nr of tokens became 4 billion which changes the optics of the original size of the genesis token pool.