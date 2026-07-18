export const up = async function (knex) {
  await knex.raw(`
    DO $$ 
    BEGIN
      IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'vendor_status') THEN
        CREATE TYPE vendor_status AS ENUM ('unverified', 'pending', 'verified', 'rejected');
      END IF;
    END $$;
  `);
};

export const down = async function (knex) {
  await knex.raw(`DROP TYPE IF EXISTS vendor_status`);
};
