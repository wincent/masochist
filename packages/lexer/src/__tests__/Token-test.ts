import Token from '../Token';

describe('Token', () => {
  describe('contents', () => {
    it('is a string slice', () => {
      const token = new Token('SAMPLE', 3, 6, 'foobarbaz');
      expect(token.contents).toBe('bar');
    });

    it('is computed lazily', () => {
      const token = new Token('SAMPLE', 3, 6, 'foobarbaz');
      const prototype = Object.getPrototypeOf(token);
      let descriptor = Object.getOwnPropertyDescriptor(prototype, 'contents');
      expect(typeof descriptor?.get).toBe('function');
      descriptor = Reflect.getOwnPropertyDescriptor(token, 'contents');
      expect(typeof descriptor?.get).toBe('undefined');

      // After initial access, it is memoized.
      expect(token.contents).toBe('bar');
      descriptor = Reflect.getOwnPropertyDescriptor(token, 'contents');
      expect(descriptor?.value).toBe('bar');
    });
  });
});
