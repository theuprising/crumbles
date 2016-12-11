import { compose } from 'ramda'

/**
 * @name base64.encode
 * @desc
 * ```
 * string -> string
 * ```
 */
export const encode = str => (new Buffer(str)).toString('base64')

/**
 * @name base64.decode
 * @desc
 * ```
 * string -> string
 * ```
 */
export const decode = str => (new Buffer(str, 'base64')).toString('utf8')

/**
 * @name base64.deserialize
 * @desc
 * ```
 * string -> Object
 * ```
 */
export const deserialize = compose(
  JSON.parse,
  decode
)

/**
 * @name base64.serialize
 * @desc
 * ```
 * Object -> string
 * ```
 */
export const serialize = compose(
  encode,
  JSON.stringify
)

