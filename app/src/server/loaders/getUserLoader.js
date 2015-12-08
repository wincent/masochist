/**
 * @flow
 */

import Promise from 'bluebird';
import DataLoader from 'dataloader';
import User from '../models/User';

async function loadUsers(keys: Array<string>): Promise<Array<Object | Error>> {
  return keys.map(key => Promise.resolve(new User()));
}

export default function getUserLoader() {
  return new DataLoader(loadUsers);
}
