import { helper } from '@ember/component/helper';

/**
 * Determine if value is NaN.
 *
 * @public
 * @function numberIsNan
 * @param {Object} value The value to compare.
 * @returns {boolean} True if object is NaN.
 */
export function numberIsNan([value]) {
  // nan is the only not equal to itself
  return value !== value;
}

export default helper(numberIsNan);
