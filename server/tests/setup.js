import { config } from 'dotenv';
config({ path: '.env.test' });
import { beforeEach, afterAll } from 'vitest';
import { resetDb, closeDb } from '../src/helpers/db';

beforeEach(async () => await resetDb());

afterAll(async () => await closeDb());
