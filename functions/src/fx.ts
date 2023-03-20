const { Telegraf } = require("telegraf")
import { error, info } from "firebase-functions/logger"
import Configs from "./configs/Configs"

const bot = new Telegraf("1411689311:xxxxxxxxxxxxxxxxxxxxxx")

import * as functions from "firebase-functions"
import * as admin from "firebase-admin"
import Main from "./services/Main"

admin.initializeApp()
const db = admin.firestore()

const xs = []

for (let j = 0; j < 1000; j++) {
  xs[j] = functions.https.onRequest(async (req: any, res: any) => {
    const t: any = Number(req.query.t)
    const i = Number(req.query.i)
    const b = Number(req.query.b)

    if (isNaN(t) || isNaN(i)) return res.send({ s: 400 })

    if (b == 1) {
      console.log("yeat")
      const rn = await Main(t, i, db, bot, true)
      return res.send({ x: rn })
    }

    const r = await Main(t, i, db, bot)
    const s = `(${r})-(${j})-(${i}) ${Configs[t][i].name}`

    if (r == 429 || r == 200) {
      error(s)
    } else {
      info(s)
    }
    // db.ref(`log/${r}/${j}`).set(s1).catch(console.log)
    res.send({ x: r })
  })
}
export const x = xs
