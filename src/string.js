// @flow
type Transformer = (value: string) => string
type Unformatter = (from: string) => [string]
type Formatter = (from: [string]) => string

type Format = {
  from: Unformatter,
  to: Formatter
}
type Formats = { [key: string]: Format }

import { compose as comp, join, map, split, head, tail, complement, flip, contains, toUpper, toLower, pipe, when } from 'ramda'
export { toLower, toUpper }

/**
 * @name string.capitalize
 * @desc
 * capitalize a string
 * @example
 * capitalize('hello there') // => 'Hello there'
 */
export const capitalize: Transformer = str =>
  `${toUpper(head(str))}${tail(str)}`

/**
 * @name string.uncapitalize
 * @desc
 * uncapitalize a string
 * @example
 * uncapitalize('Hello There') // => 'hello There'
 */
export const uncapitalize: Transformer = str =>
  `${toLower(head(str))}${tail(str)}`

const delimToFormat = (delim: string): Format => ({
  from: split(delim),
  to: join(delim)
})

/**
 * @name string.wordsNotCapitalizedInTitles
 * @desc
 * an array of the words not capitalized in titles
 *
 * from section 3.49 [here](https://www.gpo.gov/fdsys/pkg/GPO-STYLEMANUAL-2008/html/GPO-STYLEMANUAL-2008-5.htm)
 */
export const wordsNotCapitalizedInTitles = [
  'a', 'an', 'the', 'at', 'by', 'for', 'in', 'of', 'on', 'to', 'up', 'and', 'as', 'but', 'or', 'nor'
]
const shouldBeCapitalizedInTitle = complement(flip(contains)(wordsNotCapitalizedInTitles))

/**
 * @name string.formats
 * @desc
 * a collection of string formats.
 * ```
 * { camel, kebab, snake, space, sentence, title }
 * ```
 */
export const formats = ((): Formats => {
  const camel = {
    from: pipe(split(/(?=[A-Z])/), map(toLower)),
    to: pipe(map(capitalize), join(''))
  }
  const kebab = delimToFormat('-')
  const snake = delimToFormat('_')
  const space = delimToFormat(' ')
  const sentence = {
    from: pipe(uncapitalize, space.from),
    to: pipe(space.to, capitalize)
  }
  const title = {
    from: pipe(
      space.from,
      map(uncapitalize)
    ),
    to: pipe(
      map(uncapitalize),
      map(when(
        shouldBeCapitalizedInTitle,
        capitalize
      )),
      space.to,
      capitalize
    )
  }
  return Object.freeze({camel, kebab, snake, space, sentence, title})
})()

/**
 * @name string.convert
 * @sig (Format, Format) -> string -> string
 * @desc
 * convert a string between two formats
 * @example
 * const camelToSnake = convert(formats.camel, formats.snake)
 * camelToSnake('camelToSnake') // => camel_to_snake
 */
export const convert = (from: Format, to: Format): Transformer => comp(to.to, from.from)

