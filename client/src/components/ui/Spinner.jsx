export function Spinner({ className = '' }) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={`flex min-h-[50vh] items-center justify-center ${className}`}
    >
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600" />
    </div>
  );
}
