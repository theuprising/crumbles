import { identity, propOr, curry, prop, compose } from 'ramda'

/**
 * @name redux.createReduxer
 *
 * @desc
 * ```
 * (A, {[ActionType]: (A, Action) -> A}) -> (A | undefined, Action) -> A
 * ```
 */
export const createReducer = (init, handlers) =>
  (state = init, action) =>
    propOr(identity, prop('type', action), handlers)(state, action)

/**
 * @name redux.bindAction
 *
 * @desc
 * ```
 * Dispatch -> ActionCreator -> Function
 * ```
 */
export const bindAction = curry(
  (dispatch, actionCreator) => compose(dispatch, actionCreator)
)

