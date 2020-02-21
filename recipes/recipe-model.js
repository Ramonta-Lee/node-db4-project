const db = require("../data/db-config.js");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  // should return a list of all recipes in the database
  return db("recipes");
}

function getShoppingList(id) {
  // should return a list of all ingredients and quantities in the database
  return db("recipes as r")
    .join("recipe_ingredients AS ri", "ri.recipe_id", "r.id")
    .join("ingredients as i", "i.id ", "ri.ingredient_id")
    .where("recipes", id);
}

function getInstructions(id) {
  // should return a list of step by step instructions for the recipe
}
