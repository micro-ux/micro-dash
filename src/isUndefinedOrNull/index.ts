/**
 * Checks if `value` is `undefined` or `null`.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined` or `null`, else `false`.
 * @example
 *
 * isUndefinedOrNull(void 0);
 * // => true
 *
 * isUndefinedOrNull(null);
 * // => true
 *
 * This is equivalent to `lodash.isNil` method. But changed the method name to bring more clarity.
 */
export default function isUndefinedOrNull(value?: any): boolean {
  return value === undefined || value === null;
}
