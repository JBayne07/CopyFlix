import { Link } from "react-router-dom";
import { NotificationIcon } from "../assets/NotificationIcon";
import { FilledArrow } from "../assets/FilledArrow";
import { forwardRef } from "react";

interface NotificationBoxProps {
  handleNotificationIconMouseEnter: () => void;
  handleNotificationIconMouseLeave: () => void;
  handleNotificationIconBlur: () => void;
}

export const NotificationBox = forwardRef<HTMLDivElement, NotificationBoxProps>(
  (
    {
      handleNotificationIconMouseEnter,
      handleNotificationIconMouseLeave,
      handleNotificationIconBlur,
    },
    notificationBoxRef
  ) => {
    return (
      <div
        className="relative flex flex-col bg-transparent cursor-pointer mr-[10px]"
        onMouseEnter={handleNotificationIconMouseEnter}
        onMouseLeave={handleNotificationIconMouseLeave}
        onBlur={handleNotificationIconBlur}
        ref={notificationBoxRef}
      >
        <button className="relative">
          <NotificationIcon className="text-white size-[24px] self-center" />
          <div className="h-0 w-0 text-white absolute left-[30%] bottom-[-23px] ml-[-7px] border-solid border-[7px] border-transparent">
            <FilledArrow className="-rotate-90 text-white size-[14px]" />
          </div>
        </button>
        <div className="absolute border top-[50px] right-0 w-[408px]">
          {[1, 2, 3, 4, 5].map((num) => (
            <div
              key={num}
              className="flex flex-row border bg-black opacity-50 hover:opacity-100 duration-150"
            >
              <div className="text-white p-[16px]">
                <Link to={"/movies"}>Test Picture</Link>
              </div>
              <div className="py-[16px] pr-[16px]">
                <Link to={"/movies"}>
                  <div className="text-white">Test Header</div>
                  <div className="text-white">Test Body</div>
                  <div>
                    <span className="text-white">Text Age</span>
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
