import { X } from 'lucide-react';

export function Drawer({ className = '', onClose, isOpen, title, children }) {
  return (
    <>
      {/* Dark overlay behind the drawer */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />
      <aside
        aria-hidden={!isOpen}
        className={`fixed inset-y-0 right-0 z-50 flex w-full flex-col overflow-y-auto
          transition-[transform,visibility] duration-300 ease-in-out
          md:w-[15%] md:min-w-90
          ${isOpen ? 'visible translate-x-0' : 'invisible translate-x-full'}
          ${className}`}
      >
        <div className="flex items-center justify-between p-4">
          <button
            onClick={onClose}
            aria-label="Close"
            className="transition-colors duration-300 ease-in hover:text-red-600 active:text-red-600"
          >
            <X size={24} />
          </button>
          <h2 className="text-lg font-semibold">{title}</h2>
          <button onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>
        <div className="p-4">{children}</div>
      </aside>
    </>
  );
}
