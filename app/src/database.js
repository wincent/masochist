'use strict';

import Promise from 'bluebird';
import mysql from 'mysql';
import config from './config';

const {host, user, password} = config.db;

export default function doSomething() {
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
}
