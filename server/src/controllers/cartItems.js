import CartItems from '../data/models/CartItems.js';
import Cart from '../data/models/Cart.js';
import ApiError from '../utils/ApiError.js';
import catchAsync from '../utils/catchAsync.js';

export const getCartItem = catchAsync(async (req, res, next) => {
  const productId = req.params.productId;
  if (!productId) throw new ApiError('Product id is not valid', 400);

  const item = await CartItems.query()
    .select('*')
    .where('productId', '=', productId);
  if (!item) throw new ApiError('Item was not found', 404);

  res.status(200).json({
    message: 'Successfully fetched data',
    item: item,
  });
});

export const addToCart = catchAsync(async (req, res, next) => {
  const cartId = req.params.cartId;
  const { productId, quantity } = req.body;

  if (!cartId) throw new ApiError('Cart id is not valid!', 400);
  const cart = await Cart.query().findById(cartId);

  if (!cart) throw new ApiError('Cart was not found!', 404);
  const items = await cart.$relatedQuery('items');
  const containsItem = [];

  if (!items) throw new ApiError('Items were not found!', 404);
  items.forEach((item) => {
    if (item.productId === productId) containsItem.push(item);
  });

  if (containsItem.length > 0)
    throw new ApiError('Product already exist!', 409);

  const item = await CartItems.query().insert({
    cartId: Number(cartId),
    productId,
    quantity,
  });

  res.status(200).json({
    message: 'Successfully added to cart',
    item: item,
  });
});

export const removeFromCart = catchAsync(async (req, res, next) => {
  const itemId = req.params.itemId;
  if (!itemId) throw new ApiError('Item id is not valid', 400);

  const item = await CartItems.query().deleteById(itemId);
  if (!itemId) throw new ApiError('Item was not found!', 404);

  res.status(200).json({
    message: 'Item successfully removed from cart',
  });
});
