/**
 * Checks if `value` is classified as a `Function` object.
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * isFunction(() => {}));
 * // => true
 *
 * isFunction(/abc/);
 * // => false
 *
 * This is equivalent to `lodash.isFunction` method, with much lgithweight implementation
 *
 * TODO: Need to verify with different scenarios
 */
export default function isFunction(value?: any): boolean {
  return typeof value === 'function';
}
