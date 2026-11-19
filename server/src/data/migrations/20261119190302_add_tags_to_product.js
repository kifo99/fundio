export async function up(knex) {
  await knex.schema.alterTable('product', (table) => {
    table.jsonb('tags').notNullable().defaultTo('[]');
  });
  await knex.raw('CREATE INDEX product_tags_gin ON product USING GIN (tags)');
}

export async function down(knex) {
  await knex.raw('DROP INDEX IF EXISTS product_tags_gin');
  await knex.schema.alterTable('product', (table) => {
    table.dropColumn('tags');
  });
}
