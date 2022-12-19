import { getUsername } from './getUsername.js';

export function exit() {
  console.log(`Thank you for using File Manager, ${getUsername()}, goodbye!`);
  process.exit();
};
