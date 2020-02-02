const rp = require('request-promise');
const fs = require('fs');

const fetchData = async (url) => {
    return await rp(url);
}

const handleIngredients = (data, $) => {
    const ingredientArray = [];
    $(data).each(((index, element)=> {
        ingredientArray.push($(element).text())
    }))

    return ingredientArray.map(ingredient => {
        return ingredient.replace(/\t|\n/g, "").trim();
    });
}

const formatData = (dataObject) => {
    let newDataObject = {};
    if (dataObject.instructions) {
        newDataObject = {
            ...dataObject,
            instructions: dataObject.instructions.trim(),
        }
    }
    return newDataObject;
};

/**
 * creates and appends data to a json file
 * @param {object} newData
 * @param {string} fileName
 */
const handleWriteToJson = (newData, fileName) => {
    if (!fs.existsSync(`${fileName}.json`)) {
        fs.writeFileSync(`${fileName}.json`, JSON.stringify({data: [newData]}));
    } else {
        let jsonData = JSON.parse(fs.readFileSync(`${fileName}.json`));
        jsonData.data.push(newData);
        fs.writeFileSync(`${fileName}.json`, JSON.stringify({data: jsonData.data}));
    }

}


module.exports = {
    fetchData,
    formatData,
    handleIngredients,
    handleWriteToJson,
}