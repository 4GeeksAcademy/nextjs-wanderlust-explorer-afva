"use client";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div>
      <label
        htmlFor="experience-search"
        className="mb-1 block text-sm font-medium text-slate-800"
      >
        Search by title
      </label>
      <input
        id="experience-search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search experiences"
        className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-950 outline-none focus:border-sky-700 focus:ring-2 focus:ring-sky-700/20"
      />
    </div>
  );
}