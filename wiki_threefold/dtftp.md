# Digital Twin FTP server

- ftp server part of digital twin
- exposes [dtfs](threefold__dtfs.md)
- only accessible by the digital twin owner for now
- one of purposes is to allow people to edit their data files directly on the [dtdb](threefold__dtdb.md)

## implementation

- remote access as admin/$secret
  - secret is specified by [digtal twin owners](threefold__dtowner.md)
