// @flow
import { from, of } from "rxjs"
import { filter, switchMap, flatMap, catchError } from "rxjs/operators"
import i18n from "i18n-js"

// api
import { suggestionsRequest } from "../services/api"

const suggestionActions = {
  GET: "ON_GET_SUGGESTIONS_REQUEST",
  SUCCESS: "ON_GET_SUGGESTIONS_REQUEST_SUCCESS",
  FAIL: "ON_GET_SUGGESTIONS_REQUEST_FAIL",
}

export const initialState = {
  loading: false,
  error: null,
  suggestions: [],
}

export const onGetSuggestionsRequest = (numberSequence: string) => ({
  type: suggestionActions.GET,
  numberSequence,
})
export const onGetSuggestionsRequestSuccess = (suggestions: Array<string>) => ({
  type: suggestionActions.SUCCESS,
  suggestions,
})
export const onGetSuggestionsRequestFail = (error: string) => ({
  type: suggestionActions.FAIL,
  error,
})

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case suggestionActions.GET:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case suggestionActions.SUCCESS:
      return {
        ...state,
        loading: false,
        suggestions: action.suggestions,
      }
    case suggestionActions.FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    default:
      return state
  }
}

const getSuggestionsEpic = action$ =>
  action$.pipe(
    filter(action => action.type === suggestionActions.GET),
    switchMap(action =>
      from(suggestionsRequest(action.numberSequence)).pipe(
        flatMap(response =>
          from([onGetSuggestionsRequestSuccess(response.data)]),
        ),
        catchError(e => {
          const errorMessage =
            (e && e.message) || i18n.t("_errorMessage.unknown")
          return of(onGetSuggestionsRequestFail(errorMessage))
        }),
      ),
    ),
  )

export const epics = [getSuggestionsEpic]
