import React from 'react';
import Time from './Time';
import relativizeDate from '../relativizeDate';

export default class When extends React.Component {
  static propTypes = {
    createdAt: React.PropTypes.string,
    primary: React.PropTypes.oneOf(['createdAt', 'updatedAt']),
    updatedAt: React.PropTypes.string,
  };

  render() {
    const {createdAt, primary, updatedAt} = this.props;
    if (
      relativizeDate(createdAt).humanReadable ===
      relativizeDate(updatedAt).humanReadable
    ) {
      if (primary === 'updatedAt') {
        return (
          <div>
            <Time datetime={updatedAt} />
          </div>
        );
      } else {
        return (
          <div>
            <Time datetime={updatedAt} />
          </div>
        );
      }
    }

    return (
      <div>
        Created <Time datetime={this.props.createdAt} />,
        updated <Time datetime={this.props.updatedAt} />
      </div>
    );
  }
}
