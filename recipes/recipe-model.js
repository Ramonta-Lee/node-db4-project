const db = require("../data/db-config.js");

module.exports = {
 getRecipes,
 getShoppingList,
 getInstructions
};


function getRecipes() {
 // should return a list of all recipes in the database
}

function getShoppingList(id) {
 // should return a list of all ingredients and quantities in the database
}

getInstructions(id) {
 // should return a list of step by step instructions for the recipe
}