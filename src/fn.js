// @flow

import { curry } from 'ramda'

/**
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

