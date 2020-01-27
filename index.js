#!/usr/bin/env node
const program = require('commander');
const cli = require('./lib');

program
  .version('1.0.0')
  .option('-l, --link <required>', 'The url')
  .parse(process.argv);

program.on('--help', () => {
  console.log('')
  console.log('Examples:');
  console.log('$ drinks --link');
});

cli(program);
