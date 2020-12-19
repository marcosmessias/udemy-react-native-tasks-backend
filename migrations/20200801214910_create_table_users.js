
exports.up = function(knex) {
  return knex.schema.createTable('users',function(table){
      table.increments('id').primary();
      table.string('name').notNull();
      table.string('email').notNull();
      table.string('password').notNull();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
