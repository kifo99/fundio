export const handleError = (error) => {
  console.error(error);

  const message =
    error.response?.data?.message || error.message || 'Something went wrong';

  // error handling for now
  console.log('User friendly error: ', message);

  // TODO  Later will add:
  // - Show Tost
  // - Redirect to 401 page
  // - Track errors
};
