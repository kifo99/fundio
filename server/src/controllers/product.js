import User from '../data/models/User.js';

export async function getVendorsProducts(req, res, next) {
  try {
    const vendorId = req.params.vendorId;
    console.log(vendorId);
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
}
