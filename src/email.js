// @flow

const parseRegex = /^(.*) <(.*)>$/

/**
 * @name email.parseAddress
 * @desc
 * Parse an email address string
 * @example
 * const { email, name } = parseAddress('Andrew <a@monks.co>')
 * const { email } = parseAddress('a@monks.co')
 */
export const parseAddress = (str: string): { email: string, name?: string } => {
  const match = str.match(parseRegex)
  if (!match) return { email: str }
  const [, name, email] = match
  return { email, name }
}

