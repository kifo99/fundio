export async function up(knex) {
  await knex.schema.alterTable('product', (table) => {
    table.string('category').notNullable().defaultTo('homemade');
  });
}

export async function down(knex) {
  await knex.schema.dropTable('product');
}
