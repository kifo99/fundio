import { Model } from 'objection';
import User from './User';

export default class Cart extends Model {
  static get tableName() {
    return 'cart';
  }

  $beforeInsert() {
    this.createdAt = new Date().toISOString();
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['userId'],

      properties: {
        id: { type: 'integer' },
        userId: { type: 'integer' },
      },
    };
  }

  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'cart.userId',
          to: 'user.id',
        },
      },
    };
  }
}
