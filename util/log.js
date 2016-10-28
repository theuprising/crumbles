// logging utilities
// all the functions in here are completely elided unless environments.includes('development')

import { choose } from './coll'
import { curry } from 'ramda'
import inspect from './inspect'

// console.log-like log function
// log : ...any -> null
export const log = (...values) => {
  // if (config.debug) {
  console.log(
    '\n',
    values.map(inspect).join('\n')
  )
  // }
  return null
}

// binary curried passthrough log function
//
// info('array', [1, 2, 3])
// ^ returns [1, 2, 3]
//   calls cosnole.log('array', [1, 2, 3])
//
// [1, 2, 3].map(info('array item'))
// ^ returns [1, 2, 3]
//   calls console.log('array item', [each array item])
//
// info : a -> b -> b
export const info = curry((msg, v) => { log(msg, v); return v })

// unary passthrough log function
// spy : a -> a
export const spy = info('spy')

// nullary side effect
export const affirm = () =>
  console.log(
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

