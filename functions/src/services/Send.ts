import { error } from "firebase-functions/logger"
import { Listing, Type } from "../auxiliary/types"

async function Send(type: Type, bot: any, listing: Listing, { photo }: any) {
	const mes =
		(type == 0 && MessageFLT(listing)) ||
		(type == 1 && MessagePTRN(listing, photo)) ||
		(type == 2 && MessagePHS(listing))
	try {
		if (photo == undefined || photo?.length == 0) {
			await Promise.all([
				bot.telegram.sendMessage("653826845", mes, { parse_mode: "HTML", disable_web_page_preview: true }),
				bot.telegram.sendMessage("742797701", mes, { parse_mode: "HTML", disable_web_page_preview: true }),
				bot.telegram.sendMessage("447457371", mes, { parse_mode: "HTML", disable_web_page_preview: true }),
			])
		} else {
			await Promise.all([
				bot.telegram.sendMessage("653826845", mes, { parse_mode: "HTML" }),
				bot.telegram.sendMessage("742797701", mes, { parse_mode: "HTML" }),
				bot.telegram.sendMessage("447457371", mes, { parse_mode: "HTML" }),
			])
		}
	} catch (e) {
		error(e)
	}
}

function MessageFLT({ listingid, name_and_wear, price, float }: Listing) {
	return `${name_and_wear}
	
#${listingid}

<b>${(price / 100).toLocaleString("ru-RU", { style: "currency", currency: "USD" })}</b>
            
float: ${float.toFixed(8)}

<a href="https://steamcommunity.com/market/listings/730/${encodeURI(name_and_wear)}">market link</a>`
}

function MessagePTRN({ listingid, name_and_wear, price, pattern }: Listing, photo: string) {
	return `${name_and_wear}

#${listingid}

<b>${(price / 100).toLocaleString("ru-RU", { style: "currency", currency: "USD" })}</b>
            
pattern: ${pattern}

<a href="${photo}${pattern}.jpg">photo</a>

<a href="https://steamcommunity.com/market/listings/730/${encodeURI(name_and_wear)}">market link</a>`
}

function MessagePHS({ listingid, name_and_wear, price, paintindex }: Listing) {
	return `${name_and_wear}

#${listingid}

<b>${(price / 100).toLocaleString("ru-RU", { style: "currency", currency: "USD" })}</b>
            
${phases[paintindex]}

<a href="https://steamcommunity.com/market/listings/730/${encodeURI(name_and_wear)}">market link</a>`
}

const phases: { [index: string]: any } = {
	418: "Phase 1",
	419: "Phase 2",
	420: "Phase 3",
	421: "Phase 4",
	415: "Ruby",
	416: "Sapphire",
	417: "Black Pearl",
	569: "Phase 1",
	570: "Phase 2",
	571: "Phase 3",
	572: "Phase 4",
	568: "Emerald",
	618: "Phase 2",
	619: "Sapphire",
	617: "Black Pearl",
	852: "Phase 1",
	853: "Phase 2",
	854: "Phase 3",
	855: "Phase 4",
}

export default Send
