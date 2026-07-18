import User from '../data/models/User.js';
import ApiError from '../utils/ApiError.js';
import catchAsync from '../utils/catchAsync.js';

export const getUser = catchAsync(async (req, res, next) => {
  const userId = req.body.id;

  if (!userId) throw new ApiError('User id not valid', 400);
  const user = await User.query().findById(userId);

  if (!user) throw new ApiError('User not founded!', 404);

  res.status(200).json({
    user: user,
    message: 'User has been found',
  });
});
