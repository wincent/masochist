import IntervalTree, {Interval} from './IntervalTree';

import type {Edge, NFA, Transition} from './NFA/NFA';
// import type {Comparable, Node} from './RedBlackTree';

export class CharCode {
  _value: number;

  constructor(value: number) {
    this._value = value;
  }

  compareTo(that: CharCode): number {
    return this._value - that.value;
  }

  toString() {
    const c = this._value;
    if (
      c === 0x20 /* sp */ ||
      c === 0x2c /* , */ ||
      c === 0x3a /* : */ ||
      c === 0x5b /* [ */ ||
      c === 0x5d /* ] */
    ) {
      // These are all easily confused when `toString()`-ing the BST, so render
      // them as hex. ie. instead of rendering `[$low,$high]:$maximum` as:
      //
      //     [#,[]:[
      //
      // we render:
      //
      //     [#,0x5b]:0x5b
      //
      return '0x' + c.toString(16).padStart(2, '0');
    } else if (c > 0x20 && c <= 0x7e) {
      // Other printable ASCII.
      return String.fromCharCode(c);
    } else if (c === 0) {
      return '\\0';
    } else if (c === 0x08) {
      return '\\b';
    } else if (c === 0x0c) {
      return '\\f';
    } else if (c === 0x0a) {
      return '\\n';
    } else if (c === 0x0d) {
      return '\\r';
    } else if (c === 0x09) {
      return '\\t';
    } else if (c === 0x0b) {
      return '\\v';
    } else if (c <= 0xff) {
      return '0x' + c.toString(16).padStart(2, '0');
    } else {
      return '\\u' + c.toString(16).padStart(4, '0');
    }
  }

  get value(): number {
    return this._value;
  }
}

/**
 * `IntervalTree` subclass specialized for the storage of state machine
 * transition conditions and targets.
 *
 * We use this to group edges according to equivalent (overlapping or
 * coinciding) conditions during NFA-to-DFA transformation.
 */
export default class ConditionTree extends IntervalTree<CharCode, Set<NFA>> {
  add(edge: Edge) {
    const interval = this._getInterval(edge.on);
    const overlaps = this.search(interval);

    if (overlaps.length) {
      let intervalLow = interval.low.value;
      let intervalHigh = interval.high.value;

      for (const [key, targets] of overlaps) {
        // Temporarily remove overlapping interval.
        this.delete(key);

        // Split into overlapping and non-overlapping chunks, then reinsert.
        //
        // We know we will never have overlapping sets in the tree from past
        // calls (because `add()` will have kept them separate), so we only ever
        // have to deal with the following scenarios:
        //
        //     Original range:  *****         ie. exact correspondence
        //     New interval:    *****
        //
        //     Original range:  *****         ie. new interval overlaps right
        //     New interval:       ******
        //
        //     Original range:     *****      ie. new interval overlaps left
        //     New interval:    ******
        //
        //     Original range:  ************  ie. new interval is contained
        //     New interval:       ******
        //
        //     Original range:     ******     ie. new interval contains old
        //     New interval:    ************
        //
        // In the case where we have multiple overlapping ranges like the
        // following example, we will proceed from left to right, dealing with
        // them one at a time; each case will be like one of the above examples:
        //
        //     Original ranges:   ***** *****     *****
        //     New interval:         ***************
        //
        let originalLow = key.low.value;
        const originalHigh = key.high.value;

        if (originalLow < intervalLow) {
          // Preserve original chunk on the left: non-overlapping.
          const left = new Interval(
            new CharCode(originalLow),
            new CharCode(intervalLow - 1),
          );

          this.put(left, new Set([...targets]));
          originalLow = intervalLow;
        }

        if (intervalLow < originalLow) {
          // First chunk of new interval: non-overlapping.
          const middle = new Interval(
            new CharCode(intervalLow),
            new CharCode(originalLow - 1),
          );
          this.put(middle, new Set([edge.to]));
          intervalLow = originalLow;
        }

        if (intervalLow <= intervalHigh) {
          // Overlapping chunk in the middle.
          const end = Math.min(originalHigh, intervalHigh);
          const middle = new Interval(
            new CharCode(intervalLow),
            new CharCode(end),
          );
          this.put(middle, new Set([...targets, edge.to]));
          intervalLow = end + 1;
          originalLow = end + 1;
        }

        if (originalHigh > intervalHigh) {
          // Preserve original chunk on the right: non-overlapping.
          const right = new Interval(
            new CharCode(intervalLow),
            new CharCode(originalHigh),
          );
          this.put(right, new Set([...targets]));
        } else if (intervalHigh > originalHigh) {
          // Last chunk of new interval: non-overlapping.
          const last = new Interval(
            new CharCode(intervalLow),
            new CharCode(intervalHigh),
          );
          this.put(last, new Set([edge.to]));
          intervalLow = intervalHigh;
        }
      }
    } else {
      this.put(interval, new Set([edge.to]));
    }
  }

  _getInterval(transition: Transition): Interval<CharCode> {
    if (transition === null) {
      throw new Error(
        'ConditionTree._getInterval(): Unexpected null transition',
      );
    } else if (transition.kind === 'Anything') {
      // TODO: may change this if we ever want to change the definition of "."
      // to match what "." means in RegExps.
      return new Interval(new CharCode(0x0000), new CharCode(0xffff));
    } else if (transition.kind === 'Atom') {
      const charCode = new CharCode(transition.value.charCodeAt(0));
      return new Interval(charCode, charCode);
    } else if (transition.kind === 'Range') {
      return new Interval(
        new CharCode(transition.from.charCodeAt(0)),
        new CharCode(transition.to.charCodeAt(0)),
      );
    } else {
      throw new Error('ConditionTree._getInterval(): Unreachable');
    }
  }
}
