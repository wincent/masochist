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
});
