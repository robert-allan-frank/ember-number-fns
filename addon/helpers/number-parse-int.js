import { helper } from '@ember/component/helper';

/**
 * Parse a string as an int.
 *
 * @public
 * @function numberParseInt
 * @param {string} value The value to parse.
 * @param {number} base The numeric base.
 * @returns {number} An int value.
 */
export function numberParseInt([value, base = 10]) {
  return parseInt(value, base);
}

export default helper(numberParseInt);
