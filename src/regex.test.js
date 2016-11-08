/* eslint-env jest */

const testCases = {
  domain: {
    valid: [
      'xn-onks-99b.com',
      'cool1203.party'
    ],
    invalid: [
      'notadomain',
      'stuff.com.'
    ]
  },
  email: {
    valid: [
      'andrew+mo.nks@xn-onks-99b.com',
      'hello@whatever.biz',
      'gmail@fmail.email',
      'a@monks.co'
    ],
    invalid: [
      'hello@',
      'example.com'
    ]
  }
}

test('correctly identifies invalid domains', () => {
  const regex = require('./regex')
  testCases.domain.invalid.forEach(str => {
    expect(regex.domain.test(str)).toBe(false)
  })
})

test('correctly identifies valid domain', () => {
  const regex = require('./regex')
  testCases.domain.valid.forEach(str => {
    expect(regex.domain.test(str)).toBe(true)
  })
})

test('correctly identifies invalid email', () => {
  const regex = require('./regex')
  testCases.email.invalid.forEach(str => {
    expect(regex.email.test(str)).toBe(false)
  })
})

test('correctly identifies valid email', () => {
  const regex = require('./regex')
  testCases.email.valid.forEach(str => {
    expect(regex.email.test(str)).toBe(true)
  })
})

