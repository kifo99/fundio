export function AuthButton({ className, type }) {
  return (
    <button type={`${type}`} className={`${className}`}>
      {type}
    </button>
  );
}
