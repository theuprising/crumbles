/* eslint-env jest */

const testCases = [
  {
    test: 'andrew <a@monks.co>',
    expect: {
      email: 'a@monks.co',
      name: 'andrew'
    }
  },
  {
    test: 'a@monks.co',
    expect: {
      email: 'a@monks.co'
    }
  }
]

test('correctly parses email addresses', () => {
  const email = require('./email')
  testCases.forEach(test => {
    expect(email.parseAddress(test.test)).toEqual(test.expect)
  })
})

