import { GetIteminfo } from "./axios"
import delay from "delay"
import { info } from "firebase-functions/logger"
import { Listing } from "../auxiliary/types"

async function Format(db: any, ListingArray: any, cfgname: string) {
  let result: Listing[] = []
  const promises = ListingArray.map((l: any) => {
    const link = l.asset.market_actions[0].link.replace("%listingid%", l.listingid).replace("%assetid%", l.asset.id)
    return GetIteminfo(link)
  })

  let original: any = []
  const doc = await db.collection("items_all").doc("ls").collection(cfgname).get()
  doc.forEach((d: any) => (original = [...original, d.id]))

  for await (const [i, promise] of promises.entries()) {
    const { listingid, converted_fee, converted_price } = ListingArray[i]
    if (converted_price == undefined || original.includes(listingid)) continue

    const { floatvalue, paintseed, full_item_name, paintindex } = await promise
    if (floatvalue === 0 && paintseed === 0) {
      info(`empty response for ${full_item_name} :: ${listingid}`)
      continue
    }
    const ListingItem = {
      listingid: listingid,
      price: converted_price + converted_fee,
      float: floatvalue,
      pattern: paintseed,
      paintindex,
      name_and_wear: full_item_name,
    }

    db.collection("items_all").doc("ls").collection(cfgname).doc(listingid).set({})
    result = [...result, ListingItem]
    await delay(~~(Math.random() * 100))
  }

  return result
}

export default Format
