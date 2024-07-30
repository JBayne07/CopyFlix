import { PopoverContext } from "@/contexts/PopoverContext";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import NetflixIcon from "../assets/Netflix_Logo_RGB.png";

export const PageNotFound = () => {
  const { setIsHeaderVisible, setIsFooterVisible } = useContext(PopoverContext);

  useEffect(() => {
    setIsHeaderVisible(false);
    setIsFooterVisible(false);
  });
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center ">
      <div className="w-full absolute top-0 h-[70px] bg-primary px-10 flex">
        <Link
          to="/"
          className="text-primary-foreground font-bold self-center text-3xl "
        >
          <img src={NetflixIcon} className="h-12" alt="Netflix" />
        </Link>
      </div>
      <div className="w-[60%] h-[60%] flex flex-col items-center justify-center gap-4">
        <h1 className="text-6xl font-bold">Lost your way?</h1>
        <h1 className="text-xl w-[80%] text-center">
          Sorry, we can't find that page. You'll find lots to explore on the
          home page.
        </h1>
        <Link to={"/"}>Netflix Home</Link>
      </div>
    </div>
  );
};
