import { PopoverContext } from "@/contexts/PopoverContext";
import { useContext, useEffect } from "react";

export const Watch = () => {
  const { setIsModalOpen, setIsItemHovered } = useContext(PopoverContext);

  useEffect(() => {
    setIsModalOpen(false);
    setIsItemHovered(false);
  }, []);
  return <div className="">Watch</div>;
};
