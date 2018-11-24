const sinon = require('sinon');

let sandbox;
let clock;

beforeEach(() => {
  sandbox = sinon.createSandbox();
});

afterEach(() => {
  sandbox.restore();
  if (clock) {
    clock.restore();
  }
  clock = null;
});

global.sinon = {
  mock(...args) {
    return sandbox.mock(...args);
  },

  spy(...args) {
    return sandbox.spy(...args);
  },

  stub(...args) {
    return sandbox.stub(...args);
  },

  useFakeTimers(...args) {
    if (clock) {
      clock.restore();
    }
    clock = sinon.useFakeTimers(...args);
    return clock;
  },
};
