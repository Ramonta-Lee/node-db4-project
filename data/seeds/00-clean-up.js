exports.seed = async function(knex) {
  // must order this clean-up file in order of how they depend on each other during creation
  // This will remove and blank out the tables to INCLUDE seeded data
  await knex("recipe_ingredients").truncate();
  await knex("steps").truncate();
  await knex("recipes").truncate();
  await knex("ingredients").truncate();
};
