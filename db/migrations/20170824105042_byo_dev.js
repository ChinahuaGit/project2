
// exports.up = function(knex, Promise) {
//
// };
//
// exports.down = function(knex, Promise) {

// };
exports.up = function(knex) {
  return knex.schema.createTableIfNotExists('dept', table => {
    table.primary('dept_id');
    table.string('name').unique();
    table.integer('dept_id').unique();
    table.timestamps(true, true);
  })
  .then(() => knex.schema.createTableIfNotExists('class', table => {
    table.primary(['class_id', 'dept_id']);
    table.string('name');
    table.integer('class_id');
    table.integer('dept_id').unsigned();
    table.timestamps(true, true);
  }))
  .then(() => knex.schema.table('class', table => {
    table.foreign('dept_id').references('dept.dept_id');
  }))
  .then(() => knex.schema.createTableIfNotExists('sub_class', table => {
    table.primary(['sub_class_id', 'class_id', 'dept_id']);
    table.string('name');
    table.integer('sub_class_id');
    table.integer('class_id').unsigned();
    table.integer('dept_id').unsigned();
    table.timestamps(true, true);
  }))
  .then(() => knex.schema.table('sub_class', table => {
    table.foreign('dept_id').references('dept.dept_id');
    table.foreign('class_id').references(['class.class_id', 'class.dept_id']);
  }))
  .then(() => knex.schema.createTableIfNotExists('byo', table => {
    table.increments('id').primary();
    table.string('name');
    table.integer('number').unique();
    table.timestamps(true, true);
  }))
  .then(() => knex.schema.createTableIfNotExists('sku', table => {
    table.primary('sku');
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
    table.foreign('class_id').references(['class.class_id', 'class.dept_id']);
    table.integer('sub_class_id').unsigned();
    table.foreign('sub_class_id').references(['sub_class.sub_class_id', 'sub_class.class_id', 'sub_class.dept_id']);
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
    knex.schema.dropTableIfExists('sub_class'),
    knex.schema.dropTableIfExists('byo'),
    knex.schema.dropTableIfExists('sku'),
    knex.schema.dropTableIfExists('byo_desc')
  ]);
};
