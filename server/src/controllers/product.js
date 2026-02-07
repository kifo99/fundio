import User from '../data/models/User.js';
import Product from '../data/models/Product.js';
import ApiError from '../utils/ApiError.js';
import catchAsync from '../utils/catchAsync.js';

// Controller for product route that retrieves products vendor created
export const getVendorsProducts = catchAsync(async (req, res, next) => {
  const vendorId = req.params.vendorId;
  if (!vendorId) throw new ApiError('Vendor id was not valid', 400);

  const vendor = await User.query().findById(vendorId);
  if (!vendor) throw new ApiError('Vendor was not found!', 404);

  const products = await vendor.$relatedQuery('products');
  if (!products) throw new ApiError('Vendor was not found!', 404);

  res.status(200).json({
    message: 'Products vendor created',
    products: products,
  });
});

// Controller for product route that adds products
export const addProduct = catchAsync(async (req, res, next) => {
  const vendorId = req.params.vendorId;
  const { productName, price, productImg, description, discount } = req.body;

  if (!vendorId) throw new ApiError('Vendor id was not valid', 400);
  const product = await Product.query().insert({
    vendorId: Number(vendorId),
    productName,
    price,
    productImg,
    description,
    discount,
  });

  res.status(200).json({
    message: 'Successfully added product',
    product: product,
  });
});

// Controller for product route that delete products
export const deleteProduct = async (req, res, next) => {
  try {
    const productId = req.params.productId;
    if (!productId) throw new Error('Product id was not passed');

    const product = await Product.query().deleteById(productId);

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: `Error: ${error.message}`,
    });
  }
};

// Controller for product route that edit products
export const editProduct = async (req, res, next) => {
  try {
    const productId = req.params.productId;
    if (!productId) throw new Error('Product id was not passed');
    const { productName, price, productImg, description, discount } = req.body;

    const product = await Product.query().findById(productId);
    if (!product) throw new Error('Product not found');
    await product.$query().patch({
      productName,
      price,
      productImg,
      description,
      discount,
    });

    res.status(200).json({
      message: 'Successfully added product',
      product: product,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: `Error: ${error.message}`,
    });
  }
};
