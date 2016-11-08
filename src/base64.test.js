/* eslint-env jest */

import { compose } from 'ramda'

test('serialization is isomorphic', () => {
  const testCases = [
    { a: 1, b: 2, c: 3 },
    { a: 'hello', 'stuff-***': 2, c: /idk/ }
  ]
  const base64 = require('./base64')
  const identity = compose(
    base64.serialize,
    base64.deserialize
  )
  testCases.forEach(obj => {
    console.log('obj', obj)
    expect(obj).toEqual(identity(obj))
  })
})

