export function AuthBackground({ url }) {
  return (
    <div
      style={{ backgroundImage: `url(${url})` }}
      className="hidden md:block bg-cover bg-center absolute inset-0 -z-10 w-full h-full"
    ></div>
  );
}
