/**
 * Checks if `value` is `null`.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
 * @example
 *
 * isNull(null);
 * // => true
 *
 * isNull(void 0);
 * // => false
 *
 * This is equivalent to `lodash.isNull` method
 */
export default function isNull(value?: any): boolean {
  return value === null;
}
