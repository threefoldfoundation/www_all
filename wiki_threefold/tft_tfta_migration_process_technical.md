# Technical information how to migrate from TFTA to TFT

## FYI: Farmer Tokenomics Info

- [More Farmer Tokenomics Info](threefold__tokenomics.md)
- Also see the [simulator section](simulator_grid) in our 3SDK manual. This simulator allows you to play with the tokenomics changes yourself.
> **ERROR: link, cannot find page: simulator_grid.
IError(Error{
    msg: 'cannot find the file: simulator_grid'
    code: 0
}) **<BR>



## How do we migrate from TFT Rivine to TFT Stellar

While new users after May 2020 can be placed on the [Stellar Blockchain](threefold__stellar_blockchain) platform directly, existing ones need to have their funds migrated. [Rivine addresses can not be converted to [Stellar Blockchain](threefold__stellar_blockchain) addresses without knowing the private key](https://github.com/threefoldtech/rivine/blob/master/research/stellar/examples/accounts/readme.md#rivine-key-conversion). The other way is possible though but it does mean that a script to transfer all funds from [ThreeFold Chain](threefold__tfchain) to the [Stellar Blockchain](threefold__stellar_blockchain) platform is not possible.

A possible solution is to provide a service to migrate the funds on demand, initiated by the user's wallet and make sure the private key never leaves the user wallet.

Before the conversion, all addresses on [ThreeFold Chain](threefold__tfchain) will be locked by unauthorizing them. [A separate document explains why and the details](https://github.com/threefoldfoundation/tft-stellar/blob/master/specs/conversion/locked_conversion_transaction.md).

### Process

- At conversion time (week 1 or 2 in May), all the Rivine blockchain accounts get locked, this means no-one can transact on Rivine any longer.
- Only the user knows the private key so it's impossible for any script to transfer the money from Rivine to [Stellar Blockchain](threefold__stellar_blockchain).
- At time of the users convenience, the user logs into the ThreeFold Wallet (ThreeFold Connect) and the following process happens
  - The wallet creates an account on [Stellar Blockchain](threefold__stellar_blockchain) with the same private key (which is only visible by the user !!!)
  - The [Stellar Blockchain](threefold__stellar_blockchain) account creation can only happen by the wallet on the phone for security purposes and is 100% decentralized.
  - A [Locked Conversion Transaction](https://github.com/threefoldfoundation/tft-stellar/blob/master/specs/conversion/locked_conversion_transaction.md) is started to allow the funds to switch blockchain.
  - The TFTA is created on [Stellar Blockchain](threefold__[Stellar Blockchain](threefold__stellar_blockchain)_blockchain) and sent to the users [Stellar Blockchain](threefold__stellar_blockchain) account, the Rivine lock transaction hash is attached to this [Stellar Blockchain](threefold__stellar_blockchain) transaction to make sure there is 100% transparency while the switch happens.

### TFTA

From a valuation perspective [TFT](threefold__threefold_token)A is 100% the same as a [TFT](threefold__threefold_token), this is just a technical detail for migrating all [TFT](threefold__threefold_token)'s from one blockchain to the other and at the end of 2020 all [TFT](threefold__threefold_token)A will become [TFT](threefold__threefold_token). Using 2 currency names [TFT](threefold__threefold_token) & [TFT](threefold__threefold_token)A allows to provide some price protection during 2020 which is to the benefit of the full ThreeFold community. This means that during 2020 everyone who wants to know the full market cap of [TFT](threefold__threefold_token) needs to make the sum of [TFT](threefold__threefold_token)A and [TFT](threefold__threefold_token). Starting 2021, this no longer needed, then [TFT](threefold__threefold_token)A will stop to exist.

Source of this info see: [https://github.com/threefoldfoundation/tft-stellar/blob/master/specs/conversion/conversion.md](https://github.com/threefoldfoundation/tft-stellar/blob/master/specs/conversion/conversion.md)

> Important note: The ThreeFold Token (TFT) is not an investment instrument. <BR>
> [TFT](threefold__threefold_token)s are used to buy and sell IT capacity on the [ThreeFold Grid](threefold__threefold_grid).