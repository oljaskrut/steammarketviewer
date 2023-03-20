const axios = require("axios")
import { error } from "firebase-functions/logger"

const ix = axios.create({
  baseURL: "https://steamcommunity.com/market/listings/730/",
  params: {
    count: 100,
    currency: 1,
  },
})

export async function Get(name: string) {
  const response = await ix(encodeURI(name) + "/render").catch(() => {
    return { data: "error" }
  })
  const dat = response.data
  if (dat === "error") return 429
  if (dat.total_count === 0) return 200
  return Object.values(dat.listinginfo)
}

export async function GetIteminfo(url: string) {
  const response = await axios(`https://api.csgofloat.com/?url=${url}&minimal=true`).catch(() => {
    error(new Error(`CSGOFLOAT`))
    return { data: "error" }
  })
  const dat = response.data
  if (dat === "error")
    return {
      paintseed: 0,
      paintindex: 0,
      floatvalue: 0,
      wear_name: "",
      full_item_name: "",
    }

  const iteminfo = dat.iteminfo

  return iteminfo
}
