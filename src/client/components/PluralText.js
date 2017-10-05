/**
 * @noflow
 */

import React from 'react';

/**
 * Crude pluralizer. Will add special cases if/when the need arises.
 */
export default function PluralText({
  text,
  count,
}: {
  text: string,
  count: number,
}) {
  return (
    <span>
      {count} {count === 1 ? text : `${text}s`}
    </span>
  );
}
