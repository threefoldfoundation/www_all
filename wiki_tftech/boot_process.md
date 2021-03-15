## Boot Process

>TODO: 

In this image from fs, a small partition is mounted in memory to start booting the machine, it gets IPXE (downloads what it needs), and then 0-OS boots. 
After that, going to the hub, downloading different lists. 

There is 1 main flist that triggers downloads of multiple flists (see hub, and then https://hub.grid.tf/tf-zos/zos:development:latest.flist.md ). 
In there all the components/daemons that do part of the 0-OS. 
Also the download of the zos-bins, i.e. external binaries are triggered this way (https://hub.grid.tf/tf-zos-bins). 

The core components of [Zero-OS](threefold__zos) can be found in: [Zero-OS repo](https://github.com/threefoldtech/zos/tree/master/bins/packages) =  If something changes in the directory, a workflow is triggered to rebuild the full flist and push it to the hub. 
    
When a node discovers there is a new version of one of these lists on the hub, it downloads it, restarts the daemon with the new version. 
Over the lifetime of the node, it keeps pulling on the hub directories to check whether new daemons/flists/binaries are available and whether things need get upgraded.