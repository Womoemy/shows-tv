"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useCallback, useEffect, useRef, useState } from "react";
// import { useSearchParams } from "next/navigation";

export default function Search({ placeholder, onSubmit: handleSubmit }) {
  const [query, setQuery] = useState("");
  return (
    // flex-1 flex-shrink-0
    <form
      className="relative flex w-full bg-white border rounded-3xl"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(query);
      }}
    >
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        type="text"
        id="searchBar"
        value={query}
        className="rounded-l-3xl peer block w-full border border-gray-200 py-[9px] pl-10 outline-none placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <button className="bg-[#BE123C] flex items-center text-white px-4 py-3 gap-x-3 rounded-3xl">
        <MagnifyingGlassIcon className="h-[18px] w-[18px] text-white peer-focus:text-gray-900" />
        <span>Search</span>
      </button>
    </form>
  );
}
