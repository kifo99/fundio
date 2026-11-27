export function ProductFiltersHeader({ onSetSortBy, onSetSelectedTags, sortBy, selectedTags }) {
  const activeCount = selectedTags.length + (sortBy ? 1 : 0);
  function clearAll() {
    onSetSortBy(null);
    onSetSelectedTags([]);
  }
  return (
    <div className="flex items-baseline justify-between">
      <h2 className="text-2xl font-bold text-[#3D5A45]">Filters</h2>
      {activeCount > 0 && (
        <button
          type="button"
          onClick={clearAll}
          className="text-sm font-semibold text-[#3D5A45] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D5A45] rounded"
        >
          Clear all ({activeCount})
        </button>
      )}
    </div>
  );
}
