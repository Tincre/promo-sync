import { generateEventIdClientSide } from '../src/eventId';
import crypto from 'crypto';

beforeAll(() => {
  /* @ts-ignore */
  global.window = jest.fn();

  window['google_tag_manager'] = {
    'GTM-57QS65R': {
      dataLayer: {
        /* @ts-ignore */
        get: (gtm: string) => {
          return {
            start: 'testStart',
            uniqueEventId: 'testUniqueEventId',
          };
        },
      },
    },
  };
  window['dataLayer'] = [];
});

describe('generateEventIdClientSide', () => {
  it('returns a string', () => {
    expect(generateEventIdClientSide()).toBe('testStart.testUniqueEventId');
  });
});

describe('generateEventIdClientSide', () => {
  it('returns crypto id implementation when google_tag_manager is not present on window', () => {
    /* @ts-ignore */
    global.window = jest.fn();
    window['google_tag_manager'] = undefined;
    let testUuid = 'randomUUIDvalue';
    /* @ts-ignore */
    window['crypto'] = {
      /* @ts-ignore */
      randomUUID: () => testUuid,
      /* @ts-ignore */
      getRandomValues: (arr: any) => crypto.randomBytes(arr.length),
    };
    expect(generateEventIdClientSide()).toBe(testUuid);
  });
});

/* This needs to be last in the file due to its mangling of the global.window
 * property. */
describe('generateEventIdClientSide', () => {
  it('returns undefined when google_tag_manager is not present on window', () => {
    /* @ts-ignore */
    global.window = undefined;

    expect(generateEventIdClientSide()).toBe(undefined);
  });
});
