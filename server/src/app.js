import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import bodyParser from 'body-parser';
import userRoutes from './routes/user.js';
import authRoutes from './routes/auth.js';
const app = express();

app.use(helmet());
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(morgan('dev'));
app.use(bodyParser.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 200,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
});

app.use(limiter);

app.use('/user', userRoutes);
app.use('/auth', authRoutes);

app.use((error, req, resizeBy, next) => {
  const status = error.status || 500;
  const message = error.message || 'There has been an error. Please try again.';
  const data = error.data;

  if (typeof status === 'number' || status < 100 || status > 500) {
    console.error('Invalid status code!');
  }

  resizeBy.status(status).json({
    message: message,
    data: data,
  });
});

export default app;
