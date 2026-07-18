export const up = async function (knex) {
  await knex.schema.createTable('product', (table) => {
    table.increments('id').primary();
    table
      .integer('vendorId')
      .notNullable()
      .references('id')
      .inTable('user')
      .onDelete('CASCADE');
    table.string('productName').notNullable();
    table.string('productImg').notNullable();
    table.timestamp('createdAt').defaultTo(knex.fn.now());
  });
};

export const down = async function (knex) {
  await knex.schema.dropTable('product');
};
