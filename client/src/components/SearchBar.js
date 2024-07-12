import { forwardRef } from "react"
import { SearchIcon } from "../resources/SearchIcon"

export const SearchBar = forwardRef(({handleSearchIconClick}, searchBarRef) => {
    return (
        <div className="border mr-[10px]">
            <div className="flex p-1">
                <button onClick={handleSearchIconClick} className="self-center mr-1">
                    <SearchIcon className="text-white h-10 size-[24px]" />
                </button>
                <input type="text" placeholder="Titles, people, genres" className="bg-black outline-none caret-white text-sm" onBlur={handleSearchIconClick} ref={searchBarRef}></input>
            </div>
        </div>
    )
})