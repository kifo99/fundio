import User from '../data/models/User.js';

// TODO Make function work dynamically and update data based on admins input
export async function verifyVendor(req, res, next) {
  try {
    const { id } = req.params;

    if (!id) throw new Error('User id does not exist');

    const user = await User.query().findById(id);

    if (!user) throw new Error('User is not found');

    await user.$query().patch({
      role: 'vendor',
      emailVerified: true,
      vendorStatus: 'verified',
    });

    res.status(200).json({
      message: 'Vendor verified',
      user: user,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
}
