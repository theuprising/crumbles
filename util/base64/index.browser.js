import { compose } from 'ramda'
import unibabel from 'unibabel'

export const encode = unibabel.utf8ToBase64
export const decode = unibabel.base64ToUtf8

export const deserialize = compose(
  JSON.parse,
  decode
)

export const serialize = compose(
  encode,
  JSON.stringify
)

