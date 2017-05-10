/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule ArticlePreview_article.graphql
 * @generated SignedSource<<5d2503796811b302f02f38ededefff03>>
 * @flow
 * @nogrep
 */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type ArticlePreview_article = {
  createdAt?: ?any;
  title?: ?string;
  updatedAt?: ?any;
  url: string;
};
*/

/* eslint-disable comma-dangle, quotes */

const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArticlePreview_article",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "createdAt",
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "title",
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "updatedAt",
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "url",
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Tags_tagged",
      "args": null
    }
  ],
  "type": "Article"
};

module.exports = fragment;
