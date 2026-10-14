export function getErrorMessages(err) {
  if (!err.response) return ['Cannot reach the server. Try again'];
  const data = err.response.data;
  const msg = data?.message ?? data?.error ?? data;

  if (Array.isArray(msg)) return msg;
  if (typeof msg === 'string') return [msg];
  return ['Something went wrong!'];
}
