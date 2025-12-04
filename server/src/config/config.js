import knex from 'knex';
import knexConfig from '../../knexfile.js';
import { Model } from 'objection';

const _knex = knex(knexConfig.development);

Model.knex(_knex);

export default _knex;
