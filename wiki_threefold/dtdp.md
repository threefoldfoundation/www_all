# Digital Twin Data Processor

Processes [dtml](threefold__dtml.md) and /or json files

- format
- index
- clean
- check validity & links to other files (links)
- expose of the database (the data files) over redis interface (optional)

## implementation

- vlang based daemon/cmdline
- redis interface
- scans filesystem finds json and [dtml](threefold__dtml.md) based data files.
- checks the types (is strongly typed system), reports on errors if needed
- reformats the [dtml](threefold__dtml.md) ones and stores in indexed way on the the [DTFS](threefold__dtfs.md).
- writes simple index files (to allow [DTServer](threefold__dtserver.md) to query for info)
- the redis server exposes simple interface to set/get the objects
- objects are not kept in memory
