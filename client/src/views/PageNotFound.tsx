import { PopoverContext } from "@/contexts/PopoverContext";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  const { setIsHeaderVisible, setIsHeaderBodyVisible, setIsFooterVisible } =
    useContext(PopoverContext);

  useEffect(() => {
    setIsHeaderVisible(true);
    setIsHeaderBodyVisible(false);
    setIsFooterVisible(false);
  });
  return (
    <div className="w-screen h-screen flex items-center justify-center ">
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
