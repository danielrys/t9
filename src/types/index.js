// @flow
import type {
  TextStyleProp,
  ViewStyleProp,
} from "react-native/Libraries/StyleSheet/StyleSheet"

export type KeyConfig = {
  value: number | string,
  subvalue: string,
}

// general styling types
export type TextType = {
  ...TextStyleProp,
}

export type ViewType = {
  ...ViewStyleProp,
}
