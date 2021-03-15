# quantum safe filesystem 2.6

## requirements

- redundancy/uptime
  - data can never be lost if older than 20 min (avg will be 7.5 min, because we use 15 min push)
  - if a datacenter or node goes down and we are in storage policy the storage stays available
- reliability
  - data cannot have hidden data corruption, when bitrot the FS will automatically recover
- self healing
  - when data policy is lower than required level then should re-silver (means make sure policy is intact again)

## NEW

- 100% redundancy

## architecture


## QSFS Architecture

```mermaid
graph TD
    subgraph TFGridLoc2
        ZDB5
        ZDB6
        ZDB7
        ZDB8
        ETCD3
    end
    subgraph TFGridLoc1
        ZDB1
        ZDB2
        ZDB3
        ZDB4
        ETCD1
        ETCD2
        KubernetesController --> ETCD1
        KubernetesController --> ETCD2
        KubernetesController --> ETCD3
    end


    subgraph eVDC
        PlanetaryFS --> ETCD1 & ETCD2 & ETCD3
        PlanetaryFS --> MetadataStor
        PlanetaryFS --> ReadWriteCache
        MetadataStor --> LocalZDB
        ReadWriteCache --> LocalZDB
        LocalZDB & PlanetaryFS --> ZeroStor
        ZeroStor --> ZDB1 & ZDB2 & ZDB3 & ZDB4 & ZDB5 & ZDB6 & ZDB7 & ZDB8
    end    
 

```
## QSFS Sequence Diagram

```mermaid
sequenceDiagram
  participant user as user
  participant fs as 0-fs
  participant lzdb as local 0-db
  participant zstor as 0-stor
  participant etcd as ETCD
  participant zdbs as backend 0-dbs
  participant mon as Montior

  alt Writing data
    user->>fs: write data to files
    fs->>lzdb: write data blocks
    opt Datafile is full
      lzdb->>zstor: encode and chunk data file
      zstor->>zdbs: write encoded datafile chunks to the different backends
      zstor->>etcd: write metadata about encoded file to metadata storage
    end
  else Reading data
    user->>fs: read data from file
    fs->>lzdb: read data blocks 
    opt Datafile is missing
      lzdb->>zstor: request retrieval of data file
      zstor->>etcd: load file encoding and storage metadata
      zstor->>zdbs: read encoded datafiel chunks from multiple backends and rebuilds original datafile
      zstor->>lzdb: replaces the missing datafile
    end
  end

  loop Monitor action
    mon->>lzdb: delete local data files which are full and have been encoded, AND have not been accessed for some time
    mon->>zdbs: monitors health of used namespaces
    opt Namespace is lost or corrupted
      mon->>zstor: checks storage configuration
      mon->>zdbs: rebuilds missing shard on new namespace from storage config
    end
  end
```