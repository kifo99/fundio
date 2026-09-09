export function Input({ id, className, ...props }) {
  return <input id={id} className={`${className}`} {...props} />;
}
