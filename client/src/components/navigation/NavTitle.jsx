export function NavTitle({ className = '' }) {
  return (
    <div>
      <Link to={'/'}>
        <h1 className={`hover:text-[#373737] font-bold ${className}`}>fundio</h1>
      </Link>
    </div>
  );
}
