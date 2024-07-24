import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { ModalContent } from "./ModalContent";
import { ModalPreview } from "./ModalPreview";

export const Modal = () => {
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
  } = useContext(ModalContext);
  const [style, setStyle] = useState<object>({});

  useEffect(() => {
    const { top, left, right, origin } = getPosition();

    setStyle({
      top: top,
      left: left,
      right: right,
      width: itemWidth,
      transform: "scale(0.75)",
    });

    setTimeout(() => {
      setStyle({
        width: itemWidth,
        top: top,
        left: left,
        right: right,
        transform: "scale(1) translateY(-100px)",
        transitionDuration: "200ms",
        // transformOrigin: origin,
      });
    }, 50);
  }, [isItemHovered, movie, posX, posY]);

  const getPosition = () => {
    let top = `${posY! + window.scrollY}px`;
    let left = "";
    let right = "";
    let origin = "";

    if (isLeftAlign || isMiddle) {
      left = `${posX}px`;
    } else {
      right = `${posX}px`;
    }

    origin = "center left";
    if (right !== "") {
      origin = "center right";
    } else if (isMiddle) {
      origin = "center";
    }

    return { top, left, right, origin };
  };

  const handleMouseLeave = () => {
    const { top, left, right } = getPosition();
    setTimeout(() => {
      setStyle({
        width: itemWidth,
        top: top,
        left: left,
        right: right,
        transform: `scale(1)`,
        transitionDuration: "300ms",
        transformOrigin: origin,
      });
    }, 100);

    setTimeout(() => {
      setIsItemHovered(false);
      setMovie(undefined);
      setPosX(undefined);
      setPosY(undefined);
      setStyle({});
      setIsLeftAlign(false);
      setIsMiddle(false);
      setItemWidth(0);
    }, 300);
  };

  return (
    <>
      {isItemHovered && (
        <div
          className={`flex flex-col absolute z-[3] rounded overflow-hidden ease-linear`}
          style={style}
          onMouseLeave={handleMouseLeave}
        >
          {movie && <ModalPreview movie={movie} />}
          <ModalContent />
        </div>
      )}
    </>
  );
};
