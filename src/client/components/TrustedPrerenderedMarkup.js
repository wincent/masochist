/**
 * @flow strict
 */

import React from 'react';

type Props = {
  html: string,
};

// $FlowIssue: https://github.com/facebook/flow/issues/7093
export default React.memo(function TrustedPrerenderedMarkup({html}: Props) {
  return (
    <div className="prerendered" dangerouslySetInnerHTML={{__html: html}} />
  );
});
