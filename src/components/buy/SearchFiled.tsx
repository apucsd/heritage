"use client";
import React from "react";

const SearchFiled = ({ setSearchText }: { setSearchText: any }) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        onChange={(e) => setSearchText(e.target.value)}
        type="search"
        id="default-search"
        className="block w-full p-4 ps-10 text-sm text-gray-900 border "
        placeholder="Search Properties..."
      />
    </div>
  );
};

export default SearchFiled;
