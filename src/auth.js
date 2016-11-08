// @flow

import { encode } from './base64'

/**
 * generate a header for http basic auth
 * @example
 * const username = 'user'
 * const password = 'password'
 * const headers = { Authorization: basicAuthHeader({username, password}) }
 */
export const basicAuthHeader = ({username, password}: {username: string, password: string}): string => {
  const bearer = encode(`${username}:${password}`)
  return `Basic ${bearer}`
}

