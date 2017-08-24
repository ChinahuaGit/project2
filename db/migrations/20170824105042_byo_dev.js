
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
    table.integer('dept_id').unique();
    table.timestamps(true, true);
  })
  .then(() => knex.schema.createTableIfNotExists('class', table => {
    table.increments('id').primary();
    table.string('name').unique();
    table.integer('class_id').unique();
    table.timestamps(true, true);
  }))
  .then(() => knex.schema.table('class', table => {
    table.integer('dept_id').unsigned();
    table.foreign('dept_id').references('dept.dept_id');
  }))
  .then(() => knex.schema.createTableIfNotExists('subclass', table => {
    table.increments('id').primary();
    table.string('name').unique();
    table.integer('subclass_id').unique();
    table.timestamps(true, true);
  }))
  .then(() => knex.schema.table('subclass', table => {
    table.integer('dept_id').unsigned();
    table.foreign('dept_id').references('dept.dept_id');
    table.integer('class_id').unsigned();
    table.foreign('class_id').references('class.class_id');
  }))
  .then(() => knex.schema.createTableIfNotExists('byo', table => {
    table.increments('id').primary();
    table.string('name');
    table.integer('number').unique();
    table.timestamps(true, true);
  }))
  .then(() => knex.schema.createTableIfNotExists('sku', table => {
    table.increments('id').primary();
    table.integer('sku').unique();
    table.string('desc');
    table.string('type');
    table.string('reg_desc');
    table.timestamps(true, true);
  }))
  .then(() => knex.schema.table('sku', table => {
    table.integer('dept_id').unsigned();
    table.foreign('dept_id').references('dept.dept_id');
    table.integer('class_id').unsigned();
    table.foreign('class_id').references('class.class_id');
    table.integer('subclass_id').unsigned();
    table.foreign('subclass_id').references('subclass.subclass_id');
  }))
  .then(() => knex.schema.createTableIfNotExists('byo_desc', table => {
    table.increments('id').primary();
    table.string('desc');
    table.string('reg_desc');
    table.timestamps(true, true);
  }))
  .then(() => knex.schema.table('byo_desc', table => {
    table.integer('byo_id').unsigned();
    table.foreign('byo_id').references('byo.number');
    table.integer('sku').unsigned();
    table.foreign('sku').references('sku.sku');
  }));
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
