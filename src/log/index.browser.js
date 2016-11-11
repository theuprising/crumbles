// logging utilities
// all the functions in here are completely elided unless environments.includes('development')

export { log, info, spy, affirm } from './log'

import { partial } from 'ramda'

// browser colors
const styles = {
  'bold': 'text-weight: bold;',
  'italic': 'font-style: italic;',
  'underline': 'text-decoration: underline;',
  'inverse': 'color: white; background-color: black;',
  'strikethrough': 'text-decoration: line-through;',
  'white': 'color: white;',
  'gray': 'color: gray;',
  'grey': 'color: grey;',
  'black': 'color: black;',
  'blue': 'color: blue;',
  'cyan': 'color: cyan;',
  'green': 'color: green;',
  'magenta': 'color: magenta;',
  'red': 'color: red;',
  'yellow': 'color: yellow;'
}
// maps styles into a set to apply to the console
const styleSets = {
  'none': '',
  'error': styles.red,
  'warn': [styles.yellow, styles.bold].join(' ')
}

// test to see if we support colors
function canUseColors () {
  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && 'WebkitAppearance' in document.documentElement.style) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (window.console && (console.firebug || (console.exception && console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31)
}

// tries to call a console method and apply some color styles to it
// expects the first argument in your log to be a string so that we can make it pretty
function wrapMethodWithStyle (method = 'log', style = 'none', message, ...values) {
  let logger = (console && console[method]) ? console[method] : console.log
  let styled = styleSets[style]
  // only wrap first item if it's a string
  if (typeof message === 'string' && canUseColors()) {
    logger('%c%s', styled, message, ...values)
  } else {
    logger(`[${method}]`, message, ...values)
  }
}

/**
 * console.warn-like log function `...any -> null`
 */
export const warn = partial(wrapMethodWithStyle, ['warn', 'warn'])

/**
 * console.error-like log function `...any -> null`
 */
export const error = partial(wrapMethodWithStyle, ['error', 'error'])

/**
 * console.log-like log function where a color and a label can be added before output `(color, label) -> newColoredLogger(...any) -> null`
 */
export function labeled (color = 'blue', label = 'log') {
  return partial(wrapMethodWithStyle, ['log', `color: ${color};`], label)
}
