import express from "express"

import generateWords from "./generateWords"

const PORT = 3000

const app = express()

app.get("/suggestions", (req, res) => {
  const { numbers } = req.query
  // split and leave out 1s, since there is no use for them
  const numbersArray = numbers
    .split("")
    .map(item => parseInt(item, 10))
    .filter(item => item !== 1)
  const suggestions = generateWords(numbersArray)
  res.status(200).send(suggestions)
})

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
