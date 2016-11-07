import { inspect } from 'util'
import { type } from 'ramda'

console.log(inspect)

export default v =>
  type(v) !== 'String'
    ? inspect(v, {
      colors: true,
      depth: 5
    })
    : v
