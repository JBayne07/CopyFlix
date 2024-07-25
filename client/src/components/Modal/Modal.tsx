import { useContext, useEffect, useRef } from "react";
import { ModalContent } from "./ModalContent/ModalContent";
import { ModalPreview } from "./ModalPreview";
import { PopoverContext } from "@/contexts/PopoverContext";

export const Modal = () => {
  const { setIsModalOpen } = useContext(PopoverContext);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    modalRef.current?.focus();
  }, []);

  const handleModalBlur = () => {
    console.log("modal blur");
    setIsModalOpen(false);
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className="flex flex-col absolute top-[12vh] left-[15vw] bg-background w-[71vw] h-fit z-10"
        onBlur={handleModalBlur}
        ref={modalRef}
      >
        <ModalPreview />
        <ModalContent />
      </div>
    </div>
  );
};
