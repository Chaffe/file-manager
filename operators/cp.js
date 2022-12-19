import { resolve } from 'path';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'stream/promises';
import { logCurrentPath } from '../utils/index.js';

export async function cp(srcPath, targetPath) {
  try {
    const readStream = createReadStream(resolve(srcPath));
    const writeStream = createWriteStream(resolve(targetPath));

    await pipeline(readStream, writeStream);
  }
   catch {
    console.log('Operation failed');
  } finally {
    logCurrentPath();
  }
}