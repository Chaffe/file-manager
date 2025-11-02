import { resolve } from 'path';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'stream/promises';
import { logCurrentPath } from '../../utils/index.js';

export async function cp(srcPath, targetPath) {
  try {
    console.log('cp', srcPath, targetPath, resolve(srcPath), resolve(targetPath));
    const readStream = createReadStream(resolve(srcPath));
    const writeStream = createWriteStream(resolve(targetPath));

    await pipeline(readStream, writeStream);
  }
  catch (err) {
    console.log('Operation failed', err);
  } finally {
    logCurrentPath();
  }
}