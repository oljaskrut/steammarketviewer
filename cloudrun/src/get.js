const axios = require("axios")
const { day } = require("./day")

function parse({ timestamp, activity }) {
  const j = activity[0].split("market_ticker_name")[1].replace('">', "").replace("</span>", " |").replace("</span>\r\n</div>\r\n", "")
  return `(${timestamp})| ` + day(timestamp * 1000) + " | " + j
}
async function get(nid) {
  try {
    const { data } = await axios(`https://steamcommunity.com/market/itemordersactivity?language=english&currency=1&item_nameid=${nid}`)
    if (data.success != 1) return
    const s = data.activity
    const t = data.timestamp
    if (t == 0) return
    if (s.length == 0) return
    const rs = s.filter((el) => el.includes("listed this item"))
    if (rs.length == 0) return
    return parse(data)
  } catch (e) {
    return { error: e.message }
  }
}

module.exports = get
