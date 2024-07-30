import { Link } from "react-router-dom";
import { useContext } from "react";
import { PopoverContext } from "@/contexts/PopoverContext";

export const PopoverPreview = (): JSX.Element => {
  const { movie } = useContext(PopoverContext);
  return (
    <div className="rounded">
      <Link to="/watch" className="cursor-default">
        <img className="w-[100%] aspect-video" src={movie?.ImgSrc} alt="" />
      </Link>
    </div>
  );
};
