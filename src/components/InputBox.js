// @flow
import * as React from "react"
import { View, Text, StyleSheet } from "react-native"

// theme
import { Colors, Metrics } from "../themes"

const styles = StyleSheet.create({
  container: {
    borderWidth: Metrics.borders.widths.base,
    borderRadius: Metrics.radii.base,
    borderColor: Colors.border,
    height: Metrics.inputBox.height,
    justifyContent: "center",
  },
  text: {
    fontSize: Metrics.texts.sizes.base,
    color: Colors.textPrimary,
  },
})

type InputBoxProps = {
  numbers: Array<number>,
}

export default class InputBox extends React.PureComponent<InputBoxProps> {
  render() {
    const { numbers = [] } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{numbers.join("")}</Text>
      </View>
    )
  }
}
