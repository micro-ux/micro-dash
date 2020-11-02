/**
 * Converts `string` as a whole, to upper case, just like [String#toUpperCase](https://mdn.io/toUpperCase).
 * It does not affect the value of the input string itself.
 *
 * @param {string} string The string to convert.
 * @returns {string} a new value of the `string` converted to upper case
 * @example
 *
 * toUpperCase('--foo-bar--');
 * // => '--FOO-BAR--'
 *
 * toUpperCase('fooBar');
 * // => 'FOOBAR'
 *
 * toUpperCase('__foo_bar__');
 * // => '__FOO_BAR__'
 *
 * This is equivalent to `_.toUpper()` method of lodash
 */
export default function toUpperCase(str?: string | null): string {
  return (str || '').toUpperCase();
}
