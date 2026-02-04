export const up = async function (knex) {
  await knex.schema.alterTable('product', (table) => {
    table.string('description').notNullable();
  });
};

export const down = async function (knex) {
  await knex.schema.dropTable('product');
};
