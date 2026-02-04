import User from '../data/models/User.js';

// TODO create getUser function

export async function getUser(req, res, next) {
  try {
    const userId = req.body.id;
    console.log(userId);
    const user = await User.query().findById(userId);
    console.log(user);
    if (!user) throw new Error('User not founded!');

    res.status(200).json({
      user: user,
      message: 'User has been found',
    });
  } catch (error) {
    console.error(error.message);
    res.status(error.statusCode || 500).json({
      message: `There has been an error: ${error.message}`,
    });
  }
}
