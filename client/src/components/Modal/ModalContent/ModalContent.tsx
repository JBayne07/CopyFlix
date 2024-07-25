import { ModalDescription } from "./ModalDescription";
import { ModalEpisodes } from "./ModalEpisodes";
import { ModalFooter } from "./ModalFooter";
import { ModalRelated } from "./ModalRelated";

export const ModalContent = () => {
  return (
    <div className="flex flex-col px-12">
      <ModalDescription />
      <ModalEpisodes
        episodes={[
          "Episode1",
          "Episode2",
          "Episode3",
          "Episode4",
          "Episode5",
          "Episode6",
        ]}
      />
      <ModalRelated />
      <ModalFooter />
    </div>
  );
};
