// @flow
import * as React from "react"
import { View, ActivityIndicator } from "react-native"

// styles
import { Colors, Metrics } from "../themes"

import type { ViewType } from "../types"

export type ContainerProps = {
  children?: React.Node,
  style?: ViewType,
  loading: boolean,
  padding?: boolean,
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
  padding: {
    padding: Metrics.spacings.medium,
  },
}

export default class Container extends React.PureComponent<ContainerProps> {
  static defaultProps = {
    style: {},
    children: null,
    padding: false,
  }

  render() {
    const { children, style, loading, padding } = this.props
    const additionalStyles = padding ? [styles.padding] : []

    return (
      <View style={[styles.outerWrapper, ...additionalStyles]}>
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
