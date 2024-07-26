import { PopoverContext } from "@/contexts/PopoverContext";
import { useContext } from "react";

export const ModalBackdrop = () => {
  return (
    <div className="w-full h-full bg-background opacity-70 z-[1] absolute top-0"></div>
  );
};
