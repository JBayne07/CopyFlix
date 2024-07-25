import { createContext, Dispatch, SetStateAction, useState } from "react";
import { Movie } from "../services/types";

interface PopoverContextType {
  isItemHovered?: boolean;
  setIsItemHovered: Dispatch<SetStateAction<boolean | undefined>>;
  movie?: Movie;
  setMovie: Dispatch<SetStateAction<Movie | undefined>>;
  posY?: number;
  setPosY: Dispatch<SetStateAction<number | undefined>>;
  posX?: number;
  setPosX: Dispatch<SetStateAction<number | undefined>>;
  isLeftAlign?: boolean;
  setIsLeftAlign: Dispatch<SetStateAction<boolean | undefined>>;
  isMiddle?: boolean;
  setIsMiddle: Dispatch<SetStateAction<boolean | undefined>>;
  itemWidth?: number;
  setItemWidth: Dispatch<SetStateAction<number | undefined>>;
  isModalOpen?: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean | undefined>>;
}

interface PopoverContentProps {
  children: JSX.Element;
}

export const PopoverContext = createContext<PopoverContextType>({
  setIsItemHovered: () => undefined,
  setMovie: () => undefined,
  setPosY: () => undefined,
  setPosX: () => undefined,
  setIsLeftAlign: () => undefined,
  setIsMiddle: () => undefined,
  setItemWidth: () => undefined,
  setIsModalOpen: () => undefined,
});

export const PopoverProvider = ({ children }: PopoverContentProps) => {
  const [isItemHovered, setIsItemHovered] = useState<boolean>();
  const [movie, setMovie] = useState<Movie>();
  const [posY, setPosY] = useState<number>();
  const [posX, setPosX] = useState<number>();
  const [isLeftAlign, setIsLeftAlign] = useState<boolean>();
  const [isMiddle, setIsMiddle] = useState<boolean>();
  const [itemWidth, setItemWidth] = useState<number>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>();

  return (
    <PopoverContext.Provider
      value={{
        isItemHovered,
        setIsItemHovered,
        movie,
        setMovie,
        posY,
        setPosY,
        posX,
        setPosX,
        isLeftAlign,
        setIsLeftAlign,
        isMiddle,
        setIsMiddle,
        itemWidth,
        setItemWidth,
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </PopoverContext.Provider>
  );
};
