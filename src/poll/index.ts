import isUndefinedOrNull from '../isUndefinedOrNull';
import isFunction from '../isFunction';
const DEFAULT_INTERVAL_IN_MILLIS = 100;
const MAX_INTERVAL_IN_MILLIS = 1 * 60 * 60 * 1000; // 1 hour

const DEFAULT_MAX_RETRIES = 10;

export type PollerCallbackParams = any | null | undefined;

export interface PollerOptions {
  shouldPollingStop: (callbackParams: PollerCallbackParams) => boolean;
  onSuccess: (callbackParams: PollerCallbackParams) => any;
  onRetryLimitExceeded?: (callbackParams: PollerCallbackParams) => any;
  intervalInMillis?: number | null | undefined;
  maxRetries?: number | null | undefined;
  callbackParams?: PollerCallbackParams;
}

export interface PollerHandle {
  stop: () => void;
}

/**
 * Keeps polling until `shouldPollingStop` returns true or the `maxRetries` exceed & calls `onSuccess` or `onRetryLimitExceeded` callback functions accordingly.
 *
 * @param {Object} options
 *
 * @example
 * poll({
 *   shouldPollingStop: function(callbackParams) {
 *     // Note: until this condition is true, it keeps polling (unless max retry limit reached)
 *     return (result == "SUCCESS");
 *   },
 *   onSuccess: function(callbackParams) {
 *     // once the condition is met, this is what will get executed
 *     console.log('Finally result is SUCCESS');
 *   },
 *   onRetryLimitExceeded: function(callbackParams) {
 *     console.log('Maximum retry limit reached');
 *   },
 *   intervalInMillis: 100, // (optional) - default value 100ms
 *   maxRetries: 10, // (optional) - default value 10 retries
 *   callbackParams: {} // this will be passed to callback functions `shouldPollingStop`, `onSuccess` & `onRetryLimitExceeded`
 * });
 */
export default function poll(options: PollerOptions): PollerHandle {
  if (typeof options === 'undefined' || options === null) {
    throw new Error('poller options cannot be empty or null');
  }
  if (!options.hasOwnProperty('shouldPollingStop') || !options.hasOwnProperty('onSuccess')! || !isFunction(options.shouldPollingStop) || !isFunction(options.onSuccess)) {
    throw new Error('poller options should contain shouldPollingStop and onSuccess callback functions');
  }
  const intervalInMillis = options.intervalInMillis === undefined || options.intervalInMillis === null ? DEFAULT_INTERVAL_IN_MILLIS : options.intervalInMillis;
  if (intervalInMillis > MAX_INTERVAL_IN_MILLIS) {
    throw new Error(`intervalInMillis cannot be more than ${MAX_INTERVAL_IN_MILLIS}`);
  }
  const maxRetries = options.maxRetries === undefined || options.maxRetries === null ? DEFAULT_MAX_RETRIES : options.maxRetries;
  const callbackParams = options.callbackParams;
  return (function () {
    let timerHandle: any = undefined;
    let tries = 1;
    const doPoll = function doPoll() {
      // If the condition is met, we're done!
      if (options.shouldPollingStop(callbackParams)) {
        tries = 1;
        timerHandle = undefined;
        options.onSuccess(callbackParams);
      } else if (tries <= maxRetries) {
        // If the condition isn't met but the number of retries hasn't exceeded, go again
        tries = tries + 1;
        timerHandle = setTimeout(doPoll, intervalInMillis);
      } else {
        // Didn't match and retry limit exceeded, reject!
        tries = 1;
        timerHandle = undefined;
        options.onRetryLimitExceeded && isFunction(options.onRetryLimitExceeded) && options.onRetryLimitExceeded(callbackParams);
      }
    };
    doPoll();
    return {
      stop: function stopPolling() {
        if (timerHandle) {
          clearTimeout(timerHandle);
          tries = 1;
          timerHandle = undefined;
        }
      },
    };
  })();
}
