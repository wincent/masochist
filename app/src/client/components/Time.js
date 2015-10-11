import React from 'react';
import relativizeDate from '../relativizeDate';

let stateCounter = 0;

export default class Time extends React.Component {
  _clearTimer = () => {
    if (this._updateTimer) {
      clearTimeout(this._updateTimer);
      this._updateTimer = null;
    }
  };

  componentWillReceiveProps(nextProps) {
    this._clearTimer;
  }

  componentWillUnmount() {
    this._clearTimer;
  }

  render() {
    const {humanReadable, date, ttl} = relativizeDate(this.props.datetime);

    this._updateTimer = setTimeout(
      () => (
        this.setState((previousState) => ({
          stateCounter: previousState.stateCounter + 1,
        }))
      ),
      ttl * 1000,
    );

    return (
      <time title={date.toLocaleDateString()} dateTime={date}>
        {humanReadable}
      </time>
    );
  }
}
