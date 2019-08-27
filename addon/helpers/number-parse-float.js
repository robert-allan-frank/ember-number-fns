import { helper } from '@ember/component/helper';

/**
 * Parse a string as a float.
 *
 * @public
 * @function numberParseFloat
 * @param {string} value The value to parse.
 * @returns {number} A float value.
 */
export function numberParseFloat([value]) {
  return parseFloat(value);
}

export default helper(numberParseFloat);
