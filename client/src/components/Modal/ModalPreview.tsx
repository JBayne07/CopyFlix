import { PopoverContext } from "@/contexts/PopoverContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const ModalPreview = () => {
  const { movie } = useContext(PopoverContext);

  return (
    <div className="w-full h-[35vw]">
      <Link to={"/watch"} className="cursor-default">
        <img className="aspect-video h-full w-full" src={movie?.ImgSrc}></img>
      </Link>
    </div>
  );
};
