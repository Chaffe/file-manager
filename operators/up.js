import { resolve } from 'path';
import { chdir } from 'process';
import { logCurrentPath } from '../utils/index.js';

export function up() {
  try {
    chdir(resolve('../'));
  } finally {
    logCurrentPath();
  }
}