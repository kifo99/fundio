import { Label } from './Label';
import { Input } from './Input';

export function FormField({ field, placeholder, label, labelStyle, inputStyle, className }) {
  return (
    <div className={className}>
      <Input
        type={field}
        id={field}
        name={field}
        placeholder={placeholder}
        className={inputStyle}
      />
    </div>
  );
}
