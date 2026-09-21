import { FormField } from './FormField.jsx';

export function Form({ className, children }) {
  return <div className={`${className}`}>{children}</div>;
}
