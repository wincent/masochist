import Queue from '../Queue';

describe('Queue', () => {
  it('starts off empty', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
    expect(queue.length).toBe(0);
  });

  it('enqueues', () => {
    const queue = new Queue();
    queue.enqueue('hello');
    expect(queue.isEmpty()).toBe(false);
    expect(queue.length).toBe(1);
    queue.enqueue('world');
    expect(queue.length).toBe(2);
  });

  it('dequeues', () => {
    const queue = new Queue();
    queue.enqueue('hello');
    queue.enqueue('world');
    expect(queue.dequeue()).toBe('hello');
    expect(queue.dequeue()).toBe('world');
  });

  it('dequeues null when empty', () => {
    const queue = new Queue();
    expect(queue.dequeue()).toBe(null);
  });

  it('optionally takes an array of items with which to seed the queue', () => {
    const queue = new Queue(['foo', 'bar', 'baz']);
    expect(queue.length).toBe(3);
    expect(queue.dequeue()).toBe('foo');
    expect(queue.dequeue()).toBe('bar');
    expect(queue.dequeue()).toBe('baz');
  });

  it('optionally takes a non-array iterable of items with which to seed the queue', () => {
    const queue = new Queue(new Set(['foo', 'bar', 'baz']));
    expect(queue.length).toBe(3);
    expect(queue.dequeue()).toBe('foo');
    expect(queue.dequeue()).toBe('bar');
    expect(queue.dequeue()).toBe('baz');
  });

  it('can be used as an iterable', () => {
    const queue = new Queue(['foo', 'bar', 'baz']);
    const items = [];

    for (const item of queue) {
      items.push(item);
    }

    expect(items).toEqual(['foo', 'bar', 'baz']);

    // Note that queue can be re-filled and the new contents iterated over.
    queue.enqueue('hello');
    queue.enqueue('world');

    items.splice(0);

    for (const item of queue) {
      items.push(item);
    }

    expect(items).toEqual(['hello', 'world']);

    // If queue is empty, no iteration will occur; loop body is never entered.
    items.splice(0);

    for (const item of queue) {
      items.push(item);
    }

    expect(items).toEqual([]);
  });
});
