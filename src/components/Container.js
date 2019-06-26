// @flow
import * as React from "react"
import { View, ActivityIndicator } from "react-native"

// styles
import { Colors } from "../themes"

import type { ViewType } from "../types"

export type ContainerProps = {
  children?: React.Node,
  style?: ViewType,
  loading: boolean,
}

const styles = {
  outerWrapper: {
    flex: 1,
  },
  container: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  spinner: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
}

export default class Container extends React.PureComponent<ContainerProps> {
  static defaultProps = {
    style: {},
    children: null,
  }

  render() {
    const { children, style, loading } = this.props

    return (
      <View style={styles.outerWrapper}>
        <View style={[styles.container, style]}>
          {loading ? (
            <View style={styles.spinner}>
              <ActivityIndicator size="large" color={Colors.primary} />
            </View>
          ) : (
            children
          )}
        </View>
      </View>
    )
  }
}
