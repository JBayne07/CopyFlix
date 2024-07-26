import { useContext, useRef } from "react";
import { Movie } from "../../services/types";
import { PopoverContext } from "../../contexts/PopoverContext";
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
    setIsItemHovered,
    setMovie,
    setPosX,
    setPosY,
    setIsLeftAlign,
    setIsMiddle,
    setItemWidth,
  } = useContext(PopoverContext);
  const itemRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowDimensions();
  let timer: NodeJS.Timeout | null;

  const handleMouseOver = () => {
    if (timer) return;
    timer = setTimeout(() => {
      setModalState();
    }, 500);
  };

  const handleMouseLeave = () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
      setIsItemHovered(false);
    }
  };

  const setModalState = () => {
    setIsItemHovered(true);
    setMovie(movie);
    const positions = itemRef.current?.getBoundingClientRect();
    setPosY(positions!.top);
    setPosX(() => {
      if (positions) {
        if (positions.width + positions.x + width * 0.08 > width) {
          setIsLeftAlign(false);
          return width * 0.04;
        } else if (!isEdge) {
          setIsMiddle(true);
          return positions.left - width * 0.04;
        } else {
          setIsLeftAlign(true);
          return positions.left;
        }
      }
    });
    setItemWidth(1.5 * itemRef.current?.offsetWidth!);
  };

  return (
    <div
      className="relative flex flex-[0_0_20%] max-w-[20%] px-[0.2vw] items-center justify-center cursor-pointer"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      ref={itemRef}
    >
      {movie && (
        <img
          className="w-full aspect-video rounded-sm"
          src={movie.Src}
          alt=""
        />
      )}
    </div>
  );
};
