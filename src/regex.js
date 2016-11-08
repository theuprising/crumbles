const wrap = regexp => new RegExp('^' + regexp.source + '$')

const _domain = new RegExp(/((?=[a-z0-9-]{1,63}\.)(xn--)?[a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,63}/)
export const domain = wrap(_domain)

export const email = wrap((() => {
  const user = new RegExp(/([a-z0-9!#$%&'\.*+\/=?\^_`{|}~\-]+)/)
  return new RegExp(user.source + '@' + _domain.source)
})())

