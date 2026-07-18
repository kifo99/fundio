import User from '../data/models/User.js';
import ApiError from '../utils/ApiError.js';
import catchAsync from '../utils/catchAsync.js';

export const uploadImg = catchAsync(async (req, res, next) => {
  const profilePic = req.file;
  const userId = req.params.id;

  if (!userId) throw new ApiError('User id was not valid', 400);

  const user = await User.query().findById(userId);

  if (!user) throw new ApiError('User not found!', 404);

  if (!profilePic) throw new ApiError('Profile picture was not passed', 400);
  await user.$query().patch({ profilePic: profilePic.destination });

  res.status(200).json({
    message: 'Profile picture has been uploaded',
  });
});
