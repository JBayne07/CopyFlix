import { useContext, useEffect, useState } from "react";
import { PopoverContext } from "../../contexts/PopoverContext";
import { PopoverContent } from "./PopoverContent";
import { PopoverPreview } from "./PopoverPreview";
import { Modal } from "../Modal/Modal";
import { ModalBackdrop } from "../Modal/ModalBackdrop";

export const Popover = () => {
  const {
    isItemHovered,
    setIsItemHovered,
    movie,
    setMovie,
    posY,
    setPosY,
    posX,
    setPosX,
    isLeftAlign,
    setIsLeftAlign,
    isMiddle,
    setIsMiddle,
    itemWidth,
    setItemWidth,
    isModalOpen,
  } = useContext(PopoverContext);
  const [style, setStyle] = useState<object>({});

  useEffect(() => {
    const { top, left, right, origin } = getPosition();

    setStyle({
      top: top,
      left: left,
      right: right,
      width: itemWidth,
      transform: `scale(0.5)`,
      transformOrigin: origin,
    });

    setTimeout(() => {
      setStyle({
        width: itemWidth,
        top: top,
        left: left,
        right: right,
        transform: "scale(1) translateY(-100px)",
        transitionDuration: "150ms",
        transformOrigin: origin,
      });
    }, 50);
  }, [isItemHovered, movie, posX, posY]);

  const handleMouseLeave = () => {
    const { top, left, right } = getPosition();
    setTimeout(() => {
      setStyle({
        width: itemWidth,
        top: top,
        left: left,
        right: right,
        transform: `scale(0.5)`,
        transitionDuration: "200ms",
        transformOrigin: origin,
      });
    }, 100);

    setTimeout(() => {
      setIsItemHovered(false);
      setPosX(undefined);
      setPosY(undefined);
      setStyle({});
      setIsLeftAlign(false);
      setIsMiddle(false);
      setItemWidth(0);
      if (!isModalOpen) setMovie(undefined);
    }, 200);
  };

  const getPosition = () => {
    let top = `${posY! + window.scrollY}px`;
    let left = "";
    let right = "";
    let origin = "";

    if (isLeftAlign || isMiddle) {
      left = `${posX! + 2}px`;
    } else {
      right = `${posX! + 2}px`;
    }

    origin = "center left";
    if (right !== "") {
      origin = "center right";
    } else if (isMiddle) {
      origin = "center";
    }

    return { top, left, right, origin };
  };

  return (
    <>
      {isItemHovered && (
        <div
          className={`flex flex-col absolute z-[3] rounded overflow-hidden ease-linear`}
          style={style}
          onMouseLeave={handleMouseLeave}
        >
          <PopoverPreview />
          <PopoverContent />
        </div>
      )}
      {isModalOpen && (
        <>
          <Modal />
          <ModalBackdrop />
        </>
      )}
    </>
  );
};
