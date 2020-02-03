#!/usr/bin/env node
const program = require('commander');
const cli = require('./lib');

program
  .version('1.0.0')
  .option('-l, --link <required>', 'The url')

program.on('--help', () => {
  console.log('')
  console.log('Examples:');
  console.log('$ drinks --link `https://www.delish.com/cooking/recipe-ideas/a30546935/shirley-temple-mimosas-recipe/` ');
});

program.parse(process.argv);

cli(program);
