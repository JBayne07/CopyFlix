import { Button } from "../ui/button";

interface ModalIconButtonProps {
  children: JSX.Element;
  className?: string;
}

export const ModalIconButton = ({
  children,
  className,
}: ModalIconButtonProps): JSX.Element => {
  return (
    <Button
      className={`flex justify-center items-center size-8 border-2 border-solid border-border rounded-full hover:bg-[hsla(0,0%,100%,.5)] ${className}`}
      size="icon"
      variant="base"
    >
      {children}
    </Button>
  );
};
