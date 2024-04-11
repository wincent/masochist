import {describe, expect, it} from 'bun:test';

import RandomAccessQueue from '../RandomAccessQueue';

describe('RandomAccessQueue', () => {
  describe('constructor()', () => {
    it('optionally accepts an iterable argument', () => {
      const queue = new RandomAccessQueue(['foo', 'bar', 'baz']);

      // It gets set up as expected.
      expect(queue.length).toBe(3);
      expect(queue.empty).toBe(false);

      // It can be emptied.
      expect(queue.dequeue()).toBe('foo');
      expect(queue.length).toBe(2);
      expect(queue.empty).toBe(false);
      expect(queue.dequeue()).toBe('bar');
      expect(queue.length).toBe(1);
      expect(queue.empty).toBe(false);
      expect(queue.dequeue()).toBe('baz');
      expect(queue.length).toBe(0);
      expect(queue.empty).toBe(true);
      expect(queue.dequeue()).toBe(null);
    });

    it('can be constructed without an iterable', () => {
      const queue = new RandomAccessQueue<string>();

      // It is initially empty.
      expect(queue.length).toBe(0);
      expect(queue.empty).toBe(true);
      expect(queue.dequeue()).toBe(null);
      expect(queue.eject('bar')).toBe(false);

      // It can be filled.
      queue.enqueue('foo');
      queue.enqueue('bar');
      queue.enqueue('baz');
      expect(queue.length).toBe(3);
      expect(queue.empty).toBe(false);

      // It can be emptied.
      expect(queue.eject('bar')).toBe(true);
      expect(queue.length).toBe(2);
      expect(queue.empty).toBe(false);
      expect(queue.dequeue()).toBe('foo');
      expect(queue.length).toBe(1);
      expect(queue.empty).toBe(false);
      expect(queue.dequeue()).toBe('baz');
      expect(queue.length).toBe(0);
      expect(queue.empty).toBe(true);
      expect(queue.dequeue()).toBe(null);
    });
  });

  describe('eject()', () => {
    it('ejects from the head of the queue', () => {
      const queue = new RandomAccessQueue(['foo', 'bar', 'baz', 'qux']);

      expect(queue.eject('foo')).toBe(true);
      expect(queue.length).toBe(3);
      expect(queue.empty).toBe(false);
      expect(queue.dequeue()).toBe('bar');
      expect(queue.length).toBe(2);
      expect(queue.empty).toBe(false);
      expect(queue.dequeue()).toBe('baz');
      expect(queue.length).toBe(1);
      expect(queue.empty).toBe(false);
      expect(queue.dequeue()).toBe('qux');
      expect(queue.length).toBe(0);
      expect(queue.empty).toBe(true);
      expect(queue.dequeue()).toBe(null);
    });

    it('ejects from the tail of the queue', () => {
      const queue = new RandomAccessQueue(['foo', 'bar', 'baz', 'qux']);

      expect(queue.eject('qux')).toBe(true);
      expect(queue.length).toBe(3);
      expect(queue.empty).toBe(false);
      expect(queue.dequeue()).toBe('foo');
      expect(queue.length).toBe(2);
      expect(queue.empty).toBe(false);
      expect(queue.dequeue()).toBe('bar');
      expect(queue.length).toBe(1);
      expect(queue.empty).toBe(false);
      expect(queue.dequeue()).toBe('baz');
      expect(queue.length).toBe(0);
      expect(queue.empty).toBe(true);
      expect(queue.dequeue()).toBe(null);
    });

    it('ejects the sole item in the queue', () => {
      const queue = new RandomAccessQueue(['foo']);

      expect(queue.eject('foo')).toBe(true);
      expect(queue.length).toBe(0);
      expect(queue.empty).toBe(true);
      expect(queue.dequeue()).toBe(null);
    });

    it('ejects the same item only once when called repeatedly', () => {
      const queue = new RandomAccessQueue(['foo', 'bar', 'baz', 'qux']);

      expect(queue.length).toBe(4);
      expect(queue.eject('baz')).toBe(true);
      expect(queue.length).toBe(3);
      expect(queue.eject('baz')).toBe(false);
      expect(queue.length).toBe(3);

      // Ordering is correctly preserved after `eject()`.
      expect(queue.dequeue()).toBe('foo');
      expect(queue.dequeue()).toBe('bar');
      expect(queue.dequeue()).toBe('qux');
      expect(queue.dequeue()).toBe(null);
    });
  });
});
