import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(true);

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
    <div className="w-full min-h-screen flex flex-col flex-1 overscroll-x-none margin-0">
      <div className="min-h-screen relative mt-[-70px]">
        <Header isHeaderTransparent={isHeaderTransparent} />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
