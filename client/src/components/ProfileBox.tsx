import { Link } from "react-router-dom";
import { ProfileIcon } from "../assets/ProfileIcon";
import { FilledArrow } from "../assets/FilledArrow";
import { forwardRef } from "react";

interface ProfileBoxProps {
  handleProfileBoxMouseEnter: () => void;
  handleProfileBoxMouseLeave: () => void;
  handleProfileBoxBlur: () => void;
}

export const ProfileBox = forwardRef<HTMLDivElement, ProfileBoxProps>(
  (
    {
      handleProfileBoxMouseEnter,
      handleProfileBoxMouseLeave,
      handleProfileBoxBlur,
    },
    profileBoxRef
  ) => {
    return (
      <div
        className="relative flex flex-col bg-transparent cursor-pointer mr-[10px]"
        onMouseEnter={handleProfileBoxMouseEnter}
        onMouseLeave={handleProfileBoxMouseLeave}
        onBlur={handleProfileBoxBlur}
        ref={profileBoxRef}
      >
        <button className="relative">
          <ProfileIcon className=" size-[24px] self-center" />
          <div className="h-0 w-0  absolute left-[30%] bottom-[-23px] ml-[-7px] border-solid border-[7px] border-transparent">
            <FilledArrow className="-rotate-90  size-[14px]" />
          </div>
        </button>
        <div className="absolute border bg-popover top-[50px] right-0 w-[408px]">
          {[1, 2, 3, 4, 5].map((num) => (
            <div
              key={num}
              className="flex flex-row border border-border-secondary bg-popover opacity-50 hover:opacity-100 duration-150"
            >
              <div className="flex items-center justify-center p-[16px]">
                <Link to={"/movies"}>Test Picture</Link>
              </div>
              <div className="py-[16px] pr-[16px]">
                <Link to={"/movies"}>
                  <div className="text-popover-foreground">Test Header</div>
                  <div className="text-popover-foreground">Test Body</div>
                  <div>
                    <span className="text-secondary-foreground">Text Age</span>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
);
