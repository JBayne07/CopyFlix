import { Link } from "react-router-dom";
import { PlayIcon } from "../../assets/PlayIcon";
import { PlusIcon } from "../../assets/PlusIcon";
import { CheckIcon } from "../../assets/CheckIcon";
import { XIcon } from "../../assets/XIcon";
import { DownChevron } from "../../assets/DownChevron";
import { ModalIconButton } from "./ModalIconButton";

export const ModalContent = (): JSX.Element => {
  return (
    <div className="flex flex-col p-4 bg-background z-[3]">
      <div className="flex flex-row gap-1 items-center mb-2">
        <Link
          to="/Watch"
          className="flex justify-center items-center size-8 bg-popout-primary rounded-full "
        >
          <PlayIcon className="size-3 text-background" />
        </Link>

        <ModalIconButton>
          <PlusIcon className="size-3" />
        </ModalIconButton>
        <ModalIconButton>
          <XIcon className="size-3" />
        </ModalIconButton>
        <ModalIconButton>
          <CheckIcon className="size-3" />
        </ModalIconButton>
        <ModalIconButton className="ml-auto">
          <DownChevron className="size-3" />
        </ModalIconButton>
      </div>
      <span className="text-sm text-match">Percentage Match</span>
      <span className="text-sm text-popout-secondary">Episode Count</span>
      <span className="text-sm text-popout-primary">Genres</span>
    </div>
  );
};
