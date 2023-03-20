const cron = require("node-cron")
const { now, fromNow } = require("./day")
const check = require("./check")

const configs = require("./config")

const { logs, caches } = require("./state")
const MAXES = [217, 226, 4]

let run_count = 0
const timestamp = now()
const unix_timestamp = Date.now()
cron.schedule("*/5 * * * * *", async () => {
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < MAXES[j]; i++) {
      check(j, i, caches[j][i])
    }
  }
  run_count++
})

const express = require("express")
const app = express()

app.get("/run", (req, res) => {
  const past_time = fromNow(unix_timestamp)
  res.send({ run_count, timestamp, past_time })
})
app.get("/log", (req, res) => {
  res.send(logs)
})
app.get("/", (req, res) => {
  res.send(caches)
})
app.get("/:type/", (req, res) => {
  const type = req.params.type
  res.send(caches[type])
})
app.get("/clear/:type/", (req, res) => {
  const type = req.params.type ?? 7
  if (!["0", "1", "2"].includes(type)) {
    const mata = caches.map((l) => {
      const data = l?.filter((x) => x.length >= 1)
      return { count: data.length, data }
    })
    res.send(mata)
  } else {
    const data = []
    for (let i = 0; i < caches[type].length; i++) {
      if (caches[type][i].length >= 1) data.push({ [configs[type][i].name]: caches[type][i] })
    }
    res.send({ count: data.length, data })
  }
})
app.get("/clear1/:type/", (req, res) => {
  const type = req.params.type ?? 7
  if (!["0", "1", "2"].includes()) {
    const mata = caches.map((l) => {
      const data = l?.filter((x) => x.length >= 2)
      return { count: data.length, data }
    })
    res.send(mata)
  } else {
    const data = []
    for (let i = 0; i < caches[type].length; i++) {
      if (caches[type][i].length >= 2) data.push({ [configs[type][i].name]: caches[type][i] })
    }
    res.send({ count: data.length, data })
  }
})
app.get("/clear2/:type/", (req, res) => {
  const type = req.params.type ?? 7
  if (!["0", "1", "2"].includes()) {
    const mata = caches.map((l) => {
      const data = l?.filter((x) => x.length >= 3)
      return { count: data.length, data }
    })
    res.send(mata)
  } else {
    const data = []
    for (let i = 0; i < caches[type].length; i++) {
      if (caches[type][i].length >= 3) data.push({ [configs[type][i].name]: caches[type][i] })
    }
    res.send({ count: data.length, data })
  }
})
app.get("/log/:type/", (req, res) => {
  const type = req.params.type
  res.send(logs[type])
})

app.listen(8080, () => {
  console.log(`listening on 8080`)
})
