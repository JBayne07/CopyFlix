import { PopoverProvider } from "@/contexts/PopoverContext";
import { Popover } from "@/components/Popover/Popover";
import { MainWindowLayout } from "./MainWindowLayout";

export const RootLayout = () => {
  return (
    <div className="min-h-screen min-w-screen overscroll-x-none">
      <PopoverProvider>
        <>
          <MainWindowLayout />
          <Popover />
        </>
      </PopoverProvider>
    </div>
  );
};
