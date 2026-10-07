import jwt from 'jsonwebtoken';

export function signToken(user) {
  return jwt.sign(
    {
      email: user.email,
      userId: user.id,
      role: user.role,
    },
    process.env.SECRET_KEY,
    { expiresIn: '1h' },
  );
}
