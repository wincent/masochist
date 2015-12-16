import React from 'react';
import inBrowser from '../inBrowser';

if (inBrowser) {
  require('./Progress.css');
}

/**
 * Fake loading indicator.
 */
const Progress = () => <div className="progress" />;

export default Progress;
