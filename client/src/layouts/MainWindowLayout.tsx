import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PopoverContext } from "@/contexts/PopoverContext";
import { useCallback, useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export const MainWindowLayout = () => {
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(true);
  const { isModalOpen, windowScroll, setWindowScroll } =
    useContext(PopoverContext);
  const [style, setStyle] = useState<object>({});

  useEffect(() => {
    console.log("hello");
    if (isModalOpen) {
      window.removeEventListener("scroll", scrollEvent);
      setStyle({ top: `-${windowScroll}px` });
    } else {
      window.scrollTo({ top: windowScroll });
      setWindowScroll(undefined);
      window.addEventListener("scroll", scrollEvent);
    }
  }, [isModalOpen]);

  const scrollEvent = useCallback(() => {
    if (window.scrollY > 0) {
      setIsHeaderTransparent(false);
    } else {
      setIsHeaderTransparent(true);
    }
  }, []);

  return (
    <div
      className={`min-h-screen mt-[-70px] ${isModalOpen ? "fixed" : "static"}`}
      style={style}
    >
      <Header isHeaderTransparent={isHeaderTransparent} />
      <Outlet />
      <Footer />
    </div>
  );
};
