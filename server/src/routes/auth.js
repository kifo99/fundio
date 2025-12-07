import express from 'express';
import { body } from 'express-validator';
import User from '../data/models/User.js';
import { signin } from '../controllers/auth.js';
const route = express.Router();

route.put(
  '/signin',
  [
    body('firstName').trim().not().isEmpty().withMessage('Invalid first name!'),
    body('lastName').trim().not().isEmpty().withMessage('Invalid last name!'),
    body('email')
      .isEmail()
      .withMessage('Pleas enter a valid email address!')
      .custom(async (value, { req }) => {
        const userDoc = await User.query().findOne({ email: value });

        if (userDoc) return Promise.reject('Email address already exists!');
      })
      .normalizeEmail(),
    body('password')
      .trim()
      .isStrongPassword({
        minLength: 8,
        minUppercase: 1,
        minLowercase: 1,
        minSymbols: 1,
        minNumbers: 1,
        returnScore: false,
        pointsPerUnique: 1,
        pointsPerRepeat: 0.5,
        pointsForContainingUpper: 10,
        pointsForContainingLower: 10,
        pointsForContainingSymbol: 10,
        pointsForContainingNumber: 10,
      })
      .withMessage(
        'Password needs to contain at least one upper and lower case letter, at least one symbol and one number!'
      ),
    body('confirmPassword')
      .trim()
      .custom((value, { req }) => {
        const password = req.body.password;

        if (value !== password) return Promise.reject('Password do not match!');
        return true;
      }),
  ],
  signin
);

export default route;
