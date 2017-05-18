import PropTypes from 'prop-types';
import React from 'react';
import Time from './Time';
import inBrowser from '../inBrowser';
import relativizeDate from '../relativizeDate';

if (inBrowser) {
  require('./When.css');
}

const WhenWrapper = ({children, link}) => (
  <div className="when">
    <a className="when-link" href={link}>
      {children}
    </a>
  </div>
);

export default class When extends React.Component {
  static propTypes = {
    createdAt: PropTypes.string,
    link: PropTypes.string,
    updatedAt: PropTypes.string,
  };

  render() {
    const {createdAt, link, updatedAt} = this.props;
    if (
      relativizeDate(createdAt).humanReadable ===
      relativizeDate(updatedAt).humanReadable
    ) {
      return (
        <WhenWrapper link={link}>
          <Time datetime={updatedAt} />
        </WhenWrapper>
      );
    }

    return (
      <WhenWrapper link={link}>
        Created <Time datetime={createdAt} />,
        updated <Time datetime={updatedAt} />
      </WhenWrapper>
    );
  }
}
