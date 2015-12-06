# Quickstart


## Webpack-based hot-loading workflow

```
npm install
npm run update-schema # same as `babel-node src/bin/updateSchema.js`
npm run update-indices # whenever content changes
npm run start # same as `babel-node src/server/main.js`
```

## Running in production-like environment

```
npm install
gulp build # builds files under `dist/`
npm run start-prod # same as `NODE_ENV=production node dist/server/main.js`
```

## Running in production

```
export NODE_ENV=production
npm install
gulp build
node dist/bin/updateIndices.js # whenever content changes
node dist/server/main.js
```
