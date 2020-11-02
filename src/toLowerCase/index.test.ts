import { strict, string } from 'yargs';
import toLowerCase from './index';

describe('toLowerCase', () => {
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
        expect(toLowerCase(inputValue)).toBe(expectedResult);
      });
    });

    test(`toLowerCase() should be empty string`, () => {
      expect(toLowerCase()).toBe('');
    });
  });
  describe('valid input', () => {
    [
      {
        inputValue: 'Lorem',
        expectedResult: 'lorem',
      },
      {
        inputValue: 'lorem',
        expectedResult: 'lorem',
      },
      {
        inputValue: 'Lorem Ipsum',
        expectedResult: 'lorem ipsum',
      },
      {
        inputValue: 'lorem ipsum',
        expectedResult: 'lorem ipsum',
      },
      {
        inputValue: 'loremIpsum',
        expectedResult: 'loremipsum',
      },
      {
        inputValue: '---loremIpsum',
        expectedResult: '---loremipsum',
      },
      {
        inputValue: '---lorem-Ipsum---',
        expectedResult: '---lorem-ipsum---',
      },
      {
        inputValue: '___lorem__Ipsum___',
        expectedResult: '___lorem__ipsum___',
      },
      {
        inputValue: '---lorem_Ipsum---',
        expectedResult: '---lorem_ipsum---',
      },
    ].forEach(({ inputValue, expectedResult, expectedResultDesc }: { inputValue: any; expectedResult: string; expectedResultDesc?: string }) => {
      test(`toLowerCase(${inputValue}) should be ${expectedResultDesc ? expectedResultDesc : expectedResult}`, () => {
        expect(toLowerCase(inputValue)).toBe(expectedResult);
      });
    });
  });
});
