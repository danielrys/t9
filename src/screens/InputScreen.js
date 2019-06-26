// @flow
import React from "react"
import { Text, StyleSheet } from "react-native"
import { connect } from "react-redux"
import i18n from "i18n-js"
import R from "ramda"

// components
import { Container, InputBox } from "../components"

// redux
import { onGetSuggestionsRequest } from "../redux/SuggestionsRedux"

// theme
import { Metrics } from "../themes"

const styles = StyleSheet.create({
  title: {
    fontSize: Metrics.texts.sizes.title,
  },
})

type InputScreenProps = {
  onGetSuggestionsRequest: typeof onGetSuggestionsRequest,
  error: ?string,
  loading: boolean,
  suggestions: Array<number>,
}

type InputScreenState = {
  numbers: Array<number>,
}

class InputScreen extends React.PureComponent<
  InputScreenProps,
  InputScreenState,
> {
  state = {
    numbers: [],
  }

  handleGetSuggestions = () => {
    const { onGetSuggestionsRequest } = this.props
    const { numbers } = this.state
    const numberSequence = numbers.join("")
    onGetSuggestionsRequest(numberSequence)
  }

  render() {
    const { numbers } = this.state
    return (
      <Container>
        <Text style={styles.title}>{i18n.t("inputScreen.title")}</Text>
        <InputBox numbers={numbers} />
        <Text>@TODO error display box</Text>
        <Text>@TODO results box</Text>
        <Text>@TODO keyboard</Text>
      </Container>
    )
  }
}

const mapStateToProps = state =>
  R.pick(["error", "loading", "suggestions"], state.suggestions)

const mapDispatchToProps = {
  onGetSuggestionsRequest,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InputScreen)
