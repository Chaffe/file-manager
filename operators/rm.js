import { resolve } from 'path';
import { rm } from 'node:fs/promises';
import { logCurrentPath } from '../utils/index.js';

export async function remove(fileName) {
  try {
    await rm(resolve(fileName));
  } catch {
    console.log('Operation failed');
  } finally {
    logCurrentPath();
  }
}