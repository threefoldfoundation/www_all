# Boot Your 3Node

## Using a USB Boot Disk

* [Creating a Zero-OS Bootable Image](threefold__boot_image_create.md)

## Start 3Node with Bootable Image

- Plug the USB stick into your node.
- Power on your node.
- Get into the BIOS and select the USB as boot option #1.

In this example we flashed the image to `Generic flash disk 8.07`. We select this option.
![Zero-OS during boot](threefold__bios_setting_zos.jpg  )

Close the BIOS with `Save & Exit`

When the reset happens you should see the following. When your [3Node](threefold__3node) is successfully connected to the internet it will start downloading the [Zero-OS](threefold__zos) image.

![Zero-OS before boot](threefold__zos_before_boot.jpg  )

When the [3Node](threefold__3node) has downloaded the [Zero-OS](threefold__zos) image it will start booting and you should see something like this:


## Boot 3Node

![Zero-OS during boot](threefold__zos_during_boot.png  )

After booting your [3Node](threefold__3node), you should see something similar to:

![Zero-OS console interface](threefold__zui.png  )

> Note: if you have an AMD gpu you will probably not see something like in the image above. Instead you will see something similar to the picture where the [3Node](threefold__3node) is booting but the text will be frozen. This is a known issue and does not affect your [3Node](threefold__3node)'s status. You can assume your [3Node](threefold__3node) is up and running when you see this.

If you go back to your farm management page, you should also see your nodes being part of your farm.

You can also find you nodes / farms on the explorer:

- Mainnet: https://explorer.grid.tf/
- Testnet: https://explorer.testnet.grid.tf/

If you don't see the console or if your nodes never appears in the farm management view, then most probably something is going wrong during the boot of the [3Node](threefold__3node). In that case please head to the [forum](https://forum.threefold.io/c/technical-discussion/zero-os/8) or the [0-OS dev channel](https://t.me/zero_os_tech) to seek some help.