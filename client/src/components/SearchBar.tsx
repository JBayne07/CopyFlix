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
  }, [searchBarVisible]);

  return (
    <div
      className={`mr-[10px] flex ${searchBarVisible ? "border bg-black" : ""}`}
    >
      <button
        onClick={handleSearchIconClick}
        className={`self-center ${searchBarVisible ? "pr-[10px]" : ""}`}
      >
        <SearchIcon className=" h-10 size-[24px]" />
      </button>
      <input
        type="text"
        placeholder="Titles, people, genres"
        className={`bg-black outline-none caret-white text-sm transition-all  ease-in-out ${
          searchBarVisible ? "w-[20vw] duration-500" : "w-0 duration-0"
        }`}
        onBlur={handleSearchIconClick}
        ref={searchBarRef}
      />
    </div>
  );
};
