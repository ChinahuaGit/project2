
// exports.up = function(knex, Promise) {
//
// };
//
// exports.down = function(knex, Promise) {

// };
exports.up = function(knex) {
  return knex.schema.createTableIfNotExists('dept', table => {
    table.increments('id').primary();
    table.string('name').unique();
    table.string('dept_id');
    table.timestamps(true, true);
  })
  .then(() => knex.schema.createTableIfNotExists('class', table => {
    table.increments('id').primary();
    table.string('name').unique();
    table.string('dept_id');
    table.string('class_id');
    table.timestamps(true, true);
  }))

  .then(() => knex.schema.createTableIfNotExists('subclass', table => {
    table.increments('id').primary();
    table.string('name').unique();
    table.string('dept_id');
    table.string('class_id');
    table.string('subclass_id');
    table.timestamps(true, true);
  }))

  .then(() => knex.schema.createTableIfNotExists('byo', table => {
    table.increments('id').primary();
    table.string('name');
    table.string('number');
    table.timestamps(true, true);
  }))

  .then(() => knex.schema.createTableIfNotExists('sku', table => {
    table.increments('id').primary();
    table.string('sku');
    table.string('desc');
    table.string('type');
    table.string('dept_id');
    table.string('class_id');
    table.string('subclass_id');
    table.string('reg_desc');
    table.timestamps(true, true);
  }))

  .then(() => knex.schema.createTableIfNotExists('byo_desc', table => {
    table.increments('id').primary();
    table.string('desc');
    table.string('reg_desc');
    table.timestamps(true, true);
  }));


  // .then(() => knex.schema.table('albums', table => {
  //   table.integer('artist_id').unsigned();
  //   table.foreign('artist_id').references('artists.id');
  // }));
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('dept'),
    knex.schema.dropTableIfExists('class'),
    knex.schema.dropTableIfExists('subclass'),
    knex.schema.dropTableIfExists('byo'),
    knex.schema.dropTableIfExists('sku'),
    knex.schema.dropTableIfExists('byo_desc')
  ]);
};
