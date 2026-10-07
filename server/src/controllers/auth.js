import User from '../data/models/User.js';
import ApiError from '../utils/ApiError.js';
import catchAsync from '../utils/catchAsync.js';
import { validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import 'dotenv/config';
import { signToken } from '../utils/signToken.js';

// signup function
export const signup = catchAsync(async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  const errors = validationResult(req);
  const formattedErrors = errors.formatWith((err) => err.msg);
  if (!errors.isEmpty()) throw new ApiError(formattedErrors.array(), 400);

  const hashedPassword = await bcrypt.hash(password, Number(process.env.SALT));

  const user = await User.query().insert({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: hashedPassword,
    role: 'user',
  });
  const token = signToken(user);

  const { password: _pw, ...safeUser } = user;

  res.status(201).json({
    message: 'User account is created successfully.',
    token,
    user: safeUser,
  });
});

// login function
export const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const errors = validationResult(req);
  const formattedErrors = errors.formatWith((err) => err.msg);
  if (!errors.isEmpty()) throw new ApiError(formattedErrors.array(), 400);

  const user = await User.query().findOne({ email });
  const valid = user && (await bcrypt.compare(password, user.password));
  if (!valid) throw new ApiError('Invalid email or password', 401);

  const token = signToken(user);

  const { password: _pw, ...safeUser } = user;

  res.status(200).json({
    message: `Welcome: ${user.firstName}`,
    token,
    user: safeUser,
    userId: user.id,
  });
});
