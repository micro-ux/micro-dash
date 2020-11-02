import poll from './index';

describe('poll', () => {
  describe('invalid input', () => {
    [
      {
        inputValue: null,
      },
      {
        inputValue: undefined,
      },
      {
        inputValue: {},
      },
      {
        inputValue: '',
      },
      {
        inputValue: [1, 2, 3],
      },
    ].forEach(({ inputValue }: { inputValue: any }) => {
      test(`poll(${inputValue}) => throws error`, () => {
        // @ts-ignore
        expect(() => poll(inputValue)).toThrowError();
      });
    });

    test(`poll() => throws error`, () => {
      // @ts-ignore
      expect(() => poll()).toThrowError();
    });
  });
  describe('valid input', () => {
    test('poll(options)', (done) => {
      const pollerOptions = {
        shouldPollingStop: jest.fn().mockReturnValueOnce(false).mockReturnValueOnce(false).mockReturnValue(true),
        onSuccess: jest.fn().mockImplementation(() => {
          expect(pollerOptions.shouldPollingStop).toHaveBeenCalledTimes(3);
          expect(pollerOptions.onSuccess).toHaveBeenCalledTimes(1);
          expect(pollerOptions.onRetryLimitExceeded).not.toHaveBeenCalled();
          done();
        }),
        onRetryLimitExceeded: jest.fn(),
      };
      const pollerHandle = poll(pollerOptions);
      expect(pollerHandle).toBeDefined();
      expect(typeof pollerHandle.stop).toBe('function');
    });
  });
});
