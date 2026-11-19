export function Banner({ title, subtitle, className = '' }) {
  return (
    <div className={`w-full h-1/3 grid-rows-2 gap-4 ${className}`}>
      <h1 className="text-center font-bold uppercase text-8xl">{title}</h1>
      <h2 className="text-center text-3xl">{subtitle}</h2>
    </div>
  );
}
