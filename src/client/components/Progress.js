/**
 * @flow
 */

import React from 'react';
import inBrowser from '../../common/inBrowser';

if (inBrowser) {
  require('./Progress.css');
}

/**
 * Fake loading indicator.
 */
export default function Progress() {
  return <div className="progress" />;
}
