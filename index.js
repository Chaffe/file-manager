import { homedir } from 'os';
import { createInterface } from 'readline';
import { greeting, logCurrentPath, exit, getInputConvert } from './utils/index.js';
import { up, cd, ls } from './operators/index.js'

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

    default:
      console.log('Invalid input');
      break;
  }
})

exit();
