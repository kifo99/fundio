import User from '../data/models/User.js';
import ApiError from '../utils/ApiError.js';
import catchAsync from '../utils/catchAsync.js';

export const getVendor = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  if (!id) throw new ApiError('User id not valid', 400);

  const user = await User.query().findById(id);
  if (!user) throw new ApiError('User not found', 404);

  res.status(200).json({
    message: `User: ${user.firstName} ${user.lastName}`,
    user: user,
  });
});

export const verifyVendor = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { isVerified } = req.body;

  if (!id) throw new ApiError('User id not valid', 400);

  const user = await User.query().findById(id);
  if (!user) throw new ApiError('User is not found', 404);

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
});
