import { useMemo } from 'react';
import { useCategoryProducts } from '../../queries/product.queries';

export function ProductFiltersTags({ selectedTags, toggleTag }) {
  const { data: categories, isLoading, isError } = useCategoryProducts();

  const tags = useMemo(
    () => [
      ...new Set(
        categories?.flatMap((category) => category.products.flatMap((prod) => prod.tags)) ?? [],
      ),
    ],
    [categories],
  );

  if (isLoading) return <div className="p-6 text-[#3D5A45]">Loading filters…</div>;
  if (isError) return <div className="p-6 text-red-700">Couldn't load filters.</div>;

  return (
    <fieldset>
      <legend className="mb-3 text-lg font-bold text-[#3D5A45]">Tags</legend>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <label key={tag} className="cursor-pointer">
            <input
              type="checkbox"
              name={tag}
              checked={selectedTags.includes(tag)}
              onChange={() => toggleTag(tag)}
              className="peer sr-only"
            />
            <span className="inline-block rounded-full border-2 border-[#807e7e]/60 px-3 py-1 text-base capitalize text-neutral-700 transition-colors hover:border-[#3D5A45] peer-checked:border-[#3D5A45] peer-checked:bg-[#3D5A45] peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-[#3D5A45] peer-focus-visible:ring-offset-2">
              {tag.replace(/-/g, ' ')}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
