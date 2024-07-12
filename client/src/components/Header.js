import { Link } from "react-router-dom"
import { SearchIcon } from "../resources/SearchIcon"
import { NotificationIcon } from "../resources/NotificationIcon"
import { ProfileIcon } from "../resources/ProfileIcon"
import { SearchBar } from "./SearchBar"
import { useEffect, useRef, useState } from "react"
import { NotificationBox } from "./NotificationBox"
import { ProfileBox } from "./ProfileBox"

export const Header = ({isHeaderTransparent}) =>{
    const [searchBarVisible, setSearchBarVisible] = useState(false)
    const [notificationBoxVisible, setNotificationBoxVisible] = useState(false)
    const [profileBoxVisible, setProfileBoxVisible] = useState(false)
    const searchBarRef = useRef(null);
    const notificationBoxRef = useRef(null);
    const profileBoxRef = useRef(null);
    let timeout;

    const handleSearchIconClick = () => {
        setSearchBarVisible(prev => !prev);
    }

    const clearTimer = () => {
        if(timeout){
            clearTimeout(timeout);
            timeout = null;
        }
    }

    const handleNotificationIconMouseEnter = () => {
        clearTimer();
        setProfileBoxVisible(false);
        if(!notificationBoxVisible){
            setNotificationBoxVisible(true);
        }
    }

    const handleNotificationIconMouseLeave = () => {
        clearTimer();
        if(notificationBoxVisible){
            timeout = setTimeout(() => {
                setNotificationBoxVisible(false);
            }, 300);
        }
    }

    const handleNotificationIconBlur = () => {
        clearTimer();
        setNotificationBoxVisible(false);
    }

    const handleProfileBoxMouseEnter = () => {
        clearTimer();
        setNotificationBoxVisible(false);
        if (!profileBoxVisible) {
            setProfileBoxVisible(true);
        }
    }

    const handleProfileBoxMouseLeave = () => {
        clearTimer();
        if (profileBoxVisible) {
            timeout = setTimeout(() => {
                setProfileBoxVisible(false);
            }, 300);
        }
    }

    const handleProfileBoxBlur = () => {
        clearTimer();
        setProfileBoxVisible(false);
    }

    useEffect(() => {
        if (searchBarVisible) {
            searchBarRef.current.focus();
        }
        if(notificationBoxVisible){
            notificationBoxRef.current.focus();
        }
        if(profileBoxVisible) {
            profileBoxRef.current.focus();
        }
    }, [searchBarVisible, notificationBoxVisible, profileBoxVisible])

    return (
        <div className={"h-[70px] px-[40px] flex flex-row w-screen justify-between sticky top-0 z-[2] " + (isHeaderTransparent ? "" : " bg-black")} >
            <div className="flex items-center ">
                <Link to="/" className="text-red-600 font-bold self-center text-3xl mr-[25px]">
                    <img src={require("../resources/Netflix_Logo_RGB.png")} className="h-12" alt="Netflix" />
                </Link>
                <Link to="/" className="text-white text-sm ml-[18px] hover:text-gray-300">Home</Link>
                <Link to="/" className="text-white text-sm ml-[18px] hover:text-gray-300">TV shows</Link>
                <Link to="movies" className="text-white text-sm ml-[18px] hover:text-gray-300">Movies</Link>
                <Link to="/" className="text-white text-sm ml-[18px] hover:text-gray-300">New & Popular</Link>
                <Link to="/" className="text-white text-sm ml-[18px] hover:text-gray-300">My List</Link>
                <Link to="/" className="text-white text-sm ml-[18px] hover:text-gray-300">Browse by Languages</Link>
            </div>
            
            <div className="flex items-center">
                {searchBarVisible ? ( <SearchBar handleSearchIconClick={handleSearchIconClick} ref={searchBarRef}/>) : 
                (
                    <button onClick={handleSearchIconClick} className="mr-[10px]">
                        <SearchIcon className="text-white h-10 size-[24px]" />
                    </button>
                )}
                {notificationBoxVisible ? <NotificationBox handleNotificationIconMouseEnter={handleNotificationIconMouseEnter} handleNotificationIconMouseLeave={handleNotificationIconMouseLeave} handleNotificationIconBlur={handleNotificationIconBlur} ref={notificationBoxRef}/> :
                (
                    <button onMouseEnter={handleNotificationIconMouseEnter} className="mr-[10px]">
                        <NotificationIcon className="text-white h-10 size-[24px]"/>
                    </button>
                )}
                {profileBoxVisible ? <ProfileBox handleProfileBoxMouseEnter={handleProfileBoxMouseEnter} handleProfileBoxMouseLeave={handleProfileBoxMouseLeave} handleProfileBoxBlur={handleProfileBoxBlur} ref={profileBoxRef} /> :
                (
                    <button onMouseEnter={handleProfileBoxMouseEnter} className="mr-[10px]">
                        <ProfileIcon className="text-white h-10 size-[24px]" />
                    </button>
                )}
            </div>
        </div>
    )
}