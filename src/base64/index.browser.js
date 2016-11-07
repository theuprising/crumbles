// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#Solution_1_–_escaping_the_string_before_encoding_it

import { compose, join, map } from 'ramda'

export const decode = compose(
  thing => decodeURIComponent(thing),
  join(''),
  map(c => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`),
  thing => window.atob(thing)
)

export const encode = compose(
  thing => window.btoa(thing),
  str => str.replace(/%([0-9A-F]{2})/g, (match, p1) => String.fromCharCode(`0x${p1}`)),
  thing => encodeURIComponent(thing)
)

export const deserialize = compose(
  thing => JSON.parse(thing),
  decode
)

export const serialize = compose(
  encode,
  thing => JSON.stringify(thing)
)

