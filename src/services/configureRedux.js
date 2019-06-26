// @flow
import { createStore, applyMiddleware, combineReducers } from "redux"
import { combineEpics, createEpicMiddleware } from "redux-observable"
import { createLogger } from "redux-logger"

// reducers & epics
import {
  reducer as suggestionsReducer,
  epics as suggestionsEpics,
} from "../redux/SuggestionsRedux"

const epics = [...suggestionsEpics]

const reducers = {
  suggestions: suggestionsReducer,
}

export default () => {
  const middleware = []

  const epicMiddleware = createEpicMiddleware({
    dependencies: {},
  })

  if (__DEV__) {
    const logger = createLogger({ collapsed: true })
    middleware.push(logger)
  }

  middleware.push(epicMiddleware)

  const store = createStore(
    combineReducers(reducers),
    {},
    applyMiddleware(...middleware),
  )
  epicMiddleware.run(combineEpics(...epics))

  return store
}
