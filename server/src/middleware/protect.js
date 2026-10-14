import User from '../data/models/User.js';
import ApiError from '../utils/ApiError.js';
import catchAsync from '../utils/catchAsync.js';
import jwt from 'jsonwebtoken';

export const protect = catchAsync(async (req, res, next) => {
  console.log(req.cookies.token);
  const token = req.cookies.token;
  if (!token) throw new ApiError('Not authenticated', 401);

  let decode;

  try {
    decode = jwt.verify(token, process.env.SECRET_KEY);
  } catch {
    throw new ApiError('Invalid or expired session', 401);
  }

  const user = await User.query().findById(decode.userId);
  if (!user) throw new ApiError('User no longer exists', 401);

  req.user = user;
  next();
});
