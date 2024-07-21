import { createContext, Dispatch, SetStateAction, useState } from "react";
import { Movie } from "../services/types";

interface ModalContextType {
  isItemHovered?: boolean;
  setIsItemHovered: Dispatch<SetStateAction<boolean | undefined>>;
  movie?: Movie;
  setMovie: Dispatch<SetStateAction<Movie | undefined>>;
  posY?: number;
  setPosY: Dispatch<SetStateAction<number | undefined>>;
  posX?: number;
  setPosX: Dispatch<SetStateAction<number | undefined>>;
  leftAlign?: boolean;
  setLeftAlign: Dispatch<SetStateAction<boolean | undefined>>;
}

interface ModalContextProps {
  children: JSX.Element;
}

export const ModalContext = createContext<ModalContextType>({
  setIsItemHovered: () => undefined,
  setMovie: () => undefined,
  setPosY: () => undefined,
  setPosX: () => undefined,
  setLeftAlign: () => undefined,
});

export const ModalProvider = ({ children }: ModalContextProps) => {
  const [isItemHovered, setIsItemHovered] = useState<boolean>();
  const [movie, setMovie] = useState<Movie>();
  const [posY, setPosY] = useState<number>();
  const [posX, setPosX] = useState<number>();
  const [leftAlign, setLeftAlign] = useState<boolean>();

  return (
    <ModalContext.Provider
      value={{
        isItemHovered,
        setIsItemHovered,
        movie,
        setMovie,
        posY,
        setPosY,
        posX,
        setPosX,
        leftAlign,
        setLeftAlign,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
