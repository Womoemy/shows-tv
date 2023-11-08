"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Search({ placeholder }) {
  return (
    // flex-1 flex-shrink-0
    <div className="relative flex w-full bg-white border rounded-3xl">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="rounded-l-3xl peer block w-full border border-gray-200 py-[9px] pl-10 outline-none placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
      <button className="bg-[#BE123C] flex items-center text-white px-4 py-3 gap-x-3 rounded-3xl">
        <MagnifyingGlassIcon className="h-[18px] w-[18px] text-white peer-focus:text-gray-900" />
        <span>Search</span>
      </button>
    </div>
  );
}
