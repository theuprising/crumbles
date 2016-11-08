/* eslint-env jest */

import { compose } from 'ramda'

const testCases = {
  objects: [
    { a: 1, b: 2, c: 3 },
    { a: 'hello', 'stuff-***': 2, c: 1.0e5 }
  ],
  strings: [
    'string',
    'another.string'
  ]
}

test('serialization is isomorphic', () => {
  const base64 = require('./base64')
  const identity = compose(
    base64.deserialize,
    base64.serialize
  )
  testCases.objects.forEach(obj => {
    expect(obj).toEqual(identity(obj))
  })
})

test('encoding is isomorphic', () => {
  const base64 = require('./base64')
  const identity = compose(
    base64.decode,
    base64.encode
  )
  testCases.strings.forEach(str => {
    expect(str).toEqual(identity(str))
  })
})

test('encoding produces a string', () => {
  const base64 = require('./base64')
  testCases.strings.forEach(str => {
    expect(typeof base64.encode(str)).toBe('string')
  })
})

