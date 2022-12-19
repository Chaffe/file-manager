import { resolve } from 'path';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { logCurrentPath } from '../utils/index.js';

export async function hash(path) {
  try {
    const content = await readFile(resolve(path), { encoding: 'utf8' });
    const hashValue = createHash('sha256').update(content).digest('hex');
    console.log(hashValue);
  } catch {
    console.log('Operation failed');
  } finally {
    logCurrentPath();
  }
}