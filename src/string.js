import { compose as comp, join, map, split, slice, toUpper, toLower } from 'ramda'
export { toLower, toUpper }

export const capitalize = str =>
  `${toUpper(str.charAt(0))}${slice(1, Infinity, str)}`

export const toCamel = delim =>
  comp(join(''), map(capitalize), split(delim))

export const toLowerCamel = delim =>
  comp(toLower, toCamel(delim))

export const toKebab = delim =>
  comp(join('-'), split(delim))

export const toLowerKebab = delim =>
  comp(toLower, toKebab(delim))

export const toUpperKebab = delim =>
  comp(toUpper, toKebab(delim))

export const toSnake = delim =>
  comp(join('_'), split(delim))

export const toLowerSnake = delim =>
  comp(toLower, toSnake(delim))

export const toUpperSnake = delim =>
  comp(toUpper, toSnake(delim))
//                                                       !!! Y !!!
export const toScreamingSnake = toUpperSnake // <==========(:O)

const snakeDelim = '_'
const kebabDelim = '-'
const camelDelim = /(?=[A-Z])/

export const snakeToCamel = toCamel(snakeDelim)
export const kebabToCamel = toCamel(kebabDelim)

export const snakeToLowerCamel = toLowerCamel(snakeDelim)
export const kebabToLowerCamel = toLowerCamel(kebabDelim)

export const snakeToKebab = toKebab(snakeDelim)
export const camelToKebab = toKebab(camelDelim)

export const snakeToLowerKebab = toLowerKebab(snakeDelim)
export const camelToLowerKebab = toLowerKebab(camelDelim)

export const snakeToUpperKebab = toUpperKebab(snakeDelim)
export const camelToUpperKebab = toUpperKebab(camelDelim)

export const camelToSnake = toSnake(camelDelim)
export const kebabToSnake = toSnake(kebabDelim)

export const camelToLowerSnake = toLowerSnake(camelDelim)
export const kebabToLowerSnake = toLowerSnake(kebabDelim)

export const camelToUpperSnake = toUpperSnake(camelDelim)
export const kebabToUpperSnake = toUpperSnake(kebabDelim)
