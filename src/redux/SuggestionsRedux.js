// @flow
import { from, of } from "rxjs"
import { filter, switchMap, flatMap, catchError } from "rxjs/operators"
import i18n from "i18n-js"
import type { Observable } from "rxjs"

// api
import { suggestionsRequest } from "../services/api"

// types
import type { Action, Epic } from "../types"

const suggestionActions = {
  GET: "ON_GET_SUGGESTIONS_REQUEST",
  SUCCESS: "ON_GET_SUGGESTIONS_REQUEST_SUCCESS",
  FAIL: "ON_GET_SUGGESTIONS_REQUEST_FAIL",
}

type SuggestionsState = {
  loading: boolean,
  error: ?string,
  suggestions: Array<string>,
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
export const onGetSuggestionsRequestFail = (
  error: string,
  errorObject: Error,
) => ({
  type: suggestionActions.FAIL,
  error,
  errorObject,
})

export const reducer = (
  state: SuggestionsState = initialState,
  action: Action,
) => {
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

const getSuggestionsEpic: Epic = (action$: Observable<Action>) =>
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
          return of(onGetSuggestionsRequestFail(errorMessage, e))
        }),
      ),
    ),
  )

export const epics = [getSuggestionsEpic]
