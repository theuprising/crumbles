// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#Solution_1_–_escaping_the_string_before_encoding_it

import { compose, join, map } from 'ramda'

const decode = compose(
  decodeURIComponent,
  join(''),
  map(c => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`),
  window.atob
)

const encode = compose(
  window.btoa,
  str => str.replace(/%([0-9A-F]{2})/g, (match, p1) => String.fromCharCode(`0x${p1}`)),
  encodeURIComponent
)

export const deserialize = compose(
  JSON.parse,
  decode
)

export const serialize = compose(
  encode,
  JSON.stringify
)

