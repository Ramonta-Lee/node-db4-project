exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .then(function() {
      // Inserts seed entries
      return knex("steps").insert([
        {
          recipe_id: 1,
          step_number: 1,
          description: "add wate to brownie mix"
        },
        { recipe_id: 1, step_number: 2, description: "mix it up" },
        { recipe_id: 1, step_number: 3, description: "bake it" }
      ]);
    });
};
