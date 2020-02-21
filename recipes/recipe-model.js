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
  return db("recipe_ingredients")
    .join("recipes", "recipes.id", "recipe_ingredients.recipe_id")
    .select(
      "recipes.name",
      "ingredients.ingredient_name",
      "ingredients.ingredient_amount"
    )
    .join("ingredients", "ingredients.id", "recipe_ingredients.ingredient_id")
    .where("recipe_id", id);
}

function getInstructions(id) {
  // should return a list of step by step instructions for the recipe
  return db("steps")
    .select("*")
    .where("recipe_id", id);
}
