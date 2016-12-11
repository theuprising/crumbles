// logging utilities
// all the functions in here are completely elided unless environments.includes('development')

import { choose } from '../array'
import { curry } from 'ramda'
import inspect from '../inspect'

/**
 * @name log.log
 * @desc
 * ```
 * (...values) -> void
 * ```
 */
export const log = (...values) => {
  if (JSON.stringify(process.env.NODE_ENV) !== JSON.stringify('production')) {
    try {
      console.log(
        '\n',
        values.map(inspect).join('\n')
      )
    } catch (e) {
      console.log('\n', 'logging failure')
    }
  }
  return null
}

/**
 * @name log.info
 *
 * @desc
 * binary curried passthrough log function
 *
 * @example
 * info('array', [1, 2, 3])
 * ^ returns [1, 2, 3]
 *   calls cosnole.log('array', [1, 2, 3])
 *
 * @example
 * [1, 2, 3].map(info('array item'))
 * ^ returns [1, 2, 3]
 *   calls console.log('array item', [each array item])
 *
 * info : a -> b -> b
 */
export const info = curry((msg, v) => { log(msg, v); return v })

/**
 * @name log.spy
 *
 * @desc
 * ```
 * a -> a
 * ```
 * unary passthrough log function
 */
export const spy = info('spy')

/**
 * @name log.affirm
 *
 * @desc
 * ```
 * void -> void
 * ```
 * says something nice
 */
export const affirm = () =>
  log(
    choose([
      '👍🏻',
      '👍🏼',
      '👍🏽',
      '👍🏾',
      '👍🏿'
    ]),
    choose([
      'Yeah!',
      'Great job!',
      'Nice work!',
      'Way to go!',
      'Keep it up!',
      'You’re doing great!',
      'Awesome!',
      'Killin’ it!',
      'Spectacular!'
    ])
  )

