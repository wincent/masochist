/**
 * @flow
 */

import React from 'react';

type Props = {
  html: string,
};

export default React.memo(function TrustedPrerenderedMarkup({html}: Props) {
  return (
    <div
      className="prerendered"
      dangerouslySetInnerHTML={{__html: html}}
    />
  );
});
