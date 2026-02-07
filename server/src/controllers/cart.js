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

export const getItems = catchAsync(async (req, res, next) => {
  const cartId = req.params.cartId;
  if (!cartId) throw new ApiError('Cart id not valid', 400);

  const cart = await Cart.query().findById(cartId);
  if (!cart) throw new ApiError('Cart not found', 404);

  const items = await cart.$relatedQuery('items');
  if (!items) throw new ApiError('Items not found', 404);

  res.status(200).json({
    message: 'Successfully fetched items',
    items: items,
  });
});

// creates user cart
export const addCart = catchAsync(async (req, res, next) => {
  const userId = req.params.userId;
  if (!userId) throw new ApiError('User id is not valid', 400);

  const cart = await Cart.query().insert({
    userId: Number(userId),
  });

  res.status(200).json({
    message: 'Cart created successfully',
    cart: cart,
  });
});

export const deleteCart = catchAsync(async (req, res, next) => {
  const cartId = req.params.cartId;
  if (!cartId) throw new ApiError('Cart id is not valid', 400);

  const cart = await Cart.query().deleteById(cartId);
  if (!cart) throw new ApiError('Cart not found', 404);

  res.status(200).json({
    message: 'Cart deleted.',
  });
});
