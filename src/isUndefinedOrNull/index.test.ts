import isUndefinedOrNull from './index';

describe('isUndefinedOrNull', () => {
  [
    {
      inputValue: undefined,
      expectedResult: true,
    },
    {
      inputValue: null,
      expectedResult: true,
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
    test(`isUndefinedOrNull(${inputValue}) should be ${expectedResult}`, () => {
      expect(isUndefinedOrNull(inputValue)).toBe(expectedResult);
    });
  });

  test(`isUndefinedOrNull() should be true`, () => {
    expect(isUndefinedOrNull()).toBe(true);
  });
});
