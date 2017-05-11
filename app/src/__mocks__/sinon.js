import sinon from 'sinon';

let sandbox;

beforeEach(() => {
  sandbox = sinon.sandbox.create();
});

afterEach(() => {
  sandbox.restore();
});

global.sinon = {
  spy() {
    return sinon.spy(...arguments);
  },

  stub() {
    return sandbox.stub(...arguments);
  },

  useFakeTimers() {
    return sinon.useFakeTimers(...arguments);
  },
};
