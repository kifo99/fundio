import dotenv from 'dotenv';

const env = process.env.NODE_ENV || 'development';

dotenv.config({
  path: env === 'test' ? '.env.test' : '.env',
});

const urls = {
  development: process.env.DATABASE_URL_DEV,
  test: process.env.DATABASE_URL_TEST,
  production: process.env.DATABASE_URL_PROD,
};

export default {
  development: {
    client: 'pg',
    connection: {
      connectionString: urls.development,
    },
    migrations: {
      directory: './src/data/migrations',
    },
  },

  test: {
    client: 'pg',
    connection: {
      connectionString: urls.test,
    },
    migrations: {
      directory: './src/data/migrations',
    },
  },

  production: {
    client: 'pg',
    connection: {
      connectionString: urls.production,
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
};
