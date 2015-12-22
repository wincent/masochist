/**
 * @flow
 */

import entities from 'entities';
import RSS from 'rss';
import {
  canonicalHost,
  canonicalScheme,
} from '../../common/config';
import runQuery from '../runQuery';
import stripTags from '../stripTags';

const HELLIP = '\u2026';
const FOUR_TWEETS = 140 * 4;

function ellipsize(input: string, limit = FOUR_TWEETS: number): string {
  if (input.length >= limit - 3) {
    return input.substr(0, limit - 3) + HELLIP;
  } else {
    return input;
  }
}

function extractExcerpt(body: string): string {
  return ellipsize(
    entities.decodeHTML(
      stripTags(body).trim().replace(/\s+/g, ' ')
    )
  );
}

export default async function feed() {
  const result = await runQuery(`
    query FeedQuery {
      viewer {
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
    }
  `);

  const feed = new RSS({
    feed_url: canonicalScheme + canonicalHost + '/blog.rss',
    generator: 'Masochist',
    site_url: canonicalScheme + canonicalHost + '/blog',
    title: 'wincent.com blog',
  });

  result.data.viewer.posts.edges.forEach(({node}) => {
    feed.item({
      date: node.createdAt,
      description: extractExcerpt(node.body.html),
      title: node.title,
      url: canonicalScheme + canonicalHost + node.url,
    });
  });

  return __DEV__ ? feed.xml({indent: true}) : feed.xml();
}
