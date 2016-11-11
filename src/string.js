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
 * @function string.capitalize
 * capitalize a string
 */
export const capitalize: Transformer = str =>
  `${toUpper(head(str))}${tail(str)}`

/**
 * @function string.uncapitalize
 * uncapitalize a string
 */
export const uncapitalize: Transformer = str =>
  `${toLower(head(str))}${tail(str)}`

const delimToFormat = (delim: string): Format => ({
  from: split(delim),
  to: join(delim)
})

// https://www.gpo.gov/fdsys/pkg/GPO-STYLEMANUAL-2008/html/GPO-STYLEMANUAL-2008-5.htm
// section 3.49.
/**
 * @const wordsNotCapitalizedInTitles
 * an array of the words not capitalized in titles
 */
export const wordsNotCapitalizedInTitles = [
  'a', 'an', 'the', 'at', 'by', 'for', 'in', 'of', 'on', 'to', 'up', 'and', 'as', 'but', 'or', 'nor'
]
const shouldBeCapitalizedInTitle = complement(flip(contains)(wordsNotCapitalizedInTitles))

/**
 * @const string.formats
 * a collection of string formats.
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
 * @function string.convert
 * convert a string between two formats `(Format, Format) -> string -> string`
 */
export const convert = (from: Format, to: Format): Transformer => comp(to.to, from.from)

