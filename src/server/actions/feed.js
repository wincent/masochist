/**
 * @flow
 */

import entities from 'entities';
import {graphql} from 'react-relay';
import RSS from 'rss';

import {array} from '../../common/checks';
import Cache from '../Cache';
import {HOST, SCHEME} from '../constants';
import git from '../git';
import run from '../run';
import runQuery from '../runQuery';
import stripTags from '../stripTags';

import type {feedPosts} from './__generated__/feedPosts.graphql';

const HELLIP = '\u2026';
const FOUR_TWEETS = 140 * 4;

function ellipsize(input: string, limit: number = FOUR_TWEETS): string {
  if (input.length >= limit - 3) {
    return input.substr(0, limit - 3) + HELLIP;
  } else {
    return input;
  }
}

function extractExcerpt(body: string): string {
  return ellipsize(
    entities.decodeHTML(
      stripTags(body)
        .trim()
        .replace(/\s+/g, ' '),
    ),
  );
}

/**
 * Separate cache breaker from the one in the Cache module allows us to change
 * the format of the feed without invalidating the entire cache.
 */
const FEED_VERSION = 1;

// Could have just used an untagged template literal, but by using `graphql` we
// get validation at compile-time instead of runtime, and also some handy Flow
// types.
const feedQuery = graphql`
  query feedQuery {
    ...feedPosts
  }
`;

graphql`
  fragment feedPosts on Root {
    posts(first: 10) {
      edges {
        node {
          body {
            html
          }
          createdAt
          title
          url
        }
      }
    }
  }
`;

export default (async function feed() {
  const head = (await run(git('rev-parse', 'content'))).trim();
  const key = `blog:rss:${FEED_VERSION}:${head}`;
  return await Cache.get(key, async () => {
    const feed = new RSS({
      feed_url: SCHEME + HOST + '/blog.rss',
      generator: 'Masochist',
      site_url: SCHEME + HOST + '/blog',
      title: 'wincent.com blog',
    });
    const result: any = await runQuery(feedQuery().id);
    const data: feedPosts = result.data;
    const posts = data.posts;
    posts.edges &&
      posts.edges.forEach(edge => {
        if (edge) {
          const {node} = edge;
          if (node) {
            feed.item({
              date: node.createdAt,
              description: extractExcerpt(node.body.html),
              title: node.title,
              url: SCHEME + HOST + node.url,
            });
          }
        }
      });

    return feed.xml({indent: true});
  });
});
