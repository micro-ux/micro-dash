import get from './index';

describe('get', () => {
  // describe('no defaultValue', () => {
  //   [
  //     {
  //       inputObject: null,
  //       expectedResult: undefined,
  //     },
  //     {
  //       inputObject: undefined,
  //       expectedResult: undefined,
  //     },
  //     {
  //       inputObject: false,
  //       expectedResult: undefined,
  //     },
  //   ].forEach(({ inputObject, expectedResult }) => {
  //     test(`get(${inputObject}) should be ${expectedResult}`, () => {
  //       expect(get(inputObject, '')).toBe(expectedResult);
  //     });
  //   });
  // });

  test('testtt', () => {
    const ob = { a: { '-1.23': { '["b"]': { c: { "['d']": { '\ne\n': { f: { g: 8 } } } } } } } };
    const pStr = 'a[-1.23]["[\\"b\\"]"].c[\'[\\\'d\\\']\'][\ne\n][f].g';
    expect(get(ob, pStr, 'defaultVall')).toBe('defaultVall');
  });
});
