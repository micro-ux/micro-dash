import toLowerCase from './index';

describe('toLowerCase', () => {
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
      expectedResult: 'lorem',
    },
    {
      inputString: 'lorem',
      expectedResult: 'lorem',
    },
    {
      inputString: 'Lorem Ipsum',
      expectedResult: 'lorem ipsum',
    },
    {
      inputString: 'lorem ipsum',
      expectedResult: 'lorem ipsum',
    },
    {
      inputString: 'loremIpsum',
      expectedResult: 'loremipsum',
    },
    {
      inputString: '---loremIpsum',
      expectedResult: '---loremipsum',
    },
    {
      inputString: '---lorem-Ipsum---',
      expectedResult: '---lorem-ipsum---',
    },
    {
      inputString: '___lorem__Ipsum___',
      expectedResult: '___lorem__ipsum___',
    },
    {
      inputString: '---lorem_Ipsum---',
      expectedResult: '---lorem_ipsum---',
    },
  ].forEach(({ inputString, expectedResult }) => {
    test(`toLowerCase(${inputString}) should be ${expectedResult}`, () => {
      expect(toLowerCase(inputString)).toBe(expectedResult);
    });
  });
});
