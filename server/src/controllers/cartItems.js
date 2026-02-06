import CartItems from '../data/models/CartItems.js';
import Cart from '../data/models/Cart.js';

export const getCartItem = async (req, res, next) => {
  try {
    const productId = req.params.productId;
    if (!productId) throw new Error('Product id is not valid');

    const item = await CartItems.query()
      .select('*')
      .where('productId', '=', productId);
    if (!item) throw new Error('Item was not found');

    res.status(200).json({
      message: 'Successfully fetched data',
      item: item,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

export const addToCart = async (req, res, next) => {
  try {
    const cartId = req.params.cartId;
    const { productId, quantity } = req.body;

    if (!cartId) throw new Error('Cart id is not valid');
    const cart = await Cart.query().findById(cartId);

    if (!cart) throw new Error('Cart is not found');
    const items = await cart.$relatedQuery('items');
    const containsItem = [];

    if (!items) throw new Error('No items found');
    items.forEach((item) => {
      if (item.productId === productId) containsItem.push(item);
    });

    if (containsItem.length > 0) throw new Error('Product already in cart');

    const item = await CartItems.query().insert({
      cartId: Number(cartId),
      productId,
      quantity,
    });

    res.status(200).json({
      message: 'Successfully added to cart',
      item: item,
    });

    console.log(containsItem);
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};
