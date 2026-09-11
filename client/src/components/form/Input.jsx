export function Input({ type, id, name, placeholder, className }) {
  return (
    <input type={type} id={id} name={name} placeholder={placeholder} className={`${className}`} />
  );
}
