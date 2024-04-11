type Entry<T extends {}> = {
  next: Entry<T> | null;
  previous: Entry<T> | null;
  value: T;
};

/**
 * Random-access queue datastructure backed by a doubly-linked list supporting
 * the following operations:
 *
 * - Get the least-recently used item (dequeue). Runtime: O(1).
 * - Push an item onto the end of the queue (enqueue). Runtime: O(1).
 * - Eject an invalid item from the queue (eject); the item to eject is
 *   targeted by identity (ie. `Object.is()` semantics) rather than index (ie.
 *   queue position). Runtime: O(1).
 *
 * Storage cost is O(n), but higher than the storage cost of a non-random-access
 * Queue, because an additional Map datastructure must be maintained in order to
 * support the eject operation.
 *
 * The use case here is maintaining a fixed-sized pool of clients, using them in
 * round robin fashion, and discarding/replacing clients that are dead; for the
 * implementation of that, see `Pool.ts` in the same directory.
 */
export default class RandomAccessQueue<T extends {}> {
  _head: Entry<T> | null;
  _tail: Entry<T> | null;
  _length: number;
  _items: Map<T, Entry<T>>;

  constructor(items?: Iterable<T>) {
    this._head = null;
    this._tail = null;
    this._length = 0;
    this._items = new Map();
    if (items) {
      for (const item of items) {
        this.enqueue(item);
      }
    }
  }

  enqueue(item: T) {
    const entry = {
      next: null,
      previous: this._tail,
      value: item,
    };
    if (this._tail) {
      this._tail.next = entry;
      this._tail = entry;
    } else {
      this._head = entry;
      this._tail = entry;
    }
    this._length++;
    this._items.set(item, entry);
  }

  dequeue(): T | null {
    const entry = this._head;
    if (entry) {
      this._head = entry.next;
      this._length--;
      if (this._head === null) {
        this._tail = null;
      } else {
        this._head.previous = null;
      }
      this._items.delete(entry.value);
      return entry.value;
    } else {
      return null;
    }
  }

  // Returns true if the ejection took place and false if there was no such item
  // in the queue.
  eject(item: T): boolean {
    const entry = this._items.get(item);
    if (entry) {
      this._items.delete(item);
      this._length--;
      if (entry.next === null) {
        this._tail = entry.previous;
      } else {
        entry.next.previous = entry.previous;
      }
      if (entry.previous === null) {
        this._head = entry.next;
      } else {
        entry.previous.next = entry.next;
      }
      return true;
    }
    return false;
  }

  get empty(): boolean {
    return this._length === 0;
  }

  get length(): number {
    return this._length;
  }
}
