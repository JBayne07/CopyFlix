import { createContext, Dispatch, SetStateAction, useState } from "react";
import { Movie } from "../services/types";

interface ModalContextType {
  isItemHovered?: boolean;
  setIsItemHovered: Dispatch<SetStateAction<boolean | undefined>>;
  movie?: Movie;
  setMovie: Dispatch<SetStateAction<Movie | undefined>>;
}

interface ModalContextProps {
  children: JSX.Element;
}

export const ModalContext = createContext<ModalContextType>({
  isItemHovered: false,
  setIsItemHovered: () => undefined,
  movie: undefined,
  setMovie: () => undefined,
});

export const ModalProvider = ({ children }: ModalContextProps) => {
  const [isItemHovered, setIsItemHovered] = useState<boolean>();
  const [movie, setMovie] = useState<Movie>();

  return (
    <ModalContext.Provider
      value={{ isItemHovered, setIsItemHovered, movie, setMovie }}
    >
      {children}
    </ModalContext.Provider>
  );
};
