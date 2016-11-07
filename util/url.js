import URL from 'url-parse'
import { map, mapObjIndexed, join, split, compose } from 'ramda'

export const parse = url => new URL(url)
export default parse

export const objToQueryString = compose(
  join('&'),
  Object.values,
  mapObjIndexed((val, key, obj) =>
    `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`
  )
)
console.log('string', objToQueryString({a: 1, b: 2}))

export const queryStringToObj = compose(
  nestedArrays => {
    let obj = {}
    nestedArrays.forEach(
      tuple => {
        const [key, val] = tuple
        obj[decodeURIComponent(key)] = decodeURIComponent(val)
      }
    )
    return obj
  },
  map(map(decodeURIComponent)),
  map(split('=')),
  split('&')
)
