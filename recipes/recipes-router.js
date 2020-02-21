const express = require("express");

const db = require("../data/db-config.js");

const Recipes = require("./recipe-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(error => {
      res.status(500).json({ message: "Failed to retrieve Recipes." });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Recipes.getShoppingList(id).then(recipes => {

    if (recipes) {
      res.json(recipes);
    } else {
      res
        .status(404)
        .json({
          message: "Could not find the Shopping list for the given Recipe."
        });
    }
  });
});

router.get("/steps/:id", (req, res) => {
 const {id} = req.params;
 Recipes.getInstructions(id).then(recipe => {
  if(recipe){
   res.status(200).json(recipe)
  }
  else {
   res.status(400).json({message: "Could not find the list of instructions"})
  }
 }).catch(error => {
  console.log(error);
  res.status(500).json({message: "Failed to get the list of instructions for the Recipe"})
 })
})
module.exports = router;
