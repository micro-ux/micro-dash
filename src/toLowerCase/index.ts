/**
 * Converts `string` as a whole, to lower case, just like [String#toLowerCase](https://mdn.io/toLowerCase).
 * It does not affect the value of the input string itself.
 *
 * @param {string} string The string to convert.
 * @returns {string} a new value of the `string` converted to lower case
 * @example
 *
 * toLowerCase('--Foo-Bar--');
 * // => '--foo-bar--'
 *
 * toLowerCase('fooBar');
 * // => 'fooBar'
 *
 * toLowerCase('__FOO_BAR__');
 * // => '__foo_bar__'
 *
 * This is equivalent to `_.toLower()` method of lodash
 */
export default function toLowerCase(str: string): string {
  return (str || '').toLowerCase();
}
