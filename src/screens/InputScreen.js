// @flow
import React from "react"
import { Text, StyleSheet } from "react-native"
import { connect } from "react-redux"
import i18n from "i18n-js"
import R from "ramda"

// components
import { Container, ScrollableContainer, InputBox, NumPad } from "../components"

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
  suggestions: {
    height: Metrics.layoutSizes.base,
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

  handleNumberPress = (number: number) => {
    this.setState(
      state => ({
        numbers: [...state.numbers, number],
      }),
      () => {
        this.handleGetSuggestions()
      },
    )
  }

  handleDeletePress = () => {
    this.setState(
      state => ({
        numbers: R.dropLast(1, state.numbers),
      }),
      () => {
        const {
          numbers: { length },
        } = this.state
        if (length > 0) this.handleGetSuggestions()
      },
    )
  }

  render() {
    const { error, loading, suggestions } = this.props
    const { numbers } = this.state
    return (
      <Container>
        <Text style={styles.title}>{i18n.t("inputScreen.title")}</Text>
        <InputBox numbers={numbers} />
        {error && <Text style={styles.error}>{error}</Text>}
        <ScrollableContainer loading={loading} style={styles.suggestions}>
          {suggestions.map(suggestion => (
            <Text style={styles.suggestion} key={suggestion}>
              {suggestion}
            </Text>
          ))}
        </ScrollableContainer>
        <NumPad
          onNumberPress={this.handleNumberPress}
          onDeletePress={this.handleDeletePress}
        />
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
