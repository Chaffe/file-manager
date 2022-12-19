import { resolve } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createBrotliDecompress } from 'zlib';
import { logCurrentPath } from '../utils/index.js';

export async function decompress(srcPath, targetPath) {
  try {
    const readStream = createReadStream(resolve(srcPath));
    const writeSteam = createWriteStream(resolve(targetPath));

    await pipeline(readStream, createBrotliDecompress(), writeSteam);
  } catch {
    console.log('Operation failed');
  } finally {
    logCurrentPath();
  }
}