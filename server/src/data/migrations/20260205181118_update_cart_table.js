export const up = async function (knex) {
  await knex.schema.alterTable('cart', (table) => {
    table.timestamp('createdAt').defaultTo(knex.fn.now());
  });
};

export const down = async function (knex) {
  await knex.schema.dropTable('cart');
};
