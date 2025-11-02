import process from 'process';

export function logCurrentPath () {
  console.log(`You are currently in ${process.cwd()}`);
}