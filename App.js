// @flow
import "rxjs"
import React from "react"
import { Provider } from "react-redux"

// initialization
import configureLocalization from "./src/services/configureLocalization"
import initStore from "./src/services/configureRedux"

// screens
import InputScreen from "./src/screens/InputScreen"

configureLocalization()

const store = initStore()

export default class App extends React.PureComponent<null> {
  render() {
    return (
      <Provider store={store}>
        <InputScreen />
      </Provider>
    )
  }
}
