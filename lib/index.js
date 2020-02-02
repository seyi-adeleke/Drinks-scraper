
const utils = require('./utils');
const cheerio = require('cheerio');
const selectors = require('./selectors');

const cli = (program) => {
    if (program.link) {
        utils.fetchData(program.link).then(data => {
            const $ = cheerio.load(data);
            const instructions = $(selectors.INSTRUCTION_SELECTOR).text();
            const title = $(selectors.TITLE_SELECTOR).text();
            const ingredients = utils.handleIngredients($(selectors.INGREDIENTS_SELECTOR), $);
            const formattedData = utils.formatData({
                instructions,
                title,
                ingredients,
                link: program.link,
            })
            utils.handleWriteToJson(formattedData, 'drinks');
            utils.handleWriteToJson({title, link: program.link, date: Date.now()}, 'records');
            console.info('Done..');
        });
    }
}


module.exports = cli;


