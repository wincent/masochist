/**
 * @flow
 */

import React from 'react';
import relativizeDate from '../relativizeDate';
import inBrowser from '../inBrowser';

let stateCounter = 0;

export default class Time extends React.Component {
  _updateTimer: mixed;

  _clearTimer = () => {
    if (this._updateTimer) {
      clearTimeout(this._updateTimer);
      this._updateTimer = null;
    }
  };

  componentWillReceiveProps() {
    this._clearTimer();
  }

  componentWillUnmount() {
    this._clearTimer();
  }

  render() {
    const {humanReadable, date, ttl} = relativizeDate(this.props.datetime);

    if (inBrowser) {
      this._updateTimer = setTimeout(
        () =>
          this.setState(previousState => ({
            stateCounter: previousState.stateCounter + 1,
          })),
        ttl * 1000,
      );
    }

    return (
      <time title={date.toLocaleString()} dateTime={date}>
        {humanReadable}
      </time>
    );
  }
}
