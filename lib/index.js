
const utils = require('./utils');
const cheerio = require('cheerio');
const selectors = require('./selectors');

const cli = (program) => {
    if (program.link) {
        utils.fetchData(program.link).then(data => {
            const $ = cheerio.load(data);
            const instructions = $(selectors.INSTRUCTION_SELECTOR).text();
            const ingredients = utils.handleIngredients($(selectors.INGREDIENTS_SELECTOR), $);
            const title = $(selectors.TITLE_SELECTOR).text();
            console.log(ingredients);

        });
    }
}


module.exports = cli;


