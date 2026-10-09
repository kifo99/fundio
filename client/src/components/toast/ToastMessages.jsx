import { BadgeCheck, BadgeX, BadgeAlert, BadgeInfo, Icon, X } from 'lucide-react';
import { toast } from 'sonner';

const variants = {
  success: { icon: BadgeCheck, styles: 'border-green-500 bg-green-50 text-green-800' },
  error: { icon: BadgeX, styles: 'border-red-500 bg-red-50 text-red-800' },
  warning: { icon: BadgeAlert, styles: 'border-yellow-500 bg-yellow-50 text-yellow-800' },
  info: { icon: BadgeInfo, styles: 'border-blue-500 bg-blue-50 text-blue-800' },
};

export function ToastMessage({ id, type, message }) {
  const { icon: Icon, styles } = variants[type];

  return (
    <div className={`flex w-80 items-start gap-3 rounded-lg border-l-4 p-4 shadow-lg ${styles}`}>
      <Icon size={20} className="mt-0.5 shrink-0" />
      <p className="flex-1 text-sm font-medium">{message}</p>
      <button onClick={() => toast.dismiss(id)} aria-label="Close">
        <X size={16} />
      </button>
    </div>
  );
}
