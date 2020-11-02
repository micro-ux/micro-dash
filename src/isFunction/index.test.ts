import isFunction from './index';

describe('isFunction', () => {
  describe('invalid input', () => {
    [
      {
        inputValue: null,
      },
      {
        inputValue: undefined,
      },
      {
        inputValue: void 0,
      },
      {
        inputValue: '',
      },
    ].forEach(({ inputValue }: { inputValue: any }) => {
      test(`isFunction(${inputValue}) => false`, () => {
        expect(isFunction(inputValue)).toBeFalsy();
      });
    });

    test(`isFunction() => false`, () => {
      expect(isFunction()).toBeFalsy();
    });
  });

  describe('valid input', () => {
    [
      {
        inputValue: () => {},
      },
      {
        inputValue: function () {},
      },
      {
        inputValue: async () => {},
      },
    ].forEach(({ inputValue }: { inputValue: any }) => {
      test(`isFunction(${inputValue}) => true`, () => {
        expect(isFunction(inputValue)).toBeTruthy();
      });
    });
  });
});
