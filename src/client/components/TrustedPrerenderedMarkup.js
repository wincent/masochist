import React from 'react';

export default React.memo(function TrustedPrerenderedMarkup({html}) {
  return (
    <div className="prerendered" dangerouslySetInnerHTML={{__html: html}} />
  );
});
