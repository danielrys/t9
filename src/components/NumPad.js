// @flow
import * as React from "react"
import { View, StyleSheet } from "react-native"

// components
import PadKey from "./PadKey"

const NUMBERS_CONFIG = [
  {
    value: 1,
    subvalue: "",
  },
  {
    value: 2,
    subvalue: "ABC",
  },
  {
    value: 3,
    subvalue: "DEF",
  },
  {
    value: 4,
    subvalue: "GHI",
  },
  {
    value: 5,
    subvalue: "JKL",
  },
  {
    value: 6,
    subvalue: "MNO",
  },
  {
    value: 7,
    subvalue: "PQRS",
  },
  {
    value: 8,
    subvalue: "TUV",
  },
  {
    value: 9,
    subvalue: "WXYZ",
  },
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

type NumPadProps = {
  onNumberPress: number => void,
  onDeletePress: void => void,
}

export default class InputBox extends React.PureComponent<NumPadProps> {
  render() {
    const { onNumberPress, onDeletePress } = this.props
    return (
      <View style={styles.container}>
        {NUMBERS_CONFIG.map(keyConfig => (
          <PadKey
            keyConfig={keyConfig}
            onPress={onNumberPress}
            key={keyConfig.value}
          />
        ))}
        <PadKey
          keyConfig={{ value: "<", subvalue: "DEL" }}
          onPress={onDeletePress}
        />
      </View>
    )
  }
}