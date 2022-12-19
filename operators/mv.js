import { resolve } from 'path';
import { createReadStream, createWriteStream } from 'node:fs';
import { rm } from 'fs/promises';
import { pipeline } from 'stream/promises';
import { logCurrentPath } from '../utils/index.js';

export async function mv(srcPath, targetPath) {
  try {
    const readStream = createReadStream(resolve(srcPath));
    const writeStream = createWriteStream(resolve(targetPath));

    await pipeline(readStream, writeStream);
    await rm(resolve(srcPath));
  }
   catch {
    console.log('Operation failed');
  } finally {
    logCurrentPath();
  }
}