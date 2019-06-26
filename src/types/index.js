// @flow
import * as React from "react"
import { View, Text } from "react-native"

import type { Observable } from "rxjs"

export type KeyConfig = {
  value: number | string,
  subvalue: string,
}

export type Action =
  | { type: "ON_GET_SUGGESTIONS_REQUEST", numberSequence: string }
  | { type: "ON_GET_SUGGESTIONS_REQUEST_SUCCESS", suggestions: Array<string> }
  | { type: "ON_GET_SUGGESTIONS_REQUEST_FAIL", error: string }

export type Epic = (actions$: Observable<Action>) => Observable<Action>

// general styling & prop types
export type ViewProps = React.ElementProps<typeof View>
export type ViewType = $PropertyType<ViewProps, "style">

export type TextProps = React.ElementProps<typeof Text>
export type TextType = $PropertyType<TextProps, "style">
