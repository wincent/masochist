import RandomAccessQueue from './RandomAccessQueue';

/**
 * Manages a fixed-sized pool.
 *
 * Each call to `next()` will add a new member to the pool and then return the
 * member, up until the specified pool size is reached, at which point the least
 * recently used pool member will be returned instead.
 */
export default class Pool<T extends {}> {
  _queue: RandomAccessQueue<T>;
  _addMember: () => T;
  _size: number;

  constructor(
    size: number,
    addMember: () => T,
  ) {
    if (size <= 0) {
      throw new Error(`new Pool(): size must be positive, got ${size}`);
    }
    this._queue = new RandomAccessQueue<T>();
    this._addMember = addMember;
    this._size = size;
  }

  /**
   * Gets the least-recently used member from pool.
   *
   * As described in the constructor, until the pool size is reached, each call
   * to `next()` will add a new member to the pool and return it. Once the pool
   * is full, the least-recently used member will be selected.
   */
  next(): T {
    const queue = this._queue;

    if (queue.length < this._size) {
      const member = this._addMember();
      queue.enqueue(member);
      return member;
    } else {
      // Move member to end of queue.
      const member = queue.dequeue()!;
      queue.enqueue(member);
      return member;
    }
  }

  /**
   * Removes a member from the pool.
   *
   * Note that if two (or more) callers try to remove the same member from the
   * queue, the first will perform the removal and the the other attempts will
   * be no-ops.
   */
  remove(member: T) {
    this._queue.eject(member);
  }

  get size() {
    return this._size;
  }
}
