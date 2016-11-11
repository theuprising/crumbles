import { compose as comp, join, map, split, slice, toUpper, toLower } from 'ramda'
export { toLower, toUpper }

const snakeDelim: string = '_'
const kebabDelim: string = '-'
const camelDelim: Object = /(?=[A-Z])/

/**
 * capitalize a string
 */
export const capitalize: StringTransformer = str =>
  `${toUpper(str.charAt(0))}${slice(1, Infinity, str)}`

/**
 * make a function that camelizes on a desired delimiter
 */
export const toCamel: StringTransformerFactory = delim =>
  comp(join(''), map(capitalize), split(delim))

/**
 * make a function that camelizes and lowercases on a desired delimiter
 */
export const toLowerCamel: StringTransformerFactory = delim =>
  comp(toLower, toCamel(delim))

/**
 * make a function that kebabizes on a desired delimiter
 */
export const toKebab: StringTransformerFactory = delim =>
  comp(join(kebabDelim), split(delim))

/**
 * make a function that kebabizes and lowercases on a desired delimiter
 */
export const toLowerKebab: StringTransformerFactory = delim =>
  comp(toLower, toKebab(delim))

/**
 * make a function that kebabizes and uppercases on a desired delimiter
 */
export const toUpperKebab: StringTransformerFactory = delim =>
  comp(toUpper, toKebab(delim))

/**
 * make a function that snakeizes on a desired delimiter
 */
export const toSnake: StringTransformerFactory = delim =>
  comp(join(camelDelim), split(delim))

/**
 * make a function that snakeizes and lowercases on a desired delimiter
 */
export const toLowerSnake: StringTransformerFactory = delim =>
  comp(toLower, toSnake(delim))

/**
 * make a function that snakizes and uppercases on a desired delimiter
 */
export const toUpperSnake: StringTransformerFactory = delim =>
  comp(toUpper, toSnake(delim))
//                                                                          !!! Y !!!
export const toScreamingSnake: StringTransformerFactory = toUpperSnake // <==========(:O)

/**
 * transform a string from snakecase to camelcase
 */
export const snakeToCamel: StringTransformer = toCamel(snakeDelim)

/**
 * transform a string from kebabcase to camelcase
 */
export const kebabToCamel: StringTransformer = toCamel(kebabDelim)

/**
 * transform a string from snakecase to lowercase camelcase
 */
export const snakeToLowerCamel: StringTransformer = toLowerCamel(snakeDelim)

/**
 * transform a string from kebabcase to lowercase camelcase
 */
export const kebabToLowerCamel: StringTransformer = toLowerCamel(kebabDelim)

/**
 * transform a string from snakecase to kebabcase
 */
export const snakeToKebab: StringTransformer = toKebab(snakeDelim)

/**
 * transform a string from camelcase to kebabcase
 */
export const camelToKebab: StringTransformer = toKebab(camelDelim)

/**
 * transform a string from snakecase to lowercase kebabcase
 */
export const snakeToLowerKebab: StringTransformer = toLowerKebab(snakeDelim)

/**
 * transform a string from camelcase to lowercase kebabcase
 */
export const camelToLowerKebab: StringTransformer = toLowerKebab(camelDelim)

/**
 * transform a string from snakecase to uppercase kebabcase
 */
export const snakeToUpperKebab: StringTransformer = toUpperKebab(snakeDelim)

/**
 * transform a string from camelcase to uppercase kebabcase
 */
export const camelToUpperKebab: StringTransformer = toUpperKebab(camelDelim)

/**
 * transform a string from camelcase to snakeCase
 */
export const camelToSnake: StringTransformer = toSnake(camelDelim)

/**
 * transform a string from kebabcase to snakeCase
 */
export const kebabToSnake: StringTransformer = toSnake(kebabDelim)

/**
 * transform a string from camelcase to lowercase snakeCase
 */
export const camelToLowerSnake: StringTransformer = toLowerSnake(camelDelim)

/**
 * transform a string from kebabcase to lowercase snakeCase
 */
export const kebabToLowerSnake: StringTransformer = toLowerSnake(kebabDelim)

/**
 * transform a string from camelcase to uppercase snakeCase
 */
export const camelToUpperSnake: StringTransformer = toUpperSnake(camelDelim)

/**
 * transform a string from kebabcase to uppercase snakeCase
 */
export const kebabToUpperSnake: StringTransformer = toUpperSnake(kebabDelim)
