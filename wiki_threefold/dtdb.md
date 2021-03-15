# Digital Twin Database

- files in json or [dtml](threefold__dtml.md) on the [dtfs](threefold__dtfs.md) = digital twin filesystem
- continuous backup using [Quantum Safe Storage System](threefold__qsss.md), means data cannot be lost
- lives on top of [ZDBFS](threefold__zdbfs.md) = technical implementation of the filesystem
- has limited search/indexing support
- has stronly type checking
- its super easy for people to manually edit (in dtml format), can be done over [dtftp](threefold__dtftp.md) interface remotely, this will be the main interface for quite some beginning functionality.

## implementation details

- [dtserver](threefold__dtserver.md) exposes the data over an openapi rest interface
- indexing & search rather limited at this point
- strongly typed because of [Digital Twin Data Processor](threefold__dtdp.md)
