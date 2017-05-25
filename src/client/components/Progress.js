/**
 * @flow
 */

import React from 'react';
import inBrowser from '../inBrowser';

if (inBrowser) {
  require('./Progress.css');
}

/**
 * Fake loading indicator.
 */
export default function Progress() {
  return <div className="progress" />;
}
