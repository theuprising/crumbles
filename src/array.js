// @flow

/**
 * choose randomly from an array
 * @example
 * const arr = [1, 2]
 * const choice = choose(arr)
 * arr.indexOf(choice) > -1
 */
export const choose = (coll: [any]): any =>
  coll[Math.floor(Math.random() * coll.length)]

