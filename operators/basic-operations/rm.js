import { resolve } from 'path';
import { rm as remove } from 'node:fs/promises';
import { logCurrentPath } from '../../utils/index.js';

export async function rm(fileName) {
  try {
    await remove(resolve(fileName));
  } catch {
    console.log('Operation failed');
  } finally {
    logCurrentPath();
  }
}