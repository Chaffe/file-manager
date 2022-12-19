import { homedir } from 'os';
import { resolve } from 'path';
import { cwd, chdir } from 'process';
import { logCurrentPath } from '../utils/index.js';

export function up() {
  try {
    if (cwd() > homedir()) {
      chdir(resolve('../'));
    } else {
      console.log('Operation failed');
    }
  } finally {
    logCurrentPath();
  }
}