import { PopoverProvider } from "@/contexts/PopoverContext";
import { Popover } from "@/components/Popover/Popover";
import { MainWindowLayout } from "./MainWindowLayout";

export const RootLayout = () => {
  return (
    <div className="w-screen h-screen min-h-screen min-w-screen overscroll-x-none">
      <div className="h-full w-full relative">
        <PopoverProvider>
          <>
            <MainWindowLayout />
            <Popover />
          </>
        </PopoverProvider>
      </div>
    </div>
  );
};
