// @flow

import { curry, equals } from 'ramda'

/**
 * @name fn.iterate
 * @desc
 * repeat a function n times, invoking it on its result
 * @example
 * const add5 = iterate(5, add(1))
 */
const _iterate = (n: number, fn: Function, val: any): any => {
  let i = 0
  let v = val
  while (i < n) {
    v = fn(v)
    i += 1
  }
  return v
}
export const iterate = curry(_iterate)

/**
 * @name fn.noRepeat
 * @desc
 * cross between debounce and memoize
 *
 * I'm not sure how to explain this, look at the example
 *
 * @example
 * const arr = []
 * const once = noRepeat(val => { arr.push(val); return arr })
 * once(1) // -> [1]
 * once(1) // -> [1]
 * once(2) // -> [1, 2]
 * once(2) // -> [1, 2]
 * once(1) // -> [1, 2, 1]
 */
export const noRepeat = (fn: Function): Function => {
  let prev
  return (...args: any): void => {
    if (equals(args, prev)) return
    prev = args
    fn(...args)
  }
}

