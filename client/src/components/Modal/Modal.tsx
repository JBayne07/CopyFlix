import { useContext, useEffect } from "react";
import { ModalContext } from "../../contexts/ModalContext";

export const Modal = () => {
  const { isItemHovered, movie } = useContext(ModalContext);

  useEffect(() => {
    console.log("Modal", isItemHovered, movie);
  }, [isItemHovered, movie]);

  return (
    <>
      {isItemHovered && (
        <div className="p-[1em] flex flex-col absolute top-0 w-[300px] z-[99]">
          <div>
            <img
              className="w-[100%] aspect-video rounded"
              src={movie?.Src}
              alt=""
            />
          </div>
          <span className="text-white">Hello</span>
        </div>
      )}
    </>
  );
};
