import { useContext, useEffect } from "react";
import { ModalContent } from "./ModalContent/ModalContent";
import { ModalPreview } from "./ModalPreview";
import { PopoverContext } from "@/contexts/PopoverContext";

export const Modal = () => {
  const { setIsModalOpen, setIsItemHovered, setWindowScroll } =
    useContext(PopoverContext);

  useEffect(() => {
    setIsItemHovered(false);
  }, []);

  const handleBackDropClick = () => {
    setIsModalOpen(false);
    setWindowScroll(undefined);
  };

  return (
    <div
      className="fixed top-0 left-0 w-[100vw] h-[100vh] overflow-y-auto z-[5]"
      onClick={handleBackDropClick}
    >
      <div className="relative top-[12vh] left-[15vw] flex flex-col bg-background z-10 w-[71vw]">
        <ModalPreview />
        <ModalContent />
      </div>
    </div>
  );
};

//
