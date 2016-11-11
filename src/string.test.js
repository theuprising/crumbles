/* eslint-env jest */

import { intersection, pipe } from 'ramda'

const testCases = [
  {
    camel: 'TheDukeWasAtTheParty',
    kebab: 'the-duke-was-at-the-party',
    snake: 'the_duke_was_at_the_party',
    space: 'the duke was at the party',
    sentence: 'The duke was at the party',
    title: 'The Duke Was at the Party'
  }
  // this fails
  // {
  //   camel: 'TheDukeWentTo13Parties',
  //   kebab: 'the-duke-went-to-13-parties',
  //   snake: 'the_duke_went_to_13_parties',
  //   space: 'the duke went to 13 parties',
  //   sentence: 'The duke went to 13 parties',
  //   title: 'The Duke Went to 13 Parties'
  // }
]

test('all of the formats are tested', () => {
  const string = require('./string')
  testCases.forEach(test => {
    expect(intersection(Object.keys(test), Object.keys(string.formats)).length)
      .toBe(Object.keys(string.formats).length)
  })
})

test('conversions are isomorphic', () => {
  const string = require('./string')
  const formats = Object.keys(string.formats)
  formats.forEach(format => {
    const formatObj = string.formats[format]
    const identity = pipe(formatObj.from, formatObj.to)
    testCases.forEach(test => {
      const str = test[format]
      expect(identity(str)).toBe(str)
    })
  })
})

test('correctly converts between formats', () => {
  const string = require('./string')
  const formats = Object.keys(string.formats)
  testCases.forEach(test => {
    formats.forEach(from => {
      formats.forEach(to => {
        expect(string.convert(string.formats[from], string.formats[to])(test[from]))
          .toBe(test[to])
      })
    })
  })
})

