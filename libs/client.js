import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'jamstack-test-kato',
  apiKey: process.env.API_KEY,
});