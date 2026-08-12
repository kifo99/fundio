import _knex from '../config/config.js';

export const resetDb = async () => {
  await _knex.raw(`
    TRUNCATE TABLE "user"
    RESTART IDENTITY
    CASCADE
  `);
};

export const closeDb = async () => {
  await _knex.destroy();
};
