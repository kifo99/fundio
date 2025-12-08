import express from 'express';
import multer from 'multer';
import path from 'path';
import { uploadImg } from '../controllers/uploads.js';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.resolve('public/uploads/image');
    cb(null, uploadPath);
  },

  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.random(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  },
});
const upload = multer({ storage });
const route = express.Router();

// TODO You need to put 'name="profilePic"' inside the react component that will handle setting profile picture
route.post('/:id/image', upload.single('profilePic'), uploadImg);

export default route;
