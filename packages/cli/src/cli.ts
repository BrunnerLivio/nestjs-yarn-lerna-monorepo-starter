#!/usr/bin/env node

import * as program from 'commander';
import { startApi } from '@monoapp/api';

program
  .version('0.1.0')
  .option('-p, --port <n>', 'server port', parseInt)
  .parse(process.argv);

startApi(program.port).then(port => console.log(`Listening on port ${port}`));
