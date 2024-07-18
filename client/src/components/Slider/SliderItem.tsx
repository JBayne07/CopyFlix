import { useContext } from "react";
import { Movie } from "../../services/types";
import { ModalContext } from "../../contexts/ModalContext";

interface SliderItemProps {
  movie: Movie;
  key: any;
  width: number;
}

export const SliderItem = ({ movie, width }: SliderItemProps): JSX.Element => {
  const { isItemHovered, setIsItemHovered, setMovie } =
    useContext(ModalContext);
  const handleMouseEnter = () => {
    console.log("Mouse Entered", movie.Title);
    setIsItemHovered((prev) => !prev);
    setMovie(movie);
    console.log(isItemHovered);
  };

  const handleMouseLeave = () => {
    console.log("Mouse Leave", movie.Title);
    setIsItemHovered((prev) => !prev);
    setMovie(undefined);
  };

  return (
    <div
      className="flex-[0_0_20%] max-w-[20%] px-[0.2vw]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {movie && (
        <img className="w-[100%] aspect-video rounded" src={movie.Src} alt="" />
      )}
    </div>
  );
};
