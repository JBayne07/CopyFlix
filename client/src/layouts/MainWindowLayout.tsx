import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PopoverContext } from "@/contexts/PopoverContext";
import { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export const MainWindowLayout = () => {
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(true);
  const { isModalOpen } = useContext(PopoverContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsHeaderTransparent(false);
      } else {
        setIsHeaderTransparent(true);
      }
    });
  });
  return (
    <div
      className={`min-h-screen mt-[-70px] ${isModalOpen ? "fixed" : "static"}`}
    >
      <Header isHeaderTransparent={isHeaderTransparent} />
      <Outlet />

      <Footer />
    </div>
  );
};
