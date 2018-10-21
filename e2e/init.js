/* eslint-env detox/detox, mocha */
/* eslint func-names: ["error", "never"] */

import { init, cleanup } from 'detox';
import { beforeEach as _beforeEach, afterEach as _afterEach } from 'detox/runners/mocha/adapter';
import { detox as config } from '../package.json';

before(async () => {
  await init(config);
});

beforeEach(async function () {
  await _beforeEach(this);
});

afterEach(async function () {
  await _afterEach(this);
});

after(async () => {
  await cleanup();
});
