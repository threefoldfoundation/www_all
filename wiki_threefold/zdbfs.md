# ZeroDB FS

- filesystem which is redundant and stored over multiple locations
- this filesystem is used to store following info
  - data files (json or dtml) = data of your digital life
  - files of the [filemanager](threefold__dtfilemanager.md)
  - backend for the [dthyperdrive](threefold__dthyperdrive.md)
- ZeroDB FS can be synced with the [DTHyperDrive](threefold__dthyperdrive.md)

## implementation

- fuse based
- data & metadata stored in ZDB
- the datafiles of ZDB are stored on [ThreeFold Grid](threefold__threefold_grid) in backend ZDB's using our [QuantumSafe Storage Codec](threefold__qs_codec.md), which means this data can never be lost.

