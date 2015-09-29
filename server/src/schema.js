'use strict';

import Promise from 'bluebird';
import config from './config';
import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';
import mysql from 'mysql';
import wikify from './wikify';

const {host, user, password} = config.db;

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          // Demo only.
          const connection = mysql.createConnection({host, user, password});
          new Promise((resolve, reject) => {
            connection.connect(error => {
              if (error) {
                reject(error);
              } else {
                resolve(connection);
              }
            });
          }).then((connection, reject) => {
            connection.query('SELECT 1', (error, rows) => {
              if (error) {
                reject(error);
              } else {
                console.log(
                  'Doing nothing with this result, just proving I could get it',
                  rows
                );
                return rows;
              }
            });
          });
          return wikify([{wikitext: "'''world'''"}]);
        }
      }
    }
  })
});

export default schema;
