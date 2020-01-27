
const utils = require('./utils');
const cheerio = require('cheerio')
const selectors = require('./selectors');

const cli = (program) => {
    if (program.link) {
        utils.fetchData(program.link).then(data => {
            const $ = cheerio.load();
            const about = $(selectors.ABOUT_SELECTOR).text();
            const instructions = $(selectors.INSTRUCTION_SELECTOR).text();
        });
    }
}


module.exports = cli;


