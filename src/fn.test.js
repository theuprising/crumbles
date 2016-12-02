/* eslint-env jest */

import { add } from 'ramda'

test('iterates correctly', () => {
  const fn = require('./fn')
  const add5 = fn.iterate(5, add(1))
  expect(add5(0)).toBe(5)
})

test('noRepeats correctly', () => {
  const fn = require('./fn')
  const arr = []
  const once = fn.noRepeat(val => { arr.push(val); return arr })
  once(1)
  expect(arr).toEqual([1])
  once(1)
  expect(arr).toEqual([1])
  once(2)
  expect(arr).toEqual([1, 2])
  once(2)
  expect(arr).toEqual([1, 2])
  once(1)
  expect(arr).toEqual([1, 2, 1])
})

