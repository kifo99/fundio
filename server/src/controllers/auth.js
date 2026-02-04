import User from '../data/models/User.js';
import { validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

// signup function
export async function signup(req, res, next) {
  try {
    const path = req.path;
    const { firstName, lastName, email, password } = req.body;
    const errors = validationResult(req);
    const error = errors.formatWith((error) => error.msg);
    if (!errors.isEmpty()) throw new Error(error.array());

    const hashedPassword = await bcrypt.hash(
      password,
      Number(process.env.SALT)
    );

    if (!path.includes('vendor')) {
      const user = await User.query().insert({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword,
      });

      await Promise.all([user.$query().patch()]);

      res.status(200).json({
        message: 'User account is created successfully.',
        user: user,
      });
    }

    const user = await User.query().insert({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashedPassword,
      vendorStatus: 'pending',
    });

    await Promise.all([user.$query().patch()]);

    res.status(200).json({
      message: 'User account is created successfully.',
      user: user,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: `Error: ${error.message}`,
    });
  }
}

// login function
export async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) throw new Error('There has been an error');

    const user = await User.query().findOne({ email });

    if (!user) throw new Error('User has not been found');

    const decryptedPassword = await bcrypt.compare(password, user.password);

    if (!decryptedPassword) throw new Error('Wrong password!');

    const token = jwt.sign(
      {
        email: user.email,
        userId: user.id,
      },
      process.env.SECRET_KEY,
      { expiresIn: '1h' }
    );
    res.status(200).json({
      message: `Welcome: ${user.firstName}`,
      token: token,
      user: user,
      userId: user.id,
    });

    res.status(404).json({
      message: 'Unable to login credentials do not match',
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
}
