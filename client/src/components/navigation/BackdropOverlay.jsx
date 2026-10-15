export function BackdropOverlay({ onSetIsOpen, isOpen }) {
  return (
    <div
      className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      onClick={() => onSetIsOpen(false)}
    />
  );
}
