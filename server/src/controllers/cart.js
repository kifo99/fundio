import Cart from '../data/models/Cart.js';
import ApiError from '../utils/ApiError.js';
import catchAsync from '../utils/catchAsync.js';

// retrieves user cart
export const getCart = catchAsync(async (req, res, next) => {
  const userId = req.params.userId;
  if (!userId) throw new ApiError('User id is not valid', 400);

  const cart = await Cart.query().select('*').where('userId', '=', userId);
  if (!cart) throw new ApiError('Cart not found', 404);

  res.status(200).json({
    message: 'User cart',
    cart: cart,
  });
});

export const getItems = async (req, res, next) => {
  try {
    const cartId = req.params.cartId;
    if (!cartId) throw new Error('Cart id not valid');

    const cart = await Cart.query().findById(cartId);
    if (!cart) throw new Error('Cart not found');

    const items = await cart.$relatedQuery('items');
    if (!items) throw new Error('Items not found');

    res.status(200).json({
      message: 'Successfully fetched items',
      items: items,
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
