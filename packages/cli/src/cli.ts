#!/usr/bin/env node

import * as program from 'commander';
import { startApi } from '@monoapp/api';

program
  .version('0.1.0')
  .option('-p, --port <n>', 'server port', parseInt)
  .parse(process.argv);

console.log(`Listening on port ${program.port}`);
startApi(program.port);
