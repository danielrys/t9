// @flow
import * as React from "react"
import { View, StyleSheet, ScrollView } from "react-native"

// components
import Container from "./Container"

import type { ViewType } from "../types"

type ScrollableContainerProps = {
  children: React.Node,
  style?: ViewType,
  contentStyle?: ViewType,
  centerContent?: boolean,
  loading: boolean,
}

const styles = StyleSheet.create({
  centeredWrapper: {
    flex: 1,
  },
  centeredContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
})

export default class ScrollableContainer extends React.PureComponent<ScrollableContainerProps> {
  static defaultProps = {
    style: {},
    contentStyle: {},
    centerContent: false,
  }

  render() {
    const { children, style, loading, centerContent, contentStyle } = this.props
    const innerStyles = centerContent ? [styles.centeredContent] : []
    const wrapperStyles = centerContent ? [styles.centeredWrapper] : []

    return (
      <View style={[...wrapperStyles, style]}>
        {loading ? (
          <Container loading />
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[...innerStyles, contentStyle]}
          >
            {children}
          </ScrollView>
        )}
      </View>
    )
  }
}
