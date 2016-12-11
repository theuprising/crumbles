import { inspect } from 'util'
import { type } from 'ramda'

/**
 * @name inspect
 * @desc
 * ```
 * any -> string
 * ```
 */
export default v =>
  type(v) !== 'String'
    ? inspect(v, {
      colors: true,
      depth: 5
    })
    : v

