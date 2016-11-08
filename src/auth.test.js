/* eslint-env jest */

const testCases = [
  {
    username: 'user',
    password: 'pass',
    expect: 'Basic dXNlcjpwYXNz'
  }
]

test('encodes a username and password into a correect auth header', () => {
  const auth = require('./auth')
  testCases.forEach(test => {
    const { username, password } = test
    expect(auth.basicAuthHeader({username, password}))
      .toBe(test.expect)
  })
})

