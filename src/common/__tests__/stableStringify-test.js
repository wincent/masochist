import stableStringify from '../stableStringify';

it('stringifies a string', () => {
  expect(stableStringify('foo')).toBe('"foo"');
});

it('stringifies a number', () => {
  expect(stableStringify(10)).toBe('10');
});

it('stringifies null', () => {
  expect(stableStringify(null)).toBe('null');
});

it('stringifies an empty array', () => {
  expect(stableStringify([])).toBe('[]');
});

it('stringifies an empty object', () => {
  expect(stableStringify({})).toBe('{}');
});

it('stringifies an array with items', () => {
  expect(stableStringify([1, 'foo', [2, {nested: null}]])).toBe(
    '[1,"foo",[2,{"nested":null}]]',
  );
});

it('stringifies an object with entries', () => {
  // Note sorted ordering of keys.
  expect(stableStringify({c: 3, a: 1, d: 4, b: 2})).toBe(
    '{"a":1,"b":2,"c":3,"d":4}',
  );
});

it('stringifies an "exotic" object (eg. String)', () => {
  expect(stableStringify(new String('foo'))).toBe('"foo"');
});

it('stringifies an "exotic" object (eg. Date)', () => {
  // Using Date.UTC to get consistent tests irrespective of the local time zone.
  // The month param is 0-indexed but the day param is not...
  expect(stableStringify(new Date(Date.UTC(2017, 0, 1))))
    .toBe('"2017-01-01T00:00:00.000Z"');
});

it('throws given a circular references', () => {
  const circular = {a: {b: {c: {d: {}}}}};
  circular.a.b.c.d.e = circular;
  expect(() => stableStringify(circular)).toThrow(TypeError);
});
