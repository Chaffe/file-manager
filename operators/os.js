import { EOL, cpus, homedir, userInfo, arch } from 'os';
import { logCurrentPath } from '../utils/index.js';

export function os(arg) {
  switch (arg) {
    case '--EOL':
      console.log(JSON.stringify(EOL));
      logCurrentPath();
      break;

    case '--cpus':
      const cpuList = cpus().map(({ model, speed }) => ({ CPU: model, ClockRate: `${speed / 1000} GHz` }));
      console.table(cpuList);
      logCurrentPath();
      break;

    case '--homedir':
      console.log(homedir());
      logCurrentPath();
      break;

    case '--username':
      console.log(userInfo().username);
      logCurrentPath();
      break;

      case '--architecture':
        console.log(arch());
        logCurrentPath();
        break;
  }
}