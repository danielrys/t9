import express from "express"

import generateWords from "./generateWords"

const PORT = 3000

const app = express()

app.get("/suggestions", (req, res) => {
  const { numbers } = req.query
  const numbersArray = numbers.split("")
  const suggestions = generateWords(numbersArray)
  res.status(200).send(suggestions)
})

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
