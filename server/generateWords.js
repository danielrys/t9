const lettersMap = {
  1: [],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
}

const generateWords = numbersArray => {
  const { length } = numbersArray
  const possibilities = numbersArray.map(number => lettersMap[number])
  let parts = possibilities[0]

  for (let i = 1; i < length; i += 1) {
    const newLetters = possibilities[i]
    let newParts = []
    for (let j = 0; j < newLetters.length; j += 1) {
      if (parts.length < 1) {
        newParts = newLetters
      } else {
        for (let p = 0; p < parts.length; p += 1) {
          newParts.push(`${parts[p]}${newLetters[j]}`)
        }
      }
    }
    parts = newParts
  }
  return parts
}

export default generateWords
