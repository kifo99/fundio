export const up = async function (knex) {
  await knex.schema.createTable('user', (table) => {
    table.increments('id').primary();
    table.string('firstName').notNullable();
    table.string('lastName').notNullable();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.string('profilePic');
    table.boolean('emailVerified').defaultTo(false);
    table.specificType('role', 'user_role').notNullable().defaultTo('user');
    table
      .specificType('vendorStatus', 'vendor_status')
      .notNullable()
      .defaultTo('unverified');
  });
};

export const down = async function (knex) {
  await knex.schema.dropTable('user');
  await knex.raw(`DROP TYPE user_role`);
  await knex.raw(`DROP TYPE vendor_status`);
};
