export function CategoryHeader({ title }) {
  return (
    <div className="m-auto w-2/3 h-auto grid grid-rows-2 gap-3.5 justify-center pt-20 transition delay-200 duration-1000 ease-in-out hover:text-red-500 ">
      <h1 className="text-center font-bold uppercase text-8xl ">{title}</h1>
      <h2 className="text-center text-3xl">Unique pieces from our hands to your home</h2>
    </div>
  );
}
