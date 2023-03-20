export { x } from "./fx"

// const axios = require("axios")
// import * as functions from "firebase-functions"
// import delay from "delay"

// export const exe = functions
//   .runWith({ timeoutSeconds: 90 })
//   .pubsub.schedule("* 0-3,12-23 * * *")
//   .timeZone("Asia/Almaty")
//   .onRun(async () => {
//     // export const hexef = functions.runWith({ timeoutSeconds: 240 }).https.onRequest(async (req, res) => {
//     try {
//       let count = ~~(Math.random() * 998)

//       function cup() {
//         if (count == 998) {
//           count = 1
//         } else {
//           count++
//         }
//       }

//       async function suc(t: any, i: any) {
//         try {
//           await delay(~~(Math.random() * 1000))
//           cup()
//           axios(`https://us-central1-jas-77.cloudfunctions.net/x-${count}?t=${t}&i=${i}`)
//         } catch (e) {
//           console.log(e)
//         }
//       }

//       let ara: any = []

//       const MAX = [217, 226, 21]
//       function xex(t: any) {
//         for (let i = 0; i < MAX[t]; i++) {
//           ara.push(suc(t, i))
//         }
//       }

//       // const REPS = 1

//       // for (let jj = 0; jj < REPS; jj++) {
//       // if (jj != 0) await delay(57000 / REPS - 5000)
//       for (let i = 0; i < 3; i++) xex(i)
//       try {
//         await Promise.all(ara)
//       } catch (e) {
//         console.log(e)
//       }
//       // ara = []
//       // }
//     } catch (e) {
//       console.log(e)
//     }

//     await delay(3000)
//   })

// const fs = require("fs")

// export const hexef = functions.runWith({ timeoutSeconds: 300 }).https.onRequest(async (req, res: any) => {
//   // let count = ~~(Math.random() * 98) + 900
//   let count = 901 + ~~(Math.random() * 98)

//   function cup() {
//     if (count == 998) {
//       count = 901
//     } else {
//       count++
//     }
//   }

//   // const ara: any = []

//   async function suc(t: any, i: any) {
//     await delay(~~(Math.random() * 1000))
//     cup()
//     axios(`https://us-central1-gas-77.cloudfunctions.net/x-${count}?t=${t}&i=${i}`)
//       .catch(async (err) => {
//         fs.appendFileSync("err.txt", `x-${count}-${t}-${i} :: ${err.message}\n`)
//       })
//       .then((ms) => fs.appendFileSync("log.txt", ms?.data?.x + "\n"))
//   }
//   //217,226
//   const MAX = [0, 0, 21]
//   async function xex(t: any) {
//     for (let i = 0; i < MAX[t]; i++) {
//       // ara.push(suc(t, i))
//       await suc(t, i)
//     }
//   }

//   for (let i = 0; i < 3; i++) await xex(i)

//   // console.time("d")
//   // await Promise.all(ara)
//   // console.timeEnd("d")
//   res.send("DUnno")
//   // xex(2)

//   // await delay(25000)
// })
