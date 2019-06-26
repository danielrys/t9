import React from "react"
import renderer from "react-test-renderer"

// components
import InputBox from "../InputBox"

describe("InputBox component", () => {
  it("renders without numbers prop", () => {
    const tree = renderer.create(<InputBox />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("renders with given numbers prop", () => {
    const tree = renderer
      .create(<InputBox numbers={[1, 2, 8, 6, 4]} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
