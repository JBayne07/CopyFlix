import { useEffect, useState } from "react";
import { MovieRow } from "../components/MovieRow";
import { Movie } from "../services/types";
import { ModalProvider } from "../contexts/ModalContext";
import { Modal } from "../components/Modal/Modal";

export const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const url = "http://localhost:8000/movies";
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovies(data);
      });
  }, []);

  return (
    <div>
      <div className="h-[41vw] relative z-[1]">
        <div className="relative block mt-[-70px] z-0">
          <div className="relative left-0 top-0 right-0 w-full z-0">
            <div className="absolute w-full z-0">
              <div className="text-3xl text-white h-[56.25vw] w-full z-0">
                <img
                  className="w-full h-full opacity-100 z-0"
                  src="https://via.placeholder.com/310/343333?text=Main Window"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalProvider>
        <>
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
          <Modal />
        </>
      </ModalProvider>
    </div>
  );
};
