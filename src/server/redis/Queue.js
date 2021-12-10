export default class Queue {
  constructor() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  dequeue() {
    const node = this._head;
    if (node) {
      this._head = node.next;
      this._length--;
      if (this._head === null) {
        this._tail = null;
      }
      return node.value;
    } else {
      return null;
    }
  }

  enqueue(item) {
    const node = {
      next: null,
      value: item,
    };
    if (this._tail) {
      this._tail.next = node;
      this._tail = node;
    } else {
      this._head = node;
      this._tail = node;
    }
    this._length++;
  }

  isEmpty() {
    return this._length === 0;
  }

  get length() {
    return this._length;
  }
}
