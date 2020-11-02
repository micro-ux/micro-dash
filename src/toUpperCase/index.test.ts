import toUpperCase from './index';

describe('toUpperCase', () => {
  describe('invalid input', () => {
    [
      {
        inputValue: null,
        expectedResult: '',
        expectedResultDesc: 'empty string',
      },
      {
        inputValue: undefined,
        expectedResult: '',
        expectedResultDesc: 'empty string',
      },
      {
        inputValue: void 0,
        expectedResult: '',
        expectedResultDesc: 'empty string',
      },
      {
        inputValue: '',
        expectedResult: '',
        expectedResultDesc: 'empty string',
      },
    ].forEach(({ inputValue, expectedResult, expectedResultDesc }: { inputValue: any; expectedResult: string; expectedResultDesc?: string }) => {
      test(`toLowerCase(${inputValue}) should be ${expectedResultDesc ? expectedResultDesc : expectedResult}`, () => {
        expect(toUpperCase(inputValue)).toBe(expectedResult);
      });
    });

    test(`toUpperCase() should be empty string`, () => {
      expect(toUpperCase()).toBe('');
    });
  });
  describe('valid input', () => {
    [
      {
        inputValue: 'Lorem',
        expectedResult: 'LOREM',
      },
      {
        inputValue: 'lorem',
        expectedResult: 'LOREM',
      },
      {
        inputValue: 'Lorem Ipsum',
        expectedResult: 'LOREM IPSUM',
      },
      {
        inputValue: 'lorem ipsum',
        expectedResult: 'LOREM IPSUM',
      },
      {
        inputValue: 'loremIpsum',
        expectedResult: 'LOREMIPSUM',
      },
      {
        inputValue: '---loremIpsum',
        expectedResult: '---LOREMIPSUM',
      },
      {
        inputValue: '---lorem-Ipsum---',
        expectedResult: '---LOREM-IPSUM---',
      },
      {
        inputValue: '___lorem__Ipsum___',
        expectedResult: '___LOREM__IPSUM___',
      },
      {
        inputValue: '---lorem_Ipsum---',
        expectedResult: '---LOREM_IPSUM---',
      },
    ].forEach(({ inputValue, expectedResult, expectedResultDesc }: { inputValue: any; expectedResult: string; expectedResultDesc?: string }) => {
      test(`toLowerCase(${inputValue}) should be ${expectedResultDesc ? expectedResultDesc : expectedResult}`, () => {
        expect(toUpperCase(inputValue)).toBe(expectedResult);
      });
    });
  });
});
