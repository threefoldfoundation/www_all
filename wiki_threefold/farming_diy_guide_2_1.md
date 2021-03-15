# Farm Setup and Management Version 2.1

# Guide: How to Start Farming by Setting Up a Farm & Node Yourself

Note: This is for people who are more technical.

## Step 1: Get Yourself ThreeFold Connect

As a first step, you need to get yourself a ThreeFold Connect identity.
This can be done by downloading the app on your smartphone and creating yourself an identity. Please be aware that this is to be your digital identity on the grid, and holds the keys to access it. The app provides you with access to ThreeFold social media platforms, has a wallet for managing TFT’s and provides support access.

The app can be found on the [Google Play store](https://play.google.com/store/apps/details?id=org.jimber.threebotlogin&hl=en) and [Apple Appstore](https://apps.apple.com/us/app/3bot-connect/id1459845885).

## Step 2: Create a Network on the ThreeFold Marketplace

> Note: Before you start to deploy a network you must install [Wireguard](https://www.wireguard.com/install/).

Got to https://marketplace.grid.tf and sign in via ThreeFold Connect.

Click on 'Network' on the Marketplace sidebar and then on 'NEW'

Follow the instructions in the chatflow.

Download the network config file and import and activate it in Wireguard.

Finish the chatflow and viola you have created your own network on the [ThreeFold Grid](threefold__threefold_grid).

> Note: If you choose to use freeTFT make sure to [apply for freeTFT] so you are able to reserve capacity. There is a maximum of 1000 freeTFT per [3Bot](threefold__3bot_def).

## Step 3: Launch your own ThreeBot on the ThreeFold Marketplace

Click on 'ThreeBot' on the Marketplace sidebar and then on **'NEW'**.

Follow the instructions in the chatflow.

Make sure to add your public ssh key.

> Note: If you are on Mac enter Cmd + Shift + . (dot) to find the hidden public ssh key in the Finder.

## Step 4: Create your Farm in your own ThreeBot

Click on 'Farm Management' on the ThreeBot sidebar
Then click on '+" to create a farm

<img src="./img/create_farm1.png" alt="create_farm1"
  title="create_farm1" width="297" height="494" />

Fill in your credentials. 'Organization ID' is not needed. Make sure to add for all three asset types a wallet address.

Note: the wallet address can always be the same.

Once all is filled in click **'SAVE'**

<img src="./img/create_farm2.png" alt="create_farm2"
  title="create_farm2" width="440" height="494" />

Now your farm including your Farm 'Id' has been created.

<img src="./img/create_farm3.png" alt="create_farm3"
  title="create_farm3" width="1440" height="247" />

## Step 5: Create a Bootable Image for your Node(s)

The bootstrap service: https://bootstrap.grid.tf is there for you to generate your 0-OS images. In the bootstrap wizard, enter your farm ID, choose 'Production' and download the generated image.

<img src="./img/boot1.png"
  width="425" height="494" />

<img src="./img/boot2.png"
  width="425" height="494" />

If you want to boot your node via USB use a program like [Balena Etcher](https://www.balena.io/etcher/) to burn the image to the USB stick.

## Step 6: Boot your Node

Now put your USB stick in your node (there are also other ways to load the bootable image), connect your node to power and plug in your LAN cable. Switch on your node and after a few minutes you should see the [3Node](threefold__3node) up and running on the [TF Grid Explorer](https://explorer.grid.tf)

### **Congrats on being a farmer on the ThreeFold_Grid.**

### **Thank you very much for supporting our movement!**