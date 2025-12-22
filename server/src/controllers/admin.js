import User from '../data/models/User.js';

export async function getVendor(req, res, next) {
  try {
    const { id } = req.params;

    if (!id) throw new Error('Id not found');

    const user = await User.query().findById(id);

    if (!user) throw new Error('User not found');

    res.status(200).json({
      message: `User: ${user.firstName} ${user.lastName}`,
      user: user,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
}

// TODO Make function work dynamically and update data based on admins input
export async function verifyVendor(req, res, next) {
  try {
    const { id } = req.params;
    const { isVerified } = req.body;

    if (!id) throw new Error('User id does not exist');

    const user = await User.query().findById(id);
    if (!user) throw new Error('User is not found');

    if (!isVerified) {
      await user.$query().patch({
        role: 'user',
        emailVerified: false,
        vendorStatus: 'rejected',
      });

      res.status(200).json({
        message: 'Vendor verification denied.',
        user: user,
      });
    }

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
