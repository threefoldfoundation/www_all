### Zero OS install

The [Zero-OS](threefold__zos) is delivered to the [3Node](threefold__3node)s over the internet network (network boot) and does not need to be installed.

# Zero-OS Install Mechanism

## Stateless Install

1. Acquire a computer (server).
2. Configure a farm on the [ThreeFold Grid](threefold__threefold_grid) explorer.
3. Download the bootloader and put on a USB stick or configure a network boot device.
4. Power on the computer and connect to the internet.
5. Boot! The computer will automatically download the components of the operating system (Zero-OS).

The actual bootloader is very small. It brings up the network interface of your computer and queries [ThreeFold Grid](threefold__threefold_grid) for the remainder of the boot files needed.

The operating system is not installed on any local storage medium (hard disk, ssd). [Zero-OS](threefold__zos) is stateless.

The mechanism to allow this to work in a safe and efficient manner is a ThreeFold innovation called our container virtual filesystem. This is explained in more detail [here](sdk__flist.md)
