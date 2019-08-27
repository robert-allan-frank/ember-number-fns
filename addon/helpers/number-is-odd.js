import { helper } from '@ember/component/helper';

/**
 * Determine if number is odd.
 *
 * @public
 * @function numberIsOdd
 * @param {number} The number to compare.
 * @returns {boolean} True if number is odd.
 */
export function numberIsOdd([value]) {
  // simple odd (not even) check
  return value % 2 !== 0;
}

export default helper(numberIsOdd);
