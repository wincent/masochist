type Entry<T extends {}> = {
  next: Entry<T> | null;
  value: T;
};

/**
 * A FIFO queue backed by a linked list.
 */
export default class Queue<T extends {}> {
  _head: Entry<T> | null;
  _tail: Entry<T> | null;
  _length: number;

  /**
   * Optionally takes an iterable of items with which to initially seed the queue.
   */
  constructor(items?: Iterable<T>) {
    this._head = null;
    this._tail = null;
    this._length = 0;

    if (items) {
      for (const item of items) {
        this.enqueue(item);
      }
    }
  }

  enqueue(item: T) {
    const entry = {
      next: null,
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
  }

  dequeue(): T | null {
    const entry = this._head;
    if (entry) {
      this._head = entry.next;
      this._length--;
      if (this._head === null) {
        this._tail = null;
      }
      return entry.value;
    } else {
      return null;
    }
  }

  get empty(): boolean {
    return this._length === 0;
  }

  get length(): number {
    return this._length;
  }

  *[Symbol.iterator]() {
    while (!this.empty) {
      yield this.dequeue()!;
    }
  }
}
