import { useState } from 'react';
import { Divider } from '../ui/Divider';
import { ProductFiltersHeader } from './ProductFiltersHeader';
import { ProductFiltersSort } from './ProductFiltersSort';
import { ProductFiltersTags } from './ProductFiltersTags';

export function ProductFilters({ onApply }) {
  const [sortBy, setSortBy] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);

  function toggleTag(tag) {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    onApply?.({ sortBy, tags: selectedTags });
  }

  return (
    <aside className="self-start border-b-2 border-[#807e7e]/40 md:sticky md:top-4 md:border-b-0 md:border-r-2">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-6">
        {/* Header */}
        <ProductFiltersHeader
          onSetSortBy={setSortBy}
          onSetSelectedTags={setSelectedTags}
          sortBy={sortBy}
          selectedTags={selectedTags}
        />
        {/* Sort */}
        <ProductFiltersSort sortBy={sortBy} onSetSortBy={setSortBy} />
        <Divider className="w-full" />

        {/* Tags */}
        <ProductFiltersTags selectedTags={selectedTags} toggleTag={toggleTag} />

        <Divider className="w-full" />

        <button
          type="submit"
          className="w-full rounded-xl bg-[#3D5A45] px-5 py-3 text-lg font-bold text-white transition-colors hover:bg-[#2f4636] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D5A45] focus-visible:ring-offset-2"
        >
          Apply filters
        </button>
      </form>
    </aside>
  );
}
