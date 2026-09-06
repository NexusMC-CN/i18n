import type { TranslationKey } from './index.js';

const enUS = {
  'error.requestFailed': 'Request failed',
  'error.internalServer': 'Internal server error',
  'error.payloadTooLarge': 'The request body is too large. Reduce pasted images or publish in smaller parts.',
  'error.maintenance': 'The site is under maintenance. Please try again later.',
  'common.ok': 'OK',
  'common.language': 'Language',
} satisfies Record<TranslationKey, string>;

export default enUS;
