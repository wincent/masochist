import React from 'react';
import {graphql} from 'react-relay';

import Link from '../../client/components/Link';
import Snippet from '../../client/components/Snippet';
import {makeNotFound} from '../NotFoundError';
import {makeRenderText} from '../RenderTextError';
import buildRoute from '../buildRoute';
import markupExtensions from '../markupExtensions';

/**
 * A mapping from 'html' to "HTML" etc.
 */
const FORMAT_TO_MARKUP_TYPE = new Map(
  markupExtensions.map(extension => [extension, extension.toUpperCase()]),
);

/**
 * HTML renders as text/html; everything else as text/plain.
 */
const FORMAT_TO_MIME_TYPE = {
  html: 'text/html',
};

export default buildRoute(
  graphql`
    query SnippetSourceRouteQuery($format: MARKUP_FORMAT_TYPE, $id: ID!) {
      node(id: $id) {
        ... on Snippet {
          source(format: $format)
        }
      }
    }
  `,
  {
    variables: ({format, id}) => {
      format = FORMAT_TO_MARKUP_TYPE.get(format.toLowerCase());
      if (format !== 'TXT') {
        return {format, id};
      } else {
        return {
          format: null,
          id,
        };
      }
    },
    render: ({node}, {format, id}) => {
      if (node && node.source !== null) {
        throw makeRenderText(
          node.source,
          FORMAT_TO_MIME_TYPE[format.toLowerCase()] || 'text/plain',
        );
      }
      throw makeNotFound(
        `Snippet "${id}" source not found for format ${format}`,
        <p>
          Try inspecting <Link to="/snippets">the snippets index</Link> and{' '}
          <Link to="/tags">the tags listing</Link>, or using{' '}
          <Link to="/search">the site search</Link>.
        </p>,
      );
    },
  },
);
