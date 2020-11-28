import baseGet from '../.internal/baseGet';

// Ref: https://gist.github.com/jeneg/9767afdcca45601ea44930ea03e0febf

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @param {boolean} useDefaultValueIfNull uses `defaultValue` even for `null` resolved values only if this flag is set. By default this flag is set to false in order to match with behavior of lodash.get method.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * get(object, 'a[0].b.c');
 * // => 3
 *
 * get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * get(object, 'a.b.c', 'default');
 * // => 'default'
 */
export default function get(
  object: Object | null | undefined = undefined,
  path: Array<any> | string | null | undefined = undefined,
  defaultValue: any = undefined,
  useDefaultValueIfNull: boolean = false,
) {
  const result = baseGet(object, path);
  console.log('result baseGet', result);
  // return result === undefined || result === null ? defaultValue : result;

  // const result = object == null ? undefined : baseGet(object, path);
  if (useDefaultValueIfNull) {
    return result === undefined || result === null ? defaultValue : result;
  }
  return result === undefined ? defaultValue : result;
}
