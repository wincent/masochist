type Item<T> = {
  next: Item<T> | null;
  value: T;
};

export default class Queue<T> {
  #head: Item<T> | null;
  #length: number;
  #tail: Item<T> | null;

  /**
   * Optionally takes an iterable of items with which to initially seed the queue.
   */
  constructor(items?: Iterable<T>) {
    this.#head = null;
    this.#tail = null;
    this.#length = 0;

    if (items) {
      for (const item of items) {
        this.enqueue(item);
      }
    }
  }

  dequeue() {
    const node = this.#head;
    if (node) {
      this.#head = node.next;
      this.#length--;
      if (this.#head === null) {
        this.#tail = null;
      }
      return node.value;
    } else {
      return null;
    }
  }

  enqueue(item: T) {
    const node = {
      next: null,
      value: item,
    };
    if (this.#tail) {
      this.#tail.next = node;
      this.#tail = node;
    } else {
      this.#head = node;
      this.#tail = node;
    }
    this.#length++;
  }

  isEmpty() {
    return this.#length === 0;
  }

  get length() {
    return this.#length;
  }

  [Symbol.iterator]() {
    return {
      next: () =>
        this.isEmpty() ? {done: true} : {value: this.dequeue(), done: false},
    };
  }
}
