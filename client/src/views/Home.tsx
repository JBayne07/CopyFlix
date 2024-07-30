import { useContext, useEffect, useState } from "react";
import { MovieRow } from "../components/MovieRow";
import { Movie } from "../services/types";
import { getMovies } from "@/services/MovieService";
import { PopoverContext } from "@/contexts/PopoverContext";

export const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const { setIsHeaderVisible, setIsHeaderBodyVisible, setIsFooterVisible } =
    useContext(PopoverContext);

  useEffect(() => {
    const init = async () => {
      setMovies(await getMovies());
    };
    setIsHeaderVisible(true);
    setIsHeaderBodyVisible(true);
    setIsFooterVisible(true);
    init();
  }, []);

  return (
    <div className="h-full w-full relative">
      <div className="h-[41vw] relative">
        <div className="relative block mt-[-70px] z-0">
          <div className="relative left-0 top-0 right-0 w-full z-0">
            <div className="absolute w-full z-0">
              <div className="h-[56.25vw] w-full z-0">
                <img
                  className="w-full h-full opacity-100 z-0"
                  src="https://via.placeholder.com/310/343333?text=Main Window"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <MovieRow
        title="Continue Watching"
        movies={movies}
        className="my-[3vw]"
      />
      <MovieRow
        title="My List"
        movies={movies}
        className="mt-[30px] mb-[30px]"
      />
      <MovieRow
        title="Recommended"
        movies={movies}
        className="mt-[30px] mb-[30px]"
      />
      <MovieRow
        title="Award Winning"
        movies={movies}
        className="mt-[30px] mb-[30px]"
      />
    </div>
  );
};
