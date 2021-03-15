# TFGrid DB Architecture

- Run 9 blockchain nodes which have permission to create blocks.
- Every node actually deploys a full stack, consisting of:
  - The blockchain nodes itself
  - A graphql indexer (postgress + indexer + graphql server)
  - A digital twin proxy (+ message bus)
  - A [Stellar Blockchain](threefold__stellar_blockchain) agent
  - ...

When consensus is needed, all nodes vote on the blockchain. The action is then
processes as soon as 5/9 nodes have agreed.

> more info see [consensus_mechanism_30](consensus_mechanism_30)
> **ERROR: link, cannot find page: consensus_mechanism_30.
IError(Error{
    msg: 'cannot find the file: consensus_mechanism_30'
    code: 0
}) **<BR>

