// This may be a horrible idea, but I want integration tests against a real
// Redis instance.

import {afterAll, beforeAll, describe, expect, it} from 'bun:test';

import type {WritableSubprocess} from 'bun';

import RedisConnectionPool from '../redis/RedisConnectionPool';

const PORT = process.env['GITHUB_ACTIONS'] ? 6379 : 7777;

describe('redis', () => {
  let server: WritableSubprocess | null = null;
  let pool: RedisConnectionPool | null = null;

  beforeAll(async () => {
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

      await new Promise((r) => {
        // TODO: implement backoff waiting for server to boot
        setTimeout(r, 2000);
      });
    }
  });

  afterAll(() => {
    if (server) {
      server.kill();
    }
  });

  function getPool() {
    if (pool === null) {
      pool = new RedisConnectionPool({port: PORT});
    }
    return pool;
  }

  it('can SET and GET', async () => {
    const pool = getPool();
    expect(await pool.client.get('foo')).toBe(null);
    await pool.client.set('foo', 'secret');
    expect(await pool.client.get('foo')).toBe('secret');
  });
});
