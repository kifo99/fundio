import 'dotenv/config';
import app from './app.js';
import knex from './config/config.js';
const port = process.env.PORT || 8080;

async function main() {
  try {
    app.listen(port, () => {
      console.log(`This server is connected on port ${port}`);
    });

    process.on('SIGINT', async () => {
      console.log('Shutting down server...');
      await knex.destroy();
      server.close(() => {
        console.log('Server closed');
        process.exit(0);
      });
    });

    process.on('SIGTERM', async () => {
      console.log('Shutting down server...');
      await knex.destroy();
      server.close(() => {
        console.log('Server closed');
        process.exit(0);
      });
    });
  } catch {
    console.error('There has been an error');
  }
}

main();
