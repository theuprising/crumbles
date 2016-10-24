export const domain = new RegExp(/\b((?=[a-z0-9-]{1,63}\.)(xn--)?[a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,63}\b)/)
export const email = new RegExp(/([a-z0-9!#$%&'*+\/=?\^_`{|}~\-]+)@/ + domain.source)

