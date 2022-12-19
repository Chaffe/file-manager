import { resolve } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createBrotliCompress } from 'zlib';
import { logCurrentPath } from '../utils/index.js';

export async function compress(srcPath, targetPath) {
  try {
    const readStream = createReadStream(resolve(srcPath));
    const writeSteam = createWriteStream(resolve(targetPath));

    await pipeline(readStream, createBrotliCompress(), writeSteam);
  } catch {
    console.log('Operation failed');
  } finally {
    logCurrentPath();
  }
}