
exports.up = function(knex) {
  return knex.schema.createTable('property', tbl => {
          tbl.increments()
          tbl.string('name', 255).notNullable()
          tbl.integer('minimum_nights').notNullable()
          tbl.string('room_type', 128).notNullable()
          tbl.string('neighborhood', 255).notNullable()
          tbl.string('neighborhood_group', 128)
          tbl.integer('user_id')
               .unsigned()
               .notNullable()
               .references('id')
               .inTable('users')
               .onDelete('RESTRICT')
               .onUpdate('CASCADE')
     })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('property')
};
