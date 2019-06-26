// @flow
import * as React from "react"
import { View, StyleSheet } from "react-native"

// components
import PadKey from "./PadKey"

// theme
import Metrics from "../themes/Metrics"

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
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: Metrics.spacings.medium,
    maxWidth: Metrics.padKey.baseDimension * 3.5,
    alignSelf: "center",
  },
})

type NumPadProps = {
  onNumberPress: (number | string) => void,
  onDeletePress: any => void,
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
