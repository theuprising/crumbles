import { curry } from 'ramda'

// eg: const add5 = iterate(5, add(1))
// iterate : Number -> (Any -> Any) -> Any -> Any
const _iterate = (n, fn, val) => {
  let i = 0
  let v = val
  while (i < n) {
    v = fn(v)
    i += 1
  }
  return v
}
export const iterate = curry(_iterate)

