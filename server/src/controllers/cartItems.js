import CartItems from '../data/models/CartItems.js';

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
