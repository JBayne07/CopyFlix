import { Movie } from "../../services/types";

interface SliderItemProps {
  movie: Movie;
  key: any;
  width: number;
}

export const SliderItem = ({ movie, width }: SliderItemProps): JSX.Element => {
  return (
    <div className="flex-[0_0_20%] max-w-[20%] px-[0.2vw]">
      {movie && (
        <img className="w-[100%] aspect-video rounded" src={movie.Src} alt="" />
      )}
    </div>
  );
};
