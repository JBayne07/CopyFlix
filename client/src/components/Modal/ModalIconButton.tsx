import { forwardRef, ReactElement } from "react";
import { Button } from "../ui/button";

interface ModalIconButtonProps {
  children: JSX.Element;
  className?: string;
  handleMouseOver?: () => void;
}

export const ModalIconButton = forwardRef<
  HTMLButtonElement,
  ModalIconButtonProps
>(({ children, className, handleMouseOver }, ref?): ReactElement => {
  return (
    <Button
      className={`flex justify-center items-center w-[2.6vw] h-[2.6vw] border-2 border-solid border-border rounded-full bg-secondary hover:bg-border ${className}`}
      size="icon"
      variant="base"
      onMouseOver={handleMouseOver}
      ref={ref}
    >
      {children}
    </Button>
  );
});
