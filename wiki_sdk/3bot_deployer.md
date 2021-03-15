# Get a Hosted 3Bot

[3Bot](threefold__3bot_def) is your virtual system administrator which helps you to deploy solutions on top of the [ThreeFold Grid](threefold__threefold_grid).

## How to Deploy your 3Bot

- For **Mainnet** Go to [3Bot Deployer Website](https://deploy3bot.grid.tf)

### Create a 3Bot

In the welcome step you are requested to either recover a previously created [3Bot](threefold__3bot_def) or to create a new one.

If you choose to create a new [3Bot](threefold__3bot_def), please go through following steps:

### Name Your 3Bot

This name will be used to identify this [3Bot](threefold__3bot_def). Keep in mind that this name will also be used as your [3Bot](threefold__3bot_def)'s subdomain (a part of your [3Bot](threefold__3bot_def)'s web address).

![](sdk__threebot_1_getname.png  )

### Choose the 3Bot Configuration

The [3Bot](threefold__3bot_def) comes in 3 sizes. Depending on the intensity you intend to use this hosted [3Bot](threefold__3bot_def), choose the flavour that best fits your needs. Example: people intending to develop within the [3Bot](threefold__3bot_def) might need more resources available. The flavor can still be changed after deployment.

![](sdk__threebot_1b_deployer_info.png  )

### Introduce a SSH key (optional)

If you intend to ssh into your [3Bot](threefold__3bot_def) container, the ssh key can be provided in the next step.
Evidently, please also keep this key securely on your local machine. If you loose it, you will loose the capability to ssh into the container.

![](sdk__threebot_1c_ssh_key.png  )

### Select the Back Up & Restore Password

Your [3Bot](threefold__3bot_def) has a backup and restore feature accessible on the dashboard. A password protects these capabilities, please store it safely or remember it well.

![](sdk__threebot_1a_recovery_secret_key.png  )

### Choose How You Wish to Select the Deployment Location

Either you choose to have the location of your [3Bot](threefold__3bot_def) be chosen automatically, on farm level or on node level.
We assume that this choice will become more relevant over time, with a growing grid. It will allow you to have your [3Bot](threefold__3bot_def) local, close to where you are residing, both for performance reasons (reduce latency) and for data ownership reasons (to keep your data close to you, e.g. in a jurisdiction that is yours).

![](sdk__threebot_1e_location_policy.png  )

### Choose the Deployment Location

If you opt for a specific farm, you have the option now to choose from available farms.

![](sdk__threebot_1d_deploy_location.png  )

### Choose e-mail Settings

E-mail settings are meant to send or receive notifications related to any messages for your [3Bot](threefold__3bot_def). Configuration of this e-mail can be configured in the next step.

![](sdk__threebot_1f_email_settings.png  )

### Setup and Initialisation

Once all info is know, the deployment of your [3Bot](threefold__3bot_def) can start.
Multiple steps happen now behind the scene:

- The infrastructure is prepared for a [3Bot](threefold__3bot_def) deployment.
- A pre-funding of this capacity is done
- The right hardware capacity is selected, according to your choice.
- The network is generated.
- Gateways are being prepared.
- The [3Bot](threefold__3bot_def) is deployed.
- The [3Bot](threefold__3bot_def) is initialized so you can start working with it as soon as you have done the payment.

This process can take a while.

![](sdk__threebot_6_3bot_setup.png  )
![](sdk__threebot_7_3bot_deploy.png  )
![](sdk__threebot_8_3bot_init.png  )

### Choose the 3Bot's Expiration Time

The expiration time determines your preference for how long you want to keep this [3Bot](threefold__3bot_def) live. This will also calculate the amount of internet capacity you need to purchase in order to keep the [3Bot](threefold__3bot_def) online. No worries, you can always extend your [3Bot](threefold__3bot_def)'s life span by extending your capacity reservation.

![](sdk__threebot_2_expiry.png  )

### Pay for Your Capacity by using a Stellar Wallet

You will be shown payment details as below. Send the required amount to the mentioned address on your screen by using a [Stellar Blockchain](threefold__stellar_blockchain) wallet. Please do not forget to mention the reservation ID on the memo text section when you're sending your payment. The memo text is used to identify a payment, therefore sending a payment without a memo-text could result in a failed transaction.

##### Remark:

- If you are working on the mainnet of the TF Grid, production [TFT](threefold__threefold_token) is to be used for payment on the [Stellar Blockchain](threefold__stellar_blockchain) Mainnet (as is visible in your ThreeFold Connect wallet). This can be simply done by scanning the QR code in the Threefold connect app.
- The testnet of the TF Grid is connected to the [Stellar Blockchain](threefold__stellar_blockchain) Testnet, so Testnet [TFT](threefold__threefold_token)s are to be used (you cannot use your ThreeFold Connect wallet).

![](sdk__threebot_4_payment.png  )

### Wait Until Your Payment Has Succeeded

Payment can take some time. The screen gives an overview of the amount, currency, destination wallet and reservation ID. Once processing the payment is detected, it goes to the next step.
![](sdk__threebot_5_pay_process.png  )

### Set up Wireguard (optional)

If you want to access the [3Bot](threefold__3bot_def) container, you need to set up a wireguard connection on your local computer, and copy-paste or download the parameters to do so.

![](sdk__threebot_y_container_access.png  )

### Congratulations, Your Hosted 3Bot is Now Live!

Congratulations, Your [3Bot](threefold__3bot_def) has been successfully deployed.

You can access your [3Bot](threefold__3bot_def) by entering the website address (IP Address) mentioned below onto your web browser.
![](sdk__threebot_z_success.png  )

Go to the web address mentioned and log into your [3Bot](threefold__3bot_def) by using the ThreeFold Connect App on your mobile phone; connecting your [3Bot](threefold__3bot_def) ID with your hosted [3Bot](threefold__3bot_def).

![](sdk__threebot_zz_url.png  )

### Access Your Dashboard

After agreement on the Terms and Conditions and an explanation on prerequisites, you will be redirected to your main [3Bot](threefold__3bot_def) Dashboard where your first initial backup is automatically made.
![](sdk__threebot_admin_dashboard.png  )

### Explore the 3Bot Admin Panel's Features

You could now access all the features of your [3Bot](threefold__3bot_def), such as the Code Server, Python Notebooks, Farm Management, and many more. Feel free to click on [[3Bot](threefold__3bot_def) Dashboard](sdk__3bot_admin.md) section to learn more about your hosted [3Bot](threefold__3bot_def) features.