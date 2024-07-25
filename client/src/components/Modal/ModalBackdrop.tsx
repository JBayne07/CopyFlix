import { PopoverContext } from "@/contexts/PopoverContext";
import { useContext } from "react";

export const ModalBackdrop = () => {
  const { setIsModalOpen } = useContext(PopoverContext);

  const handleBackDropClick = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="w-full h-full bg-background opacity-70 z-[5] absolute top-0"
      onClick={handleBackDropClick}
    ></div>
  );
};
