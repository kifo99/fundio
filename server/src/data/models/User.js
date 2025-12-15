import { Model } from 'objection';

export default class User extends Model {
  static get tableName() {
    return 'user';
  }

  $beforeInsert() {
    this.createdAt = new Date().toISOString();
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['firstName', 'lastName', 'email', 'password'],

      properties: {
        id: { type: 'integer' },
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        email: { type: 'string', format: 'email' },
        password: { type: 'string' }, // needs to be stored hashed
        createdAt: { type: 'string', format: 'date-time' },
        profilePic: { type: 'string' },
      },
    };
  }
}
