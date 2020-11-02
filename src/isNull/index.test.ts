import isNull from './index';

describe('isNull', () => {
  [
    {
      inputValue: null,
      expectedResult: true,
    },
    {
      inputValue: undefined,
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
    test(`isNull(${inputValue}) should be ${expectedResult}`, () => {
      expect(isNull(inputValue)).toBe(expectedResult);
    });
  });

  test(`isNull() should be false`, () => {
    expect(isNull()).toBe(false);
  });
});
