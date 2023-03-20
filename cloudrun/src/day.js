const dayjs = require("dayjs")
const timezone = require("dayjs/plugin/timezone")
const utc = require("dayjs/plugin/utc")
const relativeTime = require("dayjs/plugin/relativeTime")
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(relativeTime)

function now() {
  return dayjs().tz("Asia/Almaty").format(" HH:mm:ss")
}
function day(unix) {
  return dayjs(unix).tz("Asia/Almaty").format("HH:mm:ss")
}
function fromNow(unix) {
  return dayjs(unix).tz("Asia/Almaty").fromNow()
}

module.exports = { now, day, fromNow }
