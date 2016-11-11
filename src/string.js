// @flow
type Delim = string | Object
type StringTransformer = (value: string) => string
type StringTransformerFactory = (delim: Delim) => StringTransformer

import { compose as comp, join, map, split, slice, toUpper, toLower } from 'ramda'
export { toLower, toUpper }

const snakeDelim: string = '_'
const kebabDelim: string = '-'
const camelDelim: Object = /(?=[A-Z])/

export const capitalize: StringTransformer = str =>
  `${toUpper(str.charAt(0))}${slice(1, Infinity, str)}`

export const toCamel: StringTransformerFactory = delim =>
  comp(join(''), map(capitalize), split(delim))

export const toLowerCamel: StringTransformerFactory = delim =>
  comp(toLower, toCamel(delim))

export const toKebab: StringTransformerFactory = delim =>
  comp(join(kebabDelim), split(delim))

export const toLowerKebab: StringTransformerFactory = delim =>
  comp(toLower, toKebab(delim))

export const toUpperKebab: StringTransformerFactory = delim =>
  comp(toUpper, toKebab(delim))

export const toSnake: StringTransformerFactory = delim =>
  comp(join(camelDelim), split(delim))

export const toLowerSnake: StringTransformerFactory = delim =>
  comp(toLower, toSnake(delim))

export const toUpperSnake: StringTransformerFactory = delim =>
  comp(toUpper, toSnake(delim))
//                                                                          !!! Y !!!
export const toScreamingSnake: StringTransformerFactory = toUpperSnake // <==========(:O)

export const snakeToCamel: StringTransformer = toCamel(snakeDelim)

export const kebabToCamel: StringTransformer = toCamel(kebabDelim)

export const snakeToLowerCamel: StringTransformer = toLowerCamel(snakeDelim)

export const kebabToLowerCamel: StringTransformer = toLowerCamel(kebabDelim)

export const snakeToKebab: StringTransformer = toKebab(snakeDelim)

export const camelToKebab: StringTransformer = toKebab(camelDelim)

export const snakeToLowerKebab: StringTransformer = toLowerKebab(snakeDelim)

export const camelToLowerKebab: StringTransformer = toLowerKebab(camelDelim)

export const snakeToUpperKebab: StringTransformer = toUpperKebab(snakeDelim)

export const camelToUpperKebab: StringTransformer = toUpperKebab(camelDelim)

export const camelToSnake: StringTransformer = toSnake(camelDelim)

export const kebabToSnake: StringTransformer = toSnake(kebabDelim)

export const camelToLowerSnake: StringTransformer = toLowerSnake(camelDelim)

export const kebabToLowerSnake: StringTransformer = toLowerSnake(kebabDelim)

export const camelToUpperSnake: StringTransformer = toUpperSnake(camelDelim)

export const kebabToUpperSnake: StringTransformer = toUpperSnake(kebabDelim)
