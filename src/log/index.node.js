// logging utilities
// all the functions in here are completely elided unless environments.includes('development')

import { log, info, spy, affirm } from './log'
import { partial } from 'ramda'
export { log, info, spy, affirm }

// Terminal colors
const styles = {
  'bold': ['\x1B[1m', '\x1B[22m'],
  'italic': ['\x1B[3m', '\x1B[23m'],
  'underline': ['\x1B[4m', '\x1B[24m'],
  'inverse': ['\x1B[7m', '\x1B[27m'],
  'strikethrough': ['\x1B[9m', '\x1B[29m'],
  'white': ['\x1B[37m', '\x1B[39m'],
  'gray': ['\x1B[90m', '\x1B[39m'],
  'grey': ['\x1B[90m', '\x1B[39m'],
  'black': ['\x1B[30m', '\x1B[39m'],
  'blue': ['\x1B[34m', '\x1B[39m'],
  'cyan': ['\x1B[36m', '\x1B[39m'],
  'green': ['\x1B[32m', '\x1B[39m'],
  'magenta': ['\x1B[35m', '\x1B[39m'],
  'red': ['\x1B[31m', '\x1B[39m'],
  'yellow': ['\x1B[33m', '\x1B[39m']
}
// maps styles into a set to apply to the console
const styleSets = {
  'none': ['', ''],
  'error': styles.red,
  'warn': styles.yellow.concat(styles.bold)
}

// test to see if we support colors
function canUseColors () {
  return (process && process.stdout.isTTY)
}

// tries to call a console method and apply some color styles to it
// expects the first argument in your log to be a string so that we can make it pretty
function wrapMethodWithStyle (method = 'log', style = 'none', message, ...values) {
  let logger = (console && console[method]) ? console[method] : console.log
  let styled = styleSets[style]
  // only wrap first item if it's a string
  if (typeof message === 'string' && canUseColors()) {
    logger(`${styled[0]}${message}${styled[1]}`, ...values)
  } else {
    logger(`[${method}]`, message, ...values)
  }
}

// console.warn-like log function
// warn : ...any -> null
export const warn = partial(wrapMethodWithStyle, ['warn', 'warn'])

// console.error-like log function
// error : ...any -> null
export const error = partial(wrapMethodWithStyle, ['error', 'error'])

// console.log-like log function where a color and a label can be added before output
// labeled : (color, label) -> newColoredLogger(...any) -> null
export function labeled (color = 'blue', label = 'log') {
  return partial(wrapMethodWithStyle, ['log', `color: ${color};`], label)
}
