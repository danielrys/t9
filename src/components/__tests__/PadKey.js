import React from "react"
import renderer from "react-test-renderer"

// components
import PadKey from "../PadKey"

describe("PadKey component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <PadKey
          onPress={() => undefined}
          keyConfig={{ value: 1, subvalue: "abc" }}
        />,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
