import { resolve } from 'path';
import { chdir } from 'process';
import { logCurrentPath } from '../utils/index.js';

export function cd(path) {
  try {
    chdir(resolve(path));
  } catch {
    console.log('Operation failed');
  } finally {
    logCurrentPath();
  }
}