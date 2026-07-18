export const up = async function (knex) {
  await knex.schema.alterTable("user", (table) => {
    table.boolean("emailVerified").defaultTo(false);
    table
      .specificType("vendorStatus", "vendor_status")
      .notNullable()
      .defaultTo("unverified");
  });
};

export const down = async function (knex) {
  await knex.schema.alterTable("user", (table) => {
    table.dropColumn("emailVerified");
    table.dropColumn("vendorStatus");
  });
};
