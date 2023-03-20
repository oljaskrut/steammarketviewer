const get = require("./get.js")
const send = require("./send.js")

const logy = require("./logy.js")
const configs = require("./config")

const MAX_CASH = 3

async function check(type, id, cash) {
  const { nid, name } = configs[type][id]

  if (nid === "undefined") return

  function cash_push(item) {
    if (cash.length >= MAX_CASH) cash.shift()
    cash.push(item)
  }
  const res = await get(nid)
  if (res === undefined) return
  if (res?.error) {
    logy(3, "get", res.error, name)
    return
  }

  if (cash.includes(res)) return

  cash_push(res)

  const current_time = String(Date.now()).slice(0, -3)
  const res_time = res.slice(1, 11)

  if (+current_time - 600 > +res_time) return

  if (cash.length < MAX_CASH) return
  logy(type, name + " | " + res)
  await send(id, type, 8)
}

module.exports = check
