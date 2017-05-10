/**
 * @flow
 */

import entities from 'entities';
import RSS from 'rss';
import Cache from '../../common/Cache';
import {
  canonicalHost,
  canonicalScheme,
} from '../../common/config';
import git from '../git';
import runQuery from '../runQuery';
import stripTags from '../stripTags';

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
      stripTags(body).trim().replace(/\s+/g, ' ')
    )
  );
}

/**
 * Separate cache breaker from the one in the Cache module allows us to change
 * the format of the feed without invalidating the entire cache.
 */
const FEED_VERSION = 1;

export default async function feed() {
  const head = (await git('rev-parse', 'content')).trim();
  const key = `blog:rss:${FEED_VERSION}:${head}`;
  return await Cache.get(
    key,
    async () => {
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

      return feed.xml({indent: true});
    }
  );
}
