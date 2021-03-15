## Resource Units

We use resource units to measure capacity on the hardware level and then convert it to capacity to produce cloud units: CU & SU


| unit type | description | code |
| --- | --- | --- |
| core unit     | 1 logical core (hyperthreaded core) | CRU |
| mem unit      | 1 GB mem	| MRU |
| hd unit       | 1 GB | HRU |
| ssd unit      | 1 GB	 | SRU |
| network unit  | 1 GB of bandwidth transmitted in/out	| NRU |

These are raw capacities as measured by our ThreeFold Software on [Zero-OS](threefold__zos).



# Calculation from resource units to CU/SU for farming purposes


Transformation between resource units (CRU, MRU, HRU, SRU) and cloud units (CU, SU); basically how does the software translate measured capacity in the node to SU & CU for farming purposes.

### Compute

1 CU is 2 virtual CPU with max oversubscription on CPU core of 4 and min required memory is 4GB. Oversubscription of 4 is still gentle we know that many other providers use more.

```python
cu = min((mru - 1) / 4, cru * 4 / 2)	 
```

We subtract 1 GB of memory for the operating system to function.


### Storage

for farming 1 SU is 

- 1.2 TB of HD capacity (which can deliver 1 TB of netto usable storage) 
- 300 GB of SSD capacity with a buffer of 20%

```python
su = hru / 1200 + sru / 300 * 0.8
```

