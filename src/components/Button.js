// @flow
import * as React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"

// theme
import { Colors, Metrics } from "../themes"

// types
import type { ViewType, TextType } from "../types"

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: Metrics.radii.base,
    height: Metrics.buttons.heights.base,
    justifyContent: "center",
  },
  primary: {
    backgroundColor: Colors.primary,
  },
  secondary: {
    backgroundColor: Colors.secondary,
  },
  text: {
    fontSize: Metrics.texts.sizes.base,
    color: Colors.background,
  },
})

type ButtonProps = {|
  onPress: () => void,
  children: string | React.Node,
  theme?: "primary" | "secondary",
  style?: ViewType,
  textStyle?: TextType,
|}

export default class Button extends React.PureComponent<ButtonProps> {
  static defaultProps = {
    style: {},
    textStyle: {},
    theme: "primary",
  }

  render() {
    const { children, onPress, theme, style, textStyle } = this.props
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, styles[theme || "primary"], style]}
      >
        {typeof children === "string" ? (
          <Text
            size={Metrics.texts.sizes.button}
            style={[styles.text, textStyle]}
          >
            {children}
          </Text>
        ) : (
          children
        )}
      </TouchableOpacity>
    )
  }
}
