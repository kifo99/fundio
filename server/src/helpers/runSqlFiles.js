import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';
import knex from '../config/config.js';

export async function runSqlFiles() {
  const sqlDir = path.join('src', 'data', 'sql');
  console.log(`SQL directory is ${sqlDir}`);
  const files = fs.readdirSync(sqlDir).filter((f) => f.endsWith('.sql'));
  console.log(`Files: ${files}`);
  for (const file of files) {
    const filePath = path.join(sqlDir, file);
    const sql = fs.readFileSync(filePath, 'utf8');

    console.log(`Running ${file}`);
    await knex.raw(sql);
  }

  console.log('All SQL files are executed successfully.');
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    await runSqlFiles();
    process.exit(0);
  } catch (error) {
    console.error(`There has been an error: ${error}`);
    process.exit(1);
  }
}
