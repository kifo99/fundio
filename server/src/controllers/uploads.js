import User from '../data/models/User.js';

export async function uploadImg(req, res, next) {
  try {
    const profilePic = req.file;
    const userId = req.params.id;

    if (!profilePic || !userId) throw new Error('There has been an error!');

    const user = await User.query().findById(userId);

    if (!user) throw new Error('User not found!');

    await user.$query().patch({ profilePic: profilePic.destination });

    res.status(200).json({
      message: 'Profile picture has been uploaded',
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: `Error: ${error.message}`,
    });
  }
}
