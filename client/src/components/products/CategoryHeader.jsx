import { CategoryList } from './CategoryList';

// Category header Layout:
//  - Title of category
//  - Display active categories and other categories
export function CategoryHeader({ title }) {
  return (
    <div className={`w-full grid grid-rows-2 gap-3.5 justify-center pt-20`}>
      <h1 className="text-center font-bold uppercase text-5xl transition delay-200 duration-1000 ease-in-out hover:text-red-500">
        {title}
      </h1>
      <CategoryList className={'flex flex-row justify-between text-center text-2xl'} />
    </div>
  );
}
