import { resolve } from 'path';
// import { createReadStream, createWriteStream } from 'node:fs';
// import { pipeline } from 'stream/promises';
import { mkdir as mkDirectory } from 'node:fs/promises';
import { logCurrentPath } from '../../utils/index.js';

export async function mkdir(dirPath) {
  try {
    await mkDirectory(resolve(dirPath));
  }
  catch {
    console.log('Operation failed');
  } finally {
    logCurrentPath();
  }
}