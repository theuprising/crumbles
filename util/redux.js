import { identity, propOr, curry, prop, compose } from 'ramda'

export const createReducer = (init, handlers) =>
  (state = init, action) =>
    propOr(identity, prop('type', action), handlers)(state, action)

export const bindAction = curry(
  (dispatch, actionCreator) => compose(dispatch, actionCreator)
)

