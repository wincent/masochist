const CHECKPOINT = Symbol('CHECKPOINT');

/**
 * Map subclass that shallowly records all mutations and provides
 * `rollback()`, `commit()` and `checkpoint()` methods for reversing those
 * mutations.
 */
export default class ReversibleMap<K, V> extends Map<K, V> {
  undo: Array<(() => void) | typeof CHECKPOINT>;

  constructor(iterable?: (readonly [K, V])[] | null) {
    super(iterable);

    // A stack of operations that can be applied to reverse mutations.
    this.undo = [];
  }

  /**
   * Creates a snapshot of the internal storage and adds an operation to the
   * internal `undo` array that can be used to reverse the effects of a
   * mutation.
   *
   * When making snapshots, we always recreate all entries in order to
   * preserve entry ordering.
   */
  _snapshot() {
    // If called from constructor, this.undo won't be set yet.
    if (this.undo) {
      const entries = [...this.entries()];

      this.undo.push(() => {
        Map.prototype.clear.call(this);

        entries.forEach(([key, value]) => {
          Map.prototype.set.call(this, key, value);
        });
      });
    }
  }

  clear() {
    this._snapshot();

    super.clear();
  }

  /**
   * Records a checkpoint that will be the target for the next `rollback()`
   * operation.
   */
  checkpoint() {
    this.undo.push(CHECKPOINT);
  }

  /**
   * Commits and clears all pending changes. After commiting, no rollback is
   * possible.
   */
  commit() {
    this.undo = [];
  }

  delete(key: K): boolean {
    this._snapshot();

    return super.delete(key);
  }

  /**
   * Rolls back to the last checkpoint.
   */
  rollback() {
    while (this.undo.length) {
      const operation = this.undo.pop()!;

      if (operation === CHECKPOINT) {
        break;
      } else {
        operation();
      }
    }
  }

  set(key: K, value: V): this {
    this._snapshot();

    return super.set(key, value);
  }
}
