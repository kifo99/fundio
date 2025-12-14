export const up = async function (knex) {
  await knex.raw(`
            DO $$ 
            BEGIN
                IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'user_role') THEN
                    CREATE TYPE user_role AS ENUM ('User', 'Admin', 'Vendor');
                END IF;
            END $$;        
        `);
};

export const down = async function (knex) {
  await knex.raw(`DROP TYPE IF EXISTS user_role`);
};
