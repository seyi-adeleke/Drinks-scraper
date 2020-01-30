const rp = require('request-promise');

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

const formatDrinksData = (dataObject) => {
    if (dataObject.ingredients) {
        console.log(`${dataObject.ingredients}`);
    }
};


module.exports = {
    fetchData,
    formatDrinksData,
    handleIngredients,
}