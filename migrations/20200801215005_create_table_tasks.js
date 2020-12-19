
exports.up = function(knex) {
    return knex.schema.createTable('tasks',function(table){
      table.increments('id').primary();
      table.string('desc').notNull();
      table.datetime('estimateAt');
      table.datetime('doneAt');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.integer('userId', 11)
        .unsigned()
        .references('id') 
        .inTable('users').notNull()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tasks');
};
