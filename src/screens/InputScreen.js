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
import { Metrics, Colors } from "../themes"

const styles = StyleSheet.create({
  title: {
    fontSize: Metrics.texts.sizes.title,
  },
  error: {
    fontSize: Metrics.texts.sizes.base,
    color: Colors.error,
  },
  suggestion: {
    fontSize: Metrics.texts.sizes.base,
    color: Colors.primary,
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
    const { error, loading, suggestions } = this.props
    const { numbers } = this.state
    return (
      <Container>
        <Text style={styles.title}>{i18n.t("inputScreen.title")}</Text>
        <InputBox numbers={numbers} />
        {error && <Text>{error}</Text>}
        <Container loading={loading}>
          {suggestions.map(suggestion => (
            <Text style={styles.suggestion}>{suggestion}</Text>
          ))}
        </Container>
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
