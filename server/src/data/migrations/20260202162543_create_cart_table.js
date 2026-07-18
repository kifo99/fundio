export const up = async function (knex) {
  await knex.schema.createTable('cart', (table) => {
    table.increments('id').primary();
    table
      .integer('userId')
      .notNullable()
      .references('id')
      .inTable('user')
      .onDelete('CASCADE');
  });
};

export const down = async function (knex) {
  await knex.schema.dropTable('cart');
};
