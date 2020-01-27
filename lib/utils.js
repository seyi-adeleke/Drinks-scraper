const rp = require('request-promise');

const fetchData = async (url) => {
    return await rp(url);
}

module.exports = {
    fetchData,
}