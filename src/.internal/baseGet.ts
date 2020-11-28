import stringToPathArray from './stringToPathArray';
/**
 * The base implementation of `get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
// export function baseGet(object: Object | null | undefined = undefined, path: Array<any> | string | null | undefined = undefined) {
//   path = castPath(path, object);

//   var index = 0,
//     length = path.length;

//   while (object != null && index < length) {
//     object = object[toKey(path[index++])];
//   }
//   return index && index == length ? object : undefined;
// }
export default function baseGet(object: Object | null | undefined = undefined, path: Array<any> | string | null | undefined = undefined) {
  if (object === undefined || object === null) {
    // if the object is null then we return undefined, since we couldn't find the path specificied
    return undefined;
  }
  if (path === undefined || path === null) {
    return undefined;
  }
  const pathArr = Array.isArray(path) ? path : stringToPathArray(path);
  console.log('result pathArr', pathArr);
  return pathArr.reduce((reducedObject, pathItem) => (reducedObject ? reducedObject[pathItem] : undefined), object);
}
