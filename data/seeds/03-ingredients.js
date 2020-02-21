exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_name: "brownie mix", ingredient_amount: 1 },
        { ingredient_name: "eggs", ingredient_amount: 8 },
        { ingredient_name: "milk cups", ingredient_amount: 3.5 }
      ]);
    });
};
