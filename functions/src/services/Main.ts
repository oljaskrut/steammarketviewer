import { Type } from "../auxiliary/types"
import Configs from "../configs/Configs"
import { Get } from "./axios"
import Format from "./Format"
import Send from "./Send"
import Validate from "./Validate"

async function Main(type: Type, index: number, db: any, bot: any, blank = false) {
	const config: any = Configs[type][index]

	const ListingArray = await Get(config.name)
	if (ListingArray === 200 || ListingArray === 429) return ListingArray

	const Formatted = await Format(db, ListingArray, config.name)
	if (!Formatted.length) return -1

	if (blank) return 7

	const Validated = Validate(type, Formatted, config)
	if (!Validated.length) return 0

	for (const listing of Validated) await Send(type, bot, listing, config)

	return 1
}

export default Main
