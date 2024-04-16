// This may be a horrible idea, but I want integration tests against a real
// Redis instance.

import {afterAll, beforeAll, describe, expect, it} from 'bun:test';

import type {WritableSubprocess} from 'bun';

import RedisConnectionPool from '../redis/RedisConnectionPool';

describe('redis', () => {
  let server: WritableSubprocess | null = null;

  beforeAll(async () => {
    // Stand up a Redis instance with no persistence.
    //
    // See: https://stackoverflow.com/a/41238678/2103996
    // TODO: randomize port number?
    server = Bun.spawn([
      'redis-server',
      '--port',
      '7777',
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
  });

  afterAll(() => {
    if (server) {
      server.kill();
    }
  });

  it('can SET and GET', async () => {
    const pool = new RedisConnectionPool({port: 7777});
    expect(await pool.client.get('foo')).toBe(null);
    await pool.client.set('foo', 'secret');
    expect(await pool.client.get('foo')).toBe('secret');
  });
});
