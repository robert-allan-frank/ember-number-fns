import { helper } from '@ember/component/helper';

/**
 * Convert a number to a fixed decimal string.
 *
 * @public
 * @function numberToFixed
 * @param {number} number The number to fix.
 * @param {number} decimals The number of decinals.
 * @returns {string} A string formatted value.
 */
export function numberToFixed([number, decimals]) {
  return Number(number).toFixed(decimals);
}

export default helper(numberToFixed);
