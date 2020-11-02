/**
 * Checks if `value` is `undefined`.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * isUndefined(void 0);
 * // => true
 *
 * isUndefined(null);
 * // => false
 *
 * This is equivalent to `lodash.isUndefined` method
 */
export default function isUndefined(value?: any): boolean {
  return value === undefined;
}
