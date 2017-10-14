import escapeHTML from '../escapeHTML';

it('escapes ampersands', () => {
  expect(escapeHTML('foo & bar & baz')).toBe('foo &amp; bar &amp; baz');
});

it('escapes less-than signs', () => {
  expect(escapeHTML('a < b < c')).toBe('a &lt; b &lt; c');
});

it('escapes greater-than signs', () => {
  expect(escapeHTML('d > e > f')).toBe('d &gt; e &gt; f');
});

it('escapes double quotes', () => {
  expect(escapeHTML('"eg"')).toBe('&quot;eg&quot;');
});

it('escapes single quotes', () => {
  expect(escapeHTML("it's that's")).toBe('it&#39;s that&#39;s');
});
