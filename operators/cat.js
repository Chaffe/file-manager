import { resolve } from 'path';
import { createReadStream } from 'node:fs';
import { logCurrentPath } from '../utils/index.js';

export async function cat(fileName) {
  try {
    const readStream = createReadStream(resolve(fileName));
    readStream.on('data', (chunk) => {
      console.log(chunk.toString());
    })

    readStream.on('error', () => {
      console.log('Operation failed');
    })

    readStream.on('end', () => {
      logCurrentPath();
    })
  } catch {
    console.log('Operation failed');
  }
}