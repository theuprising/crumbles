/**
 * @name math.clamp
 * @desc
 * ```
 * clamp : Number, Number -> Number -> Number
 * ```
 * keep a value within a range by simply constraining
 * it within the range
 *
 * ie when things get too fast they should just stay
 * regular fast
 */
export const clamp = (min, max) => v =>
  Math.min(Math.max(v, min), max)

/**
 * @name math.loop
 * @desc
 * ```
 * loop : Number, Number -> Number -> Number
 * ```
 *  keep a value within a range by looping it to the
 *  other side of the range
 *
 *  ie when things go off the right side of the screen,
 *  they should come back on the left
 */
export const loop = (min, max) => _v => {
  let v = _v

  // if v is less than min, set v = max
  v = v < min
    ? max
    : v

  // if v is greater than max, set v = min
  v = v > max
    ? min
    : v

  return v
}

