# Quickstart


## Webpack-based hot-loading workflow

```
npm install
npm run update-schema # same as `babel-node src/bin/updateSchema.js`
npm run start # same as `babel-node src/server/main.js`
```

## Running in production-like environment

```
npm install
gulp build # builds files under `dist/`
node dist/bin/updateSchema.js
npm run start-prod # same as `NODE_ENV=production node dist/server/main.js`
```
