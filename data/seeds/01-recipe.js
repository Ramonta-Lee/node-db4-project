
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([{ name: "brownies" }]);
    });
};