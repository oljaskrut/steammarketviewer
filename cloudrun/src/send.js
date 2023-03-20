const axios = require("axios")
const logy = require("./logy")

async function send(id, type, retries) {
  const count = ~~(Math.random() * 998)
  logy(type, "send", count, id, retries)
  try {
    const send_res = (await axios(`http://us-central1-jas-88.cloudfunctions.net/x-${count}?t=${type}&i=${id}`))?.data?.x
    if (retries <= 0) {
      logy(type, "send fail 0 retries", id)
      return
    } else {
      if (send_res == 429 || send_res == 200) {
        send(id, type, retries - 1)
        return
      }
    }
    logy(type, "send nice", id, retries)
  } catch (e) {
    logy(type, "insend", id, e.message)
  }
}

module.exports = send
