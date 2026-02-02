import { Model } from 'objection';
import Product from './Product';
import Cart from './Cart';

export default class CartItems extends Model {
  static get tableName() {
    return 'cartItems';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['cartId', 'productId', 'quantity'],

      properties: {
        id: { type: 'integer' },
        cartId: { type: 'integer' },
        productId: { type: 'integer' },
        quantity: { type: 'integer' },
      },
    };
  }

  static get relationMappings() {
    return {
      product: {
        relation: Model.ManyToManyRelation,
        modelClass: Product,
        join: {
          from: 'cartItems.productId',
          to: 'product.id',
        },
      },

      cart: {
        relation: Model.ManyToManyRelation,
        modelClass: Cart,
        join: {
          from: 'cartItems.cartId',
          to: 'cart.id',
        },
      },
    };
  }
}
