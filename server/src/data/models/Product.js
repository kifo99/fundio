import { Model } from 'objection';
import User from './User';

export default class Product extends Model {
  static get tableName() {
    return 'product';
  }

  $beforeInsert() {
    this.createdAt = new Date().toISOString();
  }

  // TODO create schema for Product model
  static get jsonSchema() {
    return {
      type: 'object',
      required: [
        'productName',
        'price',
        'productImg',
        'description',
        'vendorId',
      ],

      properties: {
        id: { type: 'integer' },
        vendorId: { type: 'integer' },
        productName: { type: 'string', minLength: 1, maxLength: 45 },
        price: { type: 'number' },
        productImg: { type: 'string' },
        description: { type: 'string', minLength: 300, maxLength: 1450 },
      },
    };
  }

  static get relationMappings() {
    return {
      vendor: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'product.vendorId',
          to: 'user.id',
        },
      },
    };
  }
}
