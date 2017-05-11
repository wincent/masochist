declare var __DEV__: boolean;

declare module "../../../shared/common.json" {
  declare var redisCacheVersion: string;
  declare var redisKeyPrefix: string;
  declare var redisKeys: {
    lastIndexedHash: string,
    wikiIndex: string,
  };
}
