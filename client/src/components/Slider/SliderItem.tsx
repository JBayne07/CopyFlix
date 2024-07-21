import { useContext, useRef } from "react";
import { Movie } from "../../services/types";
import { ModalContext } from "../../contexts/ModalContext";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

interface SliderItemProps {
  movie: Movie;
  isEdge: boolean;
  itemWidth: number;
}

export const SliderItem = ({
  movie,
  isEdge,
  itemWidth,
}: SliderItemProps): JSX.Element => {
  const {
    isItemHovered,
    setIsItemHovered,
    setMovie,
    setPosX,
    setPosY,
    setLeftAlign,
  } = useContext(ModalContext);
  const itemRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowDimensions();

  const handleMouseEnter = () => {
    setIsItemHovered(true);
    setMovie(movie);
    const positions = itemRef.current?.getBoundingClientRect();

    setPosY(positions?.top);
    setPosX(() => {
      if (positions) {
        if (positions.width + positions.x + width * 0.08 > width) {
          setLeftAlign(false);
          return width * 0.04;
        } else if (!isEdge) {
          setLeftAlign(true);
          return positions.left - width * 0.04;
        } else {
          setLeftAlign(true);
          return positions.left;
        }
      }
    });
  };

  return (
    <div
      className="relative flex-[0_0_20%] max-w-[20%] px-[0.2vw]"
      onMouseEnter={handleMouseEnter}
      ref={itemRef}
    >
      {movie && (
        <img
          className="w-[100%] aspect-video rounded-sm"
          src={movie.Src}
          alt=""
        />
      )}
    </div>
  );
};
