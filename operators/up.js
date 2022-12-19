import { homedir } from 'os';
import path from 'path';
import { logCurrentPath } from '../utils/index.js';

export function up() {
  try {
    if (process.cwd() > homedir()) {
      process.chdir(path.resolve('../'));
    } else {
      console.log('Operation failed');
    }
  } finally {
    logCurrentPath();
  }
}