import { readdir } from 'node:fs/promises';
import { logCurrentPath } from '../utils/index.js';

export async function ls() {
  try {
    const pathList = await readdir(process.cwd(), { withFileTypes: true });
    const directories = [];
    const files = [];
    pathList.forEach(pathItem => pathItem.isFile() 
      ? files.push({ Name: pathItem.name, Type: 'file' }) 
      : directories.push({ Name: pathItem.name, Type: 'directory' }));
    
    console.table(directories.concat(files));
  } catch (err) {
    console.log(err);
  } finally {
    logCurrentPath();
  }
}