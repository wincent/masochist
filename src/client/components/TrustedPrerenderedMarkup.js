/**
 *  strict
 */

import React from 'react';

// $FlowIssue: https://github.com/facebook/flow/issues/7093
export default React.memo(function TrustedPrerenderedMarkup({html}) {
  return (
    <div className="prerendered" dangerouslySetInnerHTML={{__html: html}} />
  );
});
