import { Link } from "react-router-dom";
import { NotificationIcon } from "../assets/NotificationIcon";
import { ProfileIcon } from "../assets/ProfileIcon";
import { SearchBar } from "./SearchBar";
import { useEffect, useRef, useState } from "react";
import { NotificationBox } from "./NotificationBox";
import { ProfileBox } from "./ProfileBox";
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
      }, 200);
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
      }, 200);
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
        (isHeaderTransparent ? "bg-transparent" : " bg-primary")
      }
    >
      <div className="flex items-center mr-[10px]">
        <Link
          to="/"
          className="text-primary-foreground font-bold self-center text-3xl mr-[25px]"
        >
          <img src={NetflixIcon} className="h-12" alt="Netflix" />
        </Link>
        <Link
          to="/"
          className="text-sm ml-[18px] text-popout-primary hover:text-accent-foreground"
        >
          Home
        </Link>
        <Link to="/" className="text-sm ml-[18px] hover:text-accent-foreground">
          TV shows
        </Link>
        <Link
          to="movies"
          className="text-sm ml-[18px] hover:text-accent-foreground"
        >
          Movies
        </Link>
        <Link to="/" className="text-sm ml-[18px] hover:text-accent-foreground">
          New & Popular
        </Link>
        <Link to="/" className="text-sm ml-[18px] hover:text-accent-foreground">
          My List
        </Link>
        <Link to="/" className="text-sm ml-[18px] hover:text-accent-foreground">
          Browse by Languages
        </Link>
      </div>

      <div className="flex items-center">
        <SearchBar />

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
            <NotificationIcon className=" size-[24px]" />
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
            <ProfileIcon className=" size-[24px]" />
          </button>
        )}
      </div>
    </div>
  );
};
