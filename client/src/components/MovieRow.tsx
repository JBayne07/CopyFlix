import { MicroRightChevron } from "../assets/MicroRightChevron";
import { Slider } from "./Slider/Slider";
import { Movie } from "../services/types";

interface MovieRowProps {
  title: string;
  movies: Movie[];
  className: string;
}

export const MovieRow = ({
  title,
  movies,
  className = "",
}: MovieRowProps): JSX.Element => {
  return (
    <div className={"group/div h-1/5 relative z-[1] " + className}>
      <div className="flex ml-[4%] h-1/5">
        <button className="flex group/heading">
          <h1 className="text-2xl pl-[0.2vw]">{title}</h1>
          <h1 className="hidden group-hover/heading:block text-sm text-explore self-end ml-3">
            Explore All
          </h1>
          <MicroRightChevron className="hidden group-hover/div:block text-explore self-end h-5" />
        </button>
      </div>
      <Slider movies={movies} />
    </div>
  );
};
