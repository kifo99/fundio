export function Label({ htmlFor, className, children }) {
  return (
    <label className={`${className}`} htmlFor={htmlFor}>
      {children}
    </label>
  );
}
