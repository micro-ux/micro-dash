import toUpperCase from './index';

describe('toUpperCase', () => {
  [
    {
      inputString: null,
      expectedResult: '',
    },
    {
      inputString: undefined,
      expectedResult: '',
    },
    {
      inputString: void 0,
      expectedResult: '',
    },
    {
      inputString: '',
      expectedResult: '',
    },
    {
      inputString: 'Lorem',
      expectedResult: 'LOREM',
    },
    {
      inputString: 'lorem',
      expectedResult: 'LOREM',
    },
    {
      inputString: 'Lorem Ipsum',
      expectedResult: 'LOREM IPSUM',
    },
    {
      inputString: 'lorem ipsum',
      expectedResult: 'LOREM IPSUM',
    },
    {
      inputString: 'loremIpsum',
      expectedResult: 'LOREMIPSUM',
    },
    {
      inputString: '---loremIpsum',
      expectedResult: '---LOREMIPSUM',
    },
    {
      inputString: '---lorem-Ipsum---',
      expectedResult: '---LOREM-IPSUM---',
    },
    {
      inputString: '___lorem__Ipsum___',
      expectedResult: '___LOREM__IPSUM___',
    },
    {
      inputString: '---lorem_Ipsum---',
      expectedResult: '---LOREM_IPSUM---',
    },
  ].forEach(({ inputString, expectedResult }) => {
    test(`toUpperCase(${inputString}) should be ${expectedResult}`, () => {
      expect(toUpperCase(inputString)).toBe(expectedResult);
    });
  });
});
