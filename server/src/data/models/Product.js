import { Model } from 'objection';
import User from './User.js';
import { CATEGORIES } from '../../helpers/categories.js';

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
        'category',
      ],

      properties: {
        id: { type: 'integer' },
        vendorId: { type: 'integer' },
        productName: { type: 'string', minLength: 1, maxLength: 45 },
        productImg: { type: 'string' },
        price: { type: 'number' },
        discount: { type: 'number' },
        description: { type: 'string', minLength: 100, maxLength: 250 },
        category: { type: 'string', enum: CATEGORIES },
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
