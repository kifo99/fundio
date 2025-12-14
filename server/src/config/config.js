import 'dotenv/config';
import knex from 'knex';
import knexConfig from '../../knexfile.js';
import { Model } from 'objection';

const env = process.env.NODE_ENV || 'development';
const _knex = knex(knexConfig[env]);

Model.knex(_knex);

export default _knex;
