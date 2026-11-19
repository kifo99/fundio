import { Banner } from '../ui/Banner';

export function CategoryHeader({ title, bg }) {
  return (
    <div
      className={`${bg} bg-cover bg-center bg-no-repeat w-full grid grid-rows-2 gap-3.5 justify-center pt-20  transition delay-200 duration-1000 ease-in-out hover:text-red-500 `}
    >
      <Banner
        className={'text-[#d7eef2] text-shadow-lg/40 text-shadow-[#0d1416]'}
        title={title}
        subtitle={'Unique pieces from our hands to your home'}
      />
    </div>
  );
}
