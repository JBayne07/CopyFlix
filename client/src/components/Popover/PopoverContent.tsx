import { Link } from "react-router-dom";
import { PlayIcon } from "../../assets/PlayIcon";
import { PlusIcon } from "../../assets/PlusIcon";
import { CheckIcon } from "../../assets/CheckIcon";
import { XIcon } from "../../assets/XIcon";
import { DownChevron } from "../../assets/DownChevron";
import { PopoverButton } from "./PopoverButton";
import { ThumbsUpIcon } from "@/assets/ThumbsUpIcon";
import { DoubleThumbsUpIcon } from "@/assets/DoubleThumbsUpIcon";
import { useContext, useRef, useState } from "react";
import { PopoverContext } from "@/contexts/PopoverContext";

export const PopoverContent = (): JSX.Element => {
  const { setIsModalOpen, setWindowScroll } = useContext(PopoverContext);
  const [isLikeIconHovered, setIsLikeIconHovered] = useState<boolean>(false);
  const likeIconRef = useRef<HTMLButtonElement>(null);
  const [style, setStyle] = useState<object>({});

  const handleMouseOver = () => {
    console.log(likeIconRef.current?.offsetLeft);
    setStyle({
      left: `${likeIconRef.current?.offsetLeft! - likeIconRef.current?.offsetWidth! - 3 * 4}px`,
    });
    setIsLikeIconHovered(true);
  };

  const handleMouseLeave = () => {
    setIsLikeIconHovered(false);
  };

  const openModal = () => {
    setWindowScroll(window.scrollY);
    setIsModalOpen(true);
  };

  return (
    <div
      className="flex flex-col p-4 bg-background z-[3] cursor-pointer"
      onClick={openModal}
    >
      <div className="flex flex-row gap-1 items-center mb-2 relative ">
        <Link
          to="/Watch"
          className="flex justify-center items-center m-1 w-[2.4vw] h-[2.4vw] bg-popout-primary rounded-full"
        >
          <PlayIcon className="size-3 text-background" />
        </Link>

        <PopoverButton className="m-1">
          <PlusIcon className="size-3" />
        </PopoverButton>
        <PopoverButton className="m-1">
          <XIcon className="size-3" />
        </PopoverButton>
        {/* <PopoverButton>
          <CheckIcon className="size-3" />
        </PopoverButton> */}
        <PopoverButton
          className="m-1"
          handleMouseOver={handleMouseOver}
          ref={likeIconRef}
        >
          <ThumbsUpIcon className="size-3" />
        </PopoverButton>
        {isLikeIconHovered && (
          <div className=" w-fit h-full z-[4] absolute" style={style}>
            <div
              className="flex flex-row rounded-full bg-secondary"
              onMouseLeave={handleMouseLeave}
            >
              <PopoverButton className="m-1">
                <DoubleThumbsUpIcon className="size-3" />
              </PopoverButton>
              <PopoverButton className="m-1">
                <DoubleThumbsUpIcon className="size-3" />
              </PopoverButton>
              <PopoverButton className="m-1">
                <DoubleThumbsUpIcon className="size-3" />
              </PopoverButton>
            </div>
          </div>
        )}
        <PopoverButton
          className="ml-auto my-1 mr-1"
          handleMouseClick={openModal}
        >
          <DownChevron className="size-3" />
        </PopoverButton>
      </div>
      <span className="text-sm text-match">Percentage Match</span>
      <span className="text-sm text-popout-secondary">Episode Count</span>
      <span className="text-sm text-popout-primary">Genres</span>
    </div>
  );
};
