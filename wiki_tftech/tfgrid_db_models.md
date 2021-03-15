```golang

// - vesting
//   - startdate: epoch
//   - currency: USD
//   - [[$month_nr,$minprice_unlock,$TFT_to_vest],...]
//     - if 48 months then list will have 48 parts
//     - month 0 = first month
//     - e.g. [[0,0.11,10000],[1,0.12,10000],[2,0.13,10000],[3,0.14,10000]...]
// - lockup
//   - startdate: epoch
//   - unlockmonth: $month_nr
// - minting per node
//   - CPR reward in specified currency (e.g. 60)
//   - currency = USD at start (default:USD)
//   - startdate: epoch
//   - nr_months = 48 (default)

//information stored at account level in TFGridDB
struct AccountMeta{
	vesting Vesting
	lockup Lockup
	farming_reward FarmingReward
}

struct Vesting{
	startdate int
	//which currency is used to execute on the acceleration in the vesting
	//if price above certain level (which is currency + amount of that currency) the auto unlock
	currency CurrencyEnum
	months []UnlockMonth
}

struct Lockup{
	startdate int
	months []UnlockMonth
}

struct FarmingReward{
	startdate int
	//currency as used to unlock, conversion will be done in month where check happens
	currency CurrencyEnum
	//typically 48 months
	months []RewardMonth
	//means 
	sla_test SLATestCat
	//identifiers of the 3nodes for which this farming needs to be calculateds
	nodes []FarmingNode
}

struct FarmingNode{
	//unique ID of node on TFGridDB
	node_id int
	//amount of CPR per node
	cpr_amount int
}


struct UnlockMonth{
	month_nr int
	//if 0 then will not unlock based on price
	unlock_price f32
	tft_amount int
}

//TODO:????
struct RewardMonth{
	month_nr int
	//imagine CPR reward is 60, and there are 48 months
	//then the reward in one mont is 60/48*CPR of the environment for which this FarmingReward has been created
	//that is the nr stored here
	cur_amount f32
}


enum CurrencyEnum{
	usd
	eur
	egp
	gbp
	aed
}

//for now only one test, which is basic uptime achieved
enum SLATestCat{
	uptime_basic
}

//this is stored in the TFGridDB
fn (mut v AccountMeta) serialize() string{
	//todo code which does serialization see above
	return ""
}


//write minting pool
```