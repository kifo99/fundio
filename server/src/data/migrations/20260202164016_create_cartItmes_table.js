export const up = async function (knex) {
  await knex.schema.createTable('cartItems', (table) => {
    table.increments('id').primary();
    table
      .integer('cartId')
      .notNullable()
      .references('id')
      .inTable('cart')
      .onDelete('CASCADE');
    table
      .integer('productId')
      .notNullable()
      .references('id')
      .inTable('product')
      .onDelete('CASCADE');
    table.integer('quantity').notNullable();
  });
};

export const down = async function (knex) {
  await knex.schema.dropTable('cartItems');
};
