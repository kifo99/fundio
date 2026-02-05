import Cart from '../data/models/Cart.js';

// retrieves user cart
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

// creates user cart
export const addCart = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    if (!userId) throw new Error('User id is not valid');

    const cart = await Cart.query().insert({
      userId: Number(userId),
    });

    res.status(200).json({
      message: 'Cart created successfully',
      cart: cart,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: `Error: ${error.message}`,
    });
  }
};

export const deleteCart = async (req, res, next) => {
  try {
    const cartId = req.params.cartId;
    if (!cartId) throw new Error('Cart id is not valid');

    const cart = await Cart.query().deleteById(cartId);
    if (!cart) throw new Error('Cart not found');

    res.status(200).json({
      message: 'Cart deleted.',
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: `Error: ${error.message}`,
    });
  }
};
