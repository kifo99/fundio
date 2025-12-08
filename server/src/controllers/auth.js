import User from '../data/models/User.js';
import { validationResult } from 'express-validator';
import bcrypt from 'bcrypt';

// TODO Create signup function
export async function signup(req, res, next) {
  try {
    const { firstName, lastName, email, password } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) throw new Error('Validation not successful!');

    const hashedPassword = await bcrypt.hash(password, 12);

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
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: `Error: ${error.message}`,
    });
  }
}

// TODO Create login function

// TODO Create logout function

// TODO Create Vendor login function
