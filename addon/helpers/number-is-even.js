import { helper } from '@ember/component/helper';

/**
 * Determine if number is even.
 *
 * @public
 * @function numberIsEven
 * @param {number} value The number to compare.
 * @returns {boolean} True if number is even.
 */
export function numberIsEven([value]) {
  // simple even check
  return value % 2 === 0;
}

export default helper(numberIsEven);
