import { useEffect, useRef, useState } from "react";
import { SearchIcon } from "../assets/SearchIcon";

export const SearchBar = () => {
  const [searchBarVisible, setSearchBarVisible] = useState<boolean>(false);
  const searchBarRef = useRef<HTMLInputElement>(null);

  const handleSearchIconClick = () => {
    setSearchBarVisible((prev) => !prev);
  };

  useEffect(() => {
    if (searchBarVisible && searchBarRef.current) {
      searchBarRef.current.focus();
    }
  });

  return (
    <div className={`mr-[10px] ${searchBarVisible ? "border" : ""}`}>
      <div className="flex">
        <button
          onClick={handleSearchIconClick}
          className={`self-center ${searchBarVisible ? "pr-[10px]" : ""}`}
        >
          <SearchIcon className="text-white h-10 size-[24px]" />
        </button>
        <input
          type="text"
          placeholder="Titles, people, genres"
          className={`bg-black outline-none caret-white text-sm ${
            searchBarVisible ? "visible" : "hidden"
          }`}
          onBlur={handleSearchIconClick}
          ref={searchBarRef}
        />
      </div>
    </div>
  );
};
