import { Listing, Type } from "../auxiliary/types"

function Validate(type: Type, FormattedListingArray: Listing[], config: any) {
	if (type === 0) return FormattedListingArray.filter(({ float }) => float <= config.FLT)
	if (type === 1) return FormattedListingArray.filter(({ pattern }) => config.PTRN.includes(pattern))
	if (type === 2) return FormattedListingArray.filter(({ paintindex }) => config.PHS.includes(paintindex))
	console.log("Error: type not exist")
	return []
}

export default Validate
