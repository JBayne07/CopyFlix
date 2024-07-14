import { Link } from "react-router-dom";
import { NotificationIcon } from "../assets/NotificationIcon";
import { ProfileIcon } from "../assets/ProfileIcon";
import { SearchBar } from "./SearchBar";
import { useEffect, useRef, useState } from "react";
import { NotificationBox } from "./NotificationBox";
import { ProfileBox } from "./ProfileBox";
import { SearchIcon } from "../assets/SearchIcon";
import NetflixIcon from "../assets/Netflix_Logo_RGB.png";

interface HeaderProps {
  isHeaderTransparent: boolean;
}

export const Header = ({ isHeaderTransparent }: HeaderProps) => {
  const [notificationBoxVisible, setNotificationBoxVisible] =
    useState<boolean>(false);
  const [profileBoxVisible, setProfileBoxVisible] = useState<boolean>(false);
  const notificationBoxRef = useRef<HTMLDivElement>(null);
  const profileBoxRef = useRef<HTMLDivElement>(null);
  let timeout: NodeJS.Timeout | null;

  const clearTimer = () => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };

  const handleNotificationIconMouseEnter = () => {
    clearTimer();
    setProfileBoxVisible(false);
    if (!notificationBoxVisible) {
      setNotificationBoxVisible(true);
    }
  };

  const handleNotificationIconMouseLeave = () => {
    clearTimer();
    if (notificationBoxVisible) {
      timeout = setTimeout(() => {
        setNotificationBoxVisible(false);
      }, 300);
    }
  };

  const handleNotificationIconBlur = () => {
    clearTimer();
    setNotificationBoxVisible(false);
  };

  const handleProfileBoxMouseEnter = () => {
    clearTimer();
    setNotificationBoxVisible(false);
    if (!profileBoxVisible) {
      setProfileBoxVisible(true);
    }
  };

  const handleProfileBoxMouseLeave = () => {
    clearTimer();
    if (profileBoxVisible) {
      timeout = setTimeout(() => {
        setProfileBoxVisible(false);
      }, 300);
    }
  };

  const handleProfileBoxBlur = () => {
    clearTimer();
    setProfileBoxVisible(false);
  };

  useEffect(() => {
    if (notificationBoxVisible && notificationBoxRef.current) {
      notificationBoxRef.current.focus();
    }
    if (profileBoxVisible && profileBoxRef.current) {
      profileBoxRef.current.focus();
    }
  }, [notificationBoxVisible, profileBoxVisible]);

  return (
    <div
      className={
        "h-[70px] px-[40px] flex flex-row w-screen justify-between sticky top-0 z-[2] " +
        (isHeaderTransparent ? "" : " bg-black")
      }
    >
      <div className="flex items-center ">
        <Link
          to="/"
          className="text-red-600 font-bold self-center text-3xl mr-[25px]"
        >
          <img src={NetflixIcon} className="h-12" alt="Netflix" />
        </Link>
        <Link
          to="/"
          className="text-white text-sm ml-[18px] hover:text-gray-300"
        >
          Home
        </Link>
        <Link
          to="/"
          className="text-white text-sm ml-[18px] hover:text-gray-300"
        >
          TV shows
        </Link>
        <Link
          to="movies"
          className="text-white text-sm ml-[18px] hover:text-gray-300"
        >
          Movies
        </Link>
        <Link
          to="/"
          className="text-white text-sm ml-[18px] hover:text-gray-300"
        >
          New & Popular
        </Link>
        <Link
          to="/"
          className="text-white text-sm ml-[18px] hover:text-gray-300"
        >
          My List
        </Link>
        <Link
          to="/"
          className="text-white text-sm ml-[18px] hover:text-gray-300"
        >
          Browse by Languages
        </Link>
      </div>

      <div className="flex items-center">
        {/* <SearchBar
          handleSearchIconClick={handleSearchIconClick}
          searchBarVisible={searchBarVisible}
          ref={searchBarRef}
        /> */}
        <SearchBar />
        {/* <button onClick={handleSearchIconClick} className="mr-[10px]">
          <SearchIcon className="text-white h-10 size-[24px]" />
        </button> */}

        {/* {searchBarVisible ? (
          <SearchBar
            handleSearchIconClick={handleSearchIconClick}
            ref={searchBarRef}
          />
        ) : (
          <button onClick={handleSearchIconClick} className="mr-[10px]">
            <SearchIcon className="text-white h-10 size-[24px]" />
          </button>
        )} */}

        {notificationBoxVisible ? (
          <NotificationBox
            handleNotificationIconMouseEnter={handleNotificationIconMouseEnter}
            handleNotificationIconMouseLeave={handleNotificationIconMouseLeave}
            handleNotificationIconBlur={handleNotificationIconBlur}
            ref={notificationBoxRef}
          />
        ) : (
          <button
            onMouseEnter={handleNotificationIconMouseEnter}
            className="mr-[10px]"
          >
            <NotificationIcon className="text-white h-10 size-[24px]" />
          </button>
        )}
        {profileBoxVisible ? (
          <ProfileBox
            handleProfileBoxMouseEnter={handleProfileBoxMouseEnter}
            handleProfileBoxMouseLeave={handleProfileBoxMouseLeave}
            handleProfileBoxBlur={handleProfileBoxBlur}
            ref={profileBoxRef}
          />
        ) : (
          <button
            onMouseEnter={handleProfileBoxMouseEnter}
            className="mr-[10px]"
          >
            <ProfileIcon className="text-white h-10 size-[24px]" />
          </button>
        )}
      </div>
    </div>
  );
};
