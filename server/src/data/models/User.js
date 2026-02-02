import { Model } from 'objection';
import Product from './Product';

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
        role: { type: 'string', enum: ['user', 'admin', 'vendor'] },
        createdAt: { type: 'string', format: 'date-time' },
        profilePic: { type: 'string' },
        emailVerified: { type: 'boolean' },
        vendorStatus: {
          type: 'string',
          enum: ['unverified', 'verified', 'pending', 'rejected'],
        },
      },
    };
  }

  static get relationMappings() {
    return {
      products: {
        relation: Model.HasManyRelation,
        modelClass: Product,
        from: 'user.id',
        to: 'product.vendorId',
      },
    };
  }
}
