import User from '../data/models/User.js';

export async function getUser(req, res, next) {
  const users = await User.query();
  res.status(200).json({
    users: users,
  });
}
