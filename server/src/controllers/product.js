import User from '../data/models/User.js';
import Product from '../data/models/Product.js';

// Controller for product route that retrieves products vendor created
export const getVendorsProducts = async (req, res, next) => {
  try {
    const vendorId = req.params.vendorId;
    if (!vendorId) throw new Error('Vendor id was not passed');

    const vendor = await User.query().findById(vendorId);
    if (!vendor) throw new Error('Vendor was not found!');

    const products = await vendor.$relatedQuery('products');
    if (!products) throw new Error('Vendor was not found!');

    res.status(200).json({
      message: 'Products vendor created',
      products: products,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: `Error: ${error.message}`,
    });
  }
};

// Controller for product route that adds products
export const addProduct = async (req, res, next) => {
  try {
    const vendorId = req.params.vendorId;
    console.log(typeof vendorId);
    const { productName, price, productImg, description, discount } = req.body;

    if (!vendorId) throw new Error('Vendor id was not passed');

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
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: `Error: ${error.message}`,
    });
  }
};

// Controller for product route that delete products
export const deleteProduct = async (req, res, next) => {
  try {
    const productId = req.params.productId;
    if (!productId) throw new Error('Product id was not passed');

    const product = await Product.query().findById(productId);
    if (!product) throw new Error('Product not found');

    await product.$query().delete();

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: `Error: ${error.message}`,
    });
  }
};
