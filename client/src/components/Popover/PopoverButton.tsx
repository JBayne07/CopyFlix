import { forwardRef, ReactElement } from "react";
import { Button } from "../ui/button";

interface ModalPopupButtonProps {
  children: JSX.Element;
  className?: string;
  handleMouseOver?: () => void;
  handleMouseClick?: () => void;
}

export const PopoverButton = forwardRef<
  HTMLButtonElement,
  ModalPopupButtonProps
>(
  (
    { children, className, handleMouseOver, handleMouseClick },
    ref?
  ): ReactElement => {
    return (
      <Button
        className={`flex justify-center items-center w-[2.6vw] h-[2.6vw] border-2 border-solid border-border rounded-full bg-secondary hover:bg-border ${className}`}
        size="icon"
        variant="base"
        onMouseOver={handleMouseOver}
        onClick={handleMouseClick}
        ref={ref}
      >
        {children}
      </Button>
    );
  }
);
