import {describe, expect, it} from 'bun:test';

import Loader from '../Loader';

describe('Loader', () => {
  describe('load()', () => {
    it('loads single values', async () => {
      const loader = new Loader(async (keys) => {
        return keys.map((key) => key.toUpperCase());
      });
      let value = await loader.load('foo');
      expect(value).toBe('FOO');
      value = await loader.load('bar');
      expect(value).toBe('BAR');
    });

    it('caches values', async () => {
      const counts: {[key: string]: number} = {};
      const loader = new Loader(async (keys) => {
        for (const key of keys) {
          counts[key] = (counts[key] || 0) + 1;
        }
        return keys.map((key) => key);
      });
      await loader.load('foo');
      expect(counts['foo']).toBe(1);
      await loader.load('foo');
      expect(counts['foo']).toBe(1);
      await loader.load('bar');
      expect(counts['bar']).toBe(1);
    });

    it('does not batch across event loop iterations', async () => {
      let count = 0;
      const loader = new Loader(async (keys) => {
        count++;
        return keys.map((key) => key.toUpperCase());
      });

      // Trigger several calls before returning control to the event loop.
      expect(count).toBe(0);
      loader.load('foo');
      loader.load('bar');
      loader.load('baz');
      expect(count).toBe(0);

      // Let the event loop run.
      await new Promise((resolve) => setTimeout(resolve, 0));
      expect(count).toBe(1);

      // Trigger some more calls.
      loader.load('qux');
      loader.load('quux');
      loader.load('foobar');
      expect(count).toBe(1);

      // Let the event loop run again.
      await new Promise((resolve) => setTimeout(resolve, 0));
      expect(count).toBe(2);
    });

    it('may return an error', async () => {
      const loader = new Loader<string>(async (keys) => {
        return keys.map((_key) => new Error('Some error'));
      });
      const value = await loader.load('foo');
      expect(value).toBeInstanceOf(Error);
      expect(value.toString()).toMatch('Some error');
    });

    it('caches errors', async () => {
      const counts: {[key: string]: number} = {};
      const loader = new Loader(async (keys) => {
        for (const key of keys) {
          counts[key] = (counts[key] || 0) + 1;
        }
        return keys.map((_key) => new Error('Some error'));
      });
      await loader.load('foo');
      expect(counts['foo']).toBe(1);
      await loader.load('foo');
      expect(counts['foo']).toBe(1);
    });
  });

  describe('loadMany()', () => {
    it('loads several values in a single call', async () => {
      const loader = new Loader(async (keys) => {
        return keys.map((key) => key.toUpperCase());
      });
      const values = await loader.loadMany(['foo', 'bar', 'baz', 'qux']);
      expect(values).toEqual(['FOO', 'BAR', 'BAZ', 'QUX']);
    });

    it('may return an error', async () => {
      const loader = new Loader(async (keys) => {
        return keys.map((key) => {
          if (key.startsWith('b')) {
            return new Error('Invalid prefix "b"');
          } else {
            return key.toUpperCase();
          }
        });
      });
      const value = await loader.loadMany(['foo', 'bar', 'baz', 'qux']);
      expect(value[0]).toBe('FOO');
      expect(value[1]).toBeInstanceOf(Error);
      expect(value[1].toString()).toMatch('Invalid prefix'),
        expect(value[2]).toBeInstanceOf(Error);
      expect(value[2].toString()).toMatch('Invalid prefix'),
        expect(value[3]).toBe('QUX');
    });
  });
});
