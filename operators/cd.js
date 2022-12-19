import path from 'path';
import { logCurrentPath } from '../utils/index.js';

export function cd(newPath) {
  try {
    process.chdir(path.resolve(newPath));
  } catch {
    console.log('Operation failed');
  } finally {
    logCurrentPath();
  }
}