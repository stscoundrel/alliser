#!/usr/bin/env node

import alliser from './index';

const parseCommaSeparated = (input: string): string[] => input.split(',');

const main = (args: string[]) => {
  if (args.length < 2) {
    console.error('Alliser expects two arguments: comma separated list of extensions (eg. .ts,.tsx and comma separated folders (eg. src,tests)');
    process.exit(1);
  }

  const extensions = parseCommaSeparated(args[0]);
  const folders = parseCommaSeparated(args[1]);

  alliser.validate(extensions, folders);
};

main(process.argv.slice(2));
