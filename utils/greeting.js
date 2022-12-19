import { getUsername } from './getUsername.js'

export function greeting() {
  console.log(`Welcome to the File Manager, ${getUsername()}!`);
}
