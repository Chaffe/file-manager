import { resolve } from 'path';
import { writeFile } from 'node:fs/promises';
import { logCurrentPath } from '../utils/index.js';

export async function add(fileName) {
  try {
    await writeFile(resolve(fileName), '', { flag: 'wx' });
  } catch {
    console.log('Operation failed');
  } finally {
    logCurrentPath();
  }
}