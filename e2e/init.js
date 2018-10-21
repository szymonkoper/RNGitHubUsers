/* eslint-env detox/detox, mocha */
/* eslint func-names: ["error", "never"] */

const detox = require('detox');
const adapter = require('detox/runners/mocha/adapter');
const config = require('../package.json').detox;

before(async () => {
  await detox.init(config);
});

beforeEach(async function () {
  await adapter.beforeEach(this);
});

afterEach(async function () {
  await adapter.afterEach(this);
});

after(async () => {
  await detox.cleanup();
});
