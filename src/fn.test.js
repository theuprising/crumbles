/* eslint-env jest */

import { add } from 'ramda'

test('iterates correctly', () => {
  const fn = require('./fn')
  const add5 = fn.iterate(5, add(1))
  expect(add5(0)).toBe(5)
})

