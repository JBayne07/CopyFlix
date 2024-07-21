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
    leftAlign,
  } = useContext(ModalContext);
  const [style, setStyle] = useState<object>({});

  useEffect(() => {
    let position: {
      top: string;
      left?: string;
      right?: string;
      opacity?: string;
    } = {
      top: `${posY}px`,
    };
    if (leftAlign) {
      position["left"] = `${posX}px`;
    } else {
      position["right"] = `${posX}px`;
    }
    setStyle(position);
  }, [movie, posX, posY]);

  const handleMouseLeave = () => {
    setIsItemHovered(false);
    setMovie(undefined);
    setPosX(undefined);
    setPosY(undefined);
  };

  return (
    <>
      {isItemHovered && (
        <div
          className={`flex flex-col absolute w-[300px] z-50 rounded overflow-hidden`}
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
