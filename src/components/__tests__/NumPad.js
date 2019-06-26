import React from "react"
import renderer from "react-test-renderer"

// components
import NumPad from "../NumPad"

describe("NumPad component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<NumPad onNumberPress={() => undefined} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
