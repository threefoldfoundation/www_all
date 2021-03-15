
### Unbreakable Storage

- unlimited history
- survives network, datacenter or node breakdown
- no silent corruption possible
- quantum safe (data cannot be decrypted by quantum computers)
    
If you deploy a container with simple disk access, you don’t have it. 
Performance is around 50MB/second, if a bit more CPU is given for the distributed storage encoder, we achieve this performance. 
  
Self-healing components (like S3 API that exposes hash of each shard, which can trigger the repair) are ready to be combined, the automatic monitoring is something to be further elaborated. 

>todo: complete