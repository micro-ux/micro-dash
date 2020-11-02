import isUndefined from './index';

describe('isUndefined', () => {
  [
    {
      inputValue: undefined,
      expectedResult: true,
    },
    {
      inputValue: null,
      expectedResult: false,
    },
    {
      inputValue: 0,
      expectedResult: false,
    },
    {
      inputValue: '',
      expectedResult: false,
    },
    {
      inputValue: false,
      expectedResult: false,
    },
    {
      inputValue: 'Lorem',
      expectedResult: false,
    },
  ].forEach(({ inputValue, expectedResult }) => {
    test(`isUndefined(${inputValue}) => ${expectedResult}`, () => {
      expect(isUndefined(inputValue)).toBe(expectedResult);
    });
  });

  test(`isUndefined() => true`, () => {
    expect(isUndefined()).toBe(true);
  });
});
