
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username:'user' , password:'pass'},
        { username:'kevin' , password:'kevin'},
        { username:'red' , password:'bull'}
      ]);
    });
};
