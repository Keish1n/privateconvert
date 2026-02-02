import { defineConfig } from 'astro/config';

// Netlify provides these env vars during builds.
// URL = production site URL, DEPLOY_PRIME_URL = deploy-preview URL.
const site =
  process.env.URL ||
  process.env.DEPLOY_PRIME_URL ||
  'https://privateconvert.net';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
});
