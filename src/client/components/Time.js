/**
 * @flow
 */

import React from 'react';
import inBrowser from '../../common/inBrowser';
import relativizeDate from '../relativizeDate';

import type {TimeInfo} from '../relativizeDate';

type Props = {
  datetime: string,
};

type State = TimeInfo;

export default class Time extends React.Component<Props, State> {
  _updateTimer: ?TimeoutID;

  _clearTimer = () => {
    if (this._updateTimer) {
      clearTimeout(this._updateTimer);
      this._updateTimer = null;
    }
  };

  _startTimer = () => {
    const {ttl} = this.state;
    if (inBrowser && isFinite(ttl)) {
      this._updateTimer = setTimeout(
        () => this.setState(relativizeDate(this.props.datetime)),
        this.state.ttl * 1000,
      );
    }
  };

  constructor(props: Props) {
    super(props);
    this.state = relativizeDate(props.datetime);
  }

  componentDidMount() {
    this._startTimer();
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    this._clearTimer();
    this._startTimer();
  }

  componentWillUnmount() {
    this._clearTimer();
  }

  render() {
    const {date, humanReadable} = this.state;
    return (
      <time title={date.toLocaleString()} dateTime={date}>
        {humanReadable}
      </time>
    );
  }
}
