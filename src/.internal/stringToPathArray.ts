const charCodeOfDot = '.'.charCodeAt(0);
const reEscapeChar = /\\(\\)?/g;
const rePropName = RegExp(
  // Match anything that isn't a dot or bracket.
  '[^.[\\]]+' +
    '|' +
    // Or match property names within brackets.
    '\\[(?:' +
    // Match a non-string expression.
    '([^"\'][^[]*)' +
    '|' +
    // Or match strings (supports escaping characters).
    '(["\'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2' +
    ')\\]' +
    '|' +
    // Or match "" as the space between consecutive dots or empty brackets.
    '(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))',
  'g',
);

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
export default function stringToPathArray(string: string): Array<any> {
  const result = [];
  if (string.charCodeAt(0) === charCodeOfDot) {
    result.push('');
  }
  string.replace(rePropName, function replacer(matchedSubString: string, expression: string, quote: string, subString: string) {
    let key = matchedSubString;
    if (quote) {
      key = subString.replace(reEscapeChar, '$1');
    } else if (expression) {
      key = expression.trim();
    }
    result.push(key);
    return subString; // this has no much significance since we are not using the string.replace() result
  });
  return result;
}
