import { type } from 'ramda'

export default v =>
  type(v) !== 'String'
    ? JSON.stringify(v, undefined, 2)
    : v
