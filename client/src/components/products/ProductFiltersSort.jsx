export function ProductFiltersSort({ sortBy, onSetSortBy }) {
  const SORT_OPTIONS = [
    { value: 'lowest', label: 'Lowest price' },
    { value: 'highest', label: 'Highest price' },
    { value: 'newest', label: 'New products' },
  ];

  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="mb-2 text-lg font-bold text-[#3D5A45]">Sort by</legend>
      {SORT_OPTIONS.map(({ value, label }) => (
        <label key={value} className="group cursor-pointer">
          <input
            type="radio"
            name="sortBy"
            value={value}
            checked={sortBy === value}
            onChange={() => onSetSortBy(value)}
            className="peer sr-only"
          />
          <span className="flex items-center gap-3 rounded-xl border border-transparent px-3 py-2 text-lg text-neutral-700 transition-colors hover:bg-[#3D5A45]/10 peer-checked:bg-[#3D5A45]/10 peer-checked:font-semibold peer-checked:text-[#3D5A45] peer-focus-visible:ring-2 peer-focus-visible:ring-[#3D5A45]">
            <span
              aria-hidden="true"
              className={`grid h-5 w-5 place-items-center rounded-full border-2 transition-colors ${
                sortBy === value ? 'border-[#3D5A45]' : 'border-[#807e7e]'
              }`}
            >
              <span
                className={`h-2.5 w-2.5 rounded-full bg-[#3D5A45] transition-transform ${
                  sortBy === value ? 'scale-100' : 'scale-0'
                }`}
              />
            </span>
            {label}
          </span>
        </label>
      ))}
    </fieldset>
  );
}
