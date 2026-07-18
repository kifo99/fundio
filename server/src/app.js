import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import bodyParser from 'body-parser';
import userRoutes from './routes/user.js';
import authRoutes from './routes/auth.js';
import uploadRouter from './routes/uploads.js';
import adminRouter from './routes/admin.js';
import productRouter from './routes/product.js';
import cartRouter from './routes/cart.js';
import cartItemsRouter from './routes/cartItems.js';
import errorHandler from './middleware/errorHandler.js';
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
app.use('/upload', uploadRouter);
app.use('/admin', adminRouter);
app.use('/product', productRouter);
app.use('/cart', cartRouter);
app.use('/cartItems', cartItemsRouter);

app.use(errorHandler);

export default app;
