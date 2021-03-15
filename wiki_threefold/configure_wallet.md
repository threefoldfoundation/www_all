# Configure the TFT wallet address of your farm

In order for users to reserve capacity from your farm and pay for it. The users needs to know the wallet address where to send the tokens for the reservation.

## Configure your farm wallet addresses from the 3SDK GUI

The easiest method to configure the wallet addresses of your farm is to do it from the `Farm management` page from the [3Bot Dashboard](threefold__3bot_farm_mgmt.md)

1. Click on the little gear in the `Actions` colum of the farm tables

![farm table](threefold__farm_table_configure.png  )

This will open up the configuration page of the farm

![](threefold__farm_configuration.png  )

Click the big green button `Add wallet address` at the bottom of the form. This will create a field to enter a wallet address.
A wallet address is composed of 2 things, the address itself and the asset code. The [asset code](https://github.com/threefoldfoundation/tft-[Stellar Blockchain](threefold__stellar_blockchain)/#tft) is used to identify the currency on the [Stellar Blockchain](threefold__stellar_blockchain) blockchain.

Fill in the wallet address with your address and the correct asset. You could add as many addresses as you want. But only one per supported asset you want to accept is required.

![](threefold__save_farm.png  )

Once you are done, click the save button at the bottom right.

That's it, your farm has now it's wallet address configured.