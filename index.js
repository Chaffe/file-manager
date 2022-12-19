import { homedir } from 'os';
import { createInterface } from 'readline';
import { greeting, logCurrentPath, exit, getInputConvert } from './utils/index.js';
import { up, cd, ls, cat, add, rn, cp, mv, remove } from './operators/index.js'

greeting();

process.chdir(homedir());
logCurrentPath();

const readline = createInterface(process.stdin, process.stdout);
readline.on('line', (input) => {
  const inputConvert = getInputConvert(input);

  switch (inputConvert[0]) {
    case 'up':
      if(inputConvert.length === 1) {
        up();
        break;
      }

    case 'cd':
      if(inputConvert.length === 2) {
        cd(inputConvert[1]);
        break;
      }

    case 'ls': 
      if(inputConvert.length === 1) {
        ls();
        break;
      }

    case 'cat':
      if(inputConvert.length === 2) {
        cat(inputConvert[1]);
        break;
      }
      
    case 'add':
      if(inputConvert.length === 2) {
        add(inputConvert[1]);
        break;
      }

    case 'rn':
      if(inputConvert.length === 3) {
        rn(inputConvert[1], inputConvert[2]);
        break;
      }

    case 'cp':
      if(inputConvert.length === 3) {
        cp(inputConvert[1], inputConvert[2]);
        break;
      }

    case 'mv':
      if(inputConvert.length === 3) {
        mv(inputConvert[1], inputConvert[2]);
        break;
      }

    case 'rm':
      if(inputConvert.length === 2) {
        remove(inputConvert[1], inputConvert[2]);
        break;
      }

    default:
      console.log('Invalid input');
      break;
  }
})

exit();
