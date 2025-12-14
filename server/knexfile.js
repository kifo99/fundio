import 'dotenv/config';

const url = process.env.NODE_ENV === 'development' ? process.env.DATABASE_URL_DEV : process.env.DATABASE_URL_PROD;
console.log(process.env.DATABASE_URL);
export default {
  development: {
    client: 'pg',
    connection: {
      connectionString: url,
    },
    migrations: {
      directory: './src/data/migrations',
    },
  },

  production: {
    client: 'pg',
    connection: {
      connectionString: url,
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
};
