import PropTypes from 'prop-types';
import React from 'react';
import Time from './Time';
import inBrowser from '../inBrowser';
import relativizeDate from '../relativizeDate';

if (inBrowser) {
  require('./When.css');
}

const WhenWrapper = props => (
  <div className="when">
    {props.children}
  </div>
);

export default class When extends React.Component {
  static propTypes = {
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
  };

  render() {
    const {createdAt, updatedAt} = this.props;
    if (
      relativizeDate(createdAt).humanReadable ===
      relativizeDate(updatedAt).humanReadable
    ) {
      return (
        <WhenWrapper>
          <Time datetime={updatedAt} />
        </WhenWrapper>
      );
    }

    return (
      <WhenWrapper>
        Created <Time datetime={this.props.createdAt} />,
        updated <Time datetime={this.props.updatedAt} />
      </WhenWrapper>
    );
  }
}
