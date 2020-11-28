/**
 * parseFloatToPrecision
 *
 * @param {*} value The string to convert.
 * @returns {number} float
 * @example
 */
export default function parseFloatToPrecision(value: any, precision: any): number {
  return parseFloat(parseFloat(value).toFixed(precision));
}
