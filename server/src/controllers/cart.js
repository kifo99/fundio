import Cart from '../data/models/Cart.js';

export const getCart = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    if (!userId) throw new Error('User id is not valid');

    const cart = await Cart.query().select('*').where('userId', '=', userId);
    if (!cart) throw new Error('Cart not found');

    res.status(200).json({
      message: 'User cart',
      cart: cart,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: `Error: ${error.message}`,
    });
  }
};
