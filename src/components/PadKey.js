// @flow
import * as React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"

// theme
import { Colors, Metrics } from "../themes"

// types
import type { KeyConfig } from "../types"

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  number: {
    fontSize: Metrics.texts.sizes.big,
    color: Colors.textPrimary,
  },
  letters: {
    fontSize: Metrics.texts.sizes.small,
    color: Colors.textPrimaryMuted,
  },
})

type PadKeyProps = {
  keyConfig: KeyConfig,
  onPress: number => void,
}

export default class PadKey extends React.PureComponent<PadKeyProps> {
  handlePress = () => {
    const {
      keyConfig: { value },
      onPress,
    } = this.props
    onPress(value)
  }

  render() {
    const {
      keyConfig: { value, subvalue },
    } = this.props
    return (
      <TouchableOpacity style={styles.container} onPress={this.handlePress}>
        <Text style={styles.number}>{value}</Text>
        <Text style={styles.letters}>{subvalue}</Text>
      </TouchableOpacity>
    )
  }
}
