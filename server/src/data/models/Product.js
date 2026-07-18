import { Model } from 'objection';
import User from './User.js';

export default class Product extends Model {
  static get tableName() {
    return 'product';
  }

  $beforeInsert() {
    this.createdAt = new Date().toISOString();
  }

  // TODO Add discount field
  static get jsonSchema() {
    return {
      type: 'object',
      required: [
        'productName',
        'price',
        'productImg',
        'description',
        'vendorId',
        'discount',
      ],

      properties: {
        id: { type: 'integer' },
        vendorId: { type: 'integer' },
        productName: { type: 'string', minLength: 1, maxLength: 45 },
        productImg: { type: 'string' },
        price: { type: 'number' },
        discount: { type: 'number' },
        description: { type: 'string', minLength: 100, maxLength: 250 },
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
