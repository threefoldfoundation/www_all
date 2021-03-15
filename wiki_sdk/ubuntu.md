# Ubuntu
A free and open-source Linux distribution based on Debian.
Ubuntu is officially released in three editions: Desktop, Server, and Core(for internet of things devices and robots). This package is used to deploy a Ubuntu container from an official Flist on the grid using a chatflow.

### You need to create a pool and a network first before deploying your ubuntu container

# Steps to deploy solution

### Add the solution name. Keep in mind it will also be the subdomain.
![](sdk__ubuntu_1.png  )

### Choose your ubuntu version
![](sdk__ubuntu_2.png  )

### Choose container resources
Here we specify the CPU and Memory resources allocated for the container
![](sdk__ubuntu_3.png  )

### Select a pool for your solution
![](sdk__ubuntu_4.png  )

### Choose a network
![](sdk__ubuntu_5.png  )

### Choose whether you want to push the container logs onto an external redis channel or not
![](sdk__ubuntu_6.png  )

### Access keys
Uploading your public key for SSH access
![](sdk__ubuntu_7.png  )

### Ask for automatically select node
Here we could provide a node id corresponding to a current node on the grid to deploy the container on. If there is no specific node to be used then it is choose `Yes`.
![](sdk__ubuntu_8.png  )

### Choosing private IP
![](sdk__ubuntu_10.png  )

### Choose whether you want to assign a global Ipv6 address for your container or not
![](sdk__ubuntu_11.png  )

### Deploying your solution
![](sdk__ubuntu_12.png  )

### Deployment successful, you could ssh into your container now using ip address.
![](sdk__ubuntu_13.png  )

## Access solution info from the ubuntu page
![Step9](sdk__ubuntu_14.png  )