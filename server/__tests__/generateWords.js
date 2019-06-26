import generateWords from "../generateWords"

describe("Server generateWords function", () => {
  it("returns correct words for simple numeric sequence", () => {
    const result = generateWords([2, 3])
    expect(result).toEqual([
      "ad",
      "bd",
      "cd",
      "ae",
      "be",
      "ce",
      "af",
      "bf",
      "cf",
    ])
  })
  it("returns empty array for a sequence only containing 1s", () => {
    const result = generateWords([1, 1, 1, 1])
    expect(result).toEqual([])
  })
})
