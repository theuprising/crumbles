/* eslint-env jest */

test('chooses the item from a single-item array', () => {
  const array = require('./array')
  expect(array.choose([1])).toBe(1)
})

