export default class ComparableString {
  _value: string;

  constructor(value: string) {
    this._value = value;
  }

  compareTo(that: ComparableString): number {
    if (this._value < that._value) {
      return -1;
    } else if (this._value > that._value) {
      return 1;
    } else {
      return 0;
    }
  }

  toString(): string {
    return this._value;
  }
}
