/**
 * @flow
 */

import React from 'react';
import inBrowser from '../../common/inBrowser';

if (inBrowser) {
  require('./Metadata.css');
}

export default function Metadata({children}) {
  return (
    <div className="metadata">
      {children}
    </div>
  );
}
