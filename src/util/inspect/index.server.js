import { inspect } from 'util'
import { type } from 'ramda'

export default v =>
  type(v) !== 'String'
    ? inspect(v, {
      colors: true,
      depth: 5
    })
    : v
