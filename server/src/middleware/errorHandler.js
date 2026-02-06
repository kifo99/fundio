import 'dotenv/config';

const errorHandler = (error, req, res, next) => {
  const statusCode = error.status || 500;
  const message = error.message || 'Internal server error';

  if (typeof statusCode !== 'number' || statusCode < 100 || statusCode > 599) {
    console.error('Invalid status code!');
    statusCode = 500;
  }

  console.error(error);
  const response = {
    status: 'error',
    message: message,
  };

  if (process.env.NODE_ENV === 'development') {
    response.stack = error.stack;
  }
  res.status(statusCode).json(response);
};

export default errorHandler;
