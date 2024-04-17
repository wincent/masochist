// This may be a horrible idea, but I want integration tests against a real
// Redis instance.

import {nullthrows} from '@masochist/common';
import {afterAll, beforeAll, describe, expect, it} from 'bun:test';
import assert from 'node:assert';

import RedisConnectionPool from '../RedisConnectionPool';

import type {WritableSubprocess} from 'bun';

const PORT = process.env['GITHUB_ACTIONS'] ? 6379 : 7777;

describe('RedisConnectionPool()', () => {
  let server: WritableSubprocess | null = null;
  let pool: RedisConnectionPool | null = null;

  beforeAll(async () => {
    pool = new RedisConnectionPool({port: PORT});

    if (process.env['GITHUB_ACTIONS']) {
      // Redis should be listening on port 6379 already, thanks to:
      // https://github.com/supercharge/redis-github-action
    } else {
      // Stand up a Redis instance with no persistence.
      //
      // See: https://stackoverflow.com/a/41238678/2103996
      server = Bun.spawn([
        'redis-server',
        '--port',
        PORT.toString(),
        '--save',
        '',
        '--appendonly',
        'no',
        '-', // Read config from standard input.
      ], {
        stdin: 'pipe',
      });

      server.stdin.end();

      const response = await nullthrows(pool).client.ping();
      if (response !== 'PONG') {
        // If server isn't running yet and we get ECONNREFUSED, `Client` will
        // retry for us automatically. So, getting in here is unexpected.
        throw new Error(
          `Unexpected response to PING command: ${JSON.stringify(response)}`,
        );
      }
    }
  });

  afterAll(() => {
    if (server) {
      server.kill();
    }
  });

  it('can SET and GET', async () => {
    assert(pool);
    expect(await pool.client.get('foo')).toBe(null);
    await pool.client.set('foo', 'secret');
    expect(await pool.client.get('foo')).toBe('secret');
  });
});
