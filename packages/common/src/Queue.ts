type Item<T> = {
  next: Item<T> | null;
  value: T;
};

export default class Queue<T> {
  #head: Item<T> | null;
  #length: number;
  #tail: Item<T> | null;

  constructor() {
    this.#head = null;
    this.#tail = null;
    this.#length = 0;
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
}
