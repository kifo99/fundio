export const up = async function (knex) {
  await knex.schema.alterTable('product', (table) => {
    table.float('price').notNullable();
    table.integer('discount').notNullable();
  });
};

export const down = async function (knex) {
  await knex.schema.dropTable('product');
};
