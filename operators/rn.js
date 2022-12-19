import { resolve } from 'path';
import { rename } from 'node:fs/promises';
import { logCurrentPath } from '../utils/index.js';

export async function rn(srcPath, filename) {
  try {
    await rename(resolve(srcPath), filename);
  } catch {
    console.log('Operation failed');
  } finally {
    logCurrentPath();
  }
}