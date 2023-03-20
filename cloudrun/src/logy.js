const { now } = require("./day")
const { logs } = require("./state")

const MAX_LOG = 128

function logy(type, ...msg) {
  const message = msg.join(" ") + now()
  const log = logs[type]
  if (log.length > MAX_LOG) {
    log.shift()
  }
  log.push(message)
  console.log(message)
}

module.exports = logy
