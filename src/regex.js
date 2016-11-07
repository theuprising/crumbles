const wrap = regexp => new RegExp('^' + regexp.source + '$')

const _domain = new RegExp(/((?=[a-z0-9-]{1,63}\.)(xn--)?[a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,63}/)
export const domain = wrap(_domain)

export const email = wrap((() => {
  const user = new RegExp(/([a-z0-9!#$%&'*+\/=?\^_`{|}~\-]+)/)
  return new RegExp(user.source + '@' + _domain.source)
})())

// // this is kinda like testing...
// //
// const test = (expectation, str, regexp) => {
//   const result = regexp.test(str)
//   const msg = result === expectation
//     ? '👍' : '👎'
//   console.log(msg, str, regexp.test(str))
// }

// test(true, 'a+b@monks.co', email)
// test(false, 'a@mo+nks.co', email)
// test(false, '$%$ a @monks.co', email)
// test(true, 'monks.co', domain)
// test(true, 'xn-onks-99b.com', domain)

// console.log('done')

