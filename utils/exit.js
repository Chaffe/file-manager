import process from 'node:process';
import { getUsername } from './getUsername.js';

export function exit() {
  process.on('exit', () => {
    console.log(`Thank you for using File Manager, ${getUsername()}, goodbye!`)
  })
};
