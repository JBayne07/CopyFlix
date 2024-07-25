import { ModalDescriptionList } from "./ModalDescriptionList";

export const ModalDescription = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <div className="mt-4">
          <div className="text-match">Match</div>
          <div className="text-popout-primary mt-1">Maturity</div>
        </div>

        <div className="text-popout-primary mt-3 mb-2">Description</div>
      </div>
      <div className="flex flex-col ml-auto w-1/3 justify-center">
        <ModalDescriptionList title="Cast" list={["test1", "test2", "test3"]} />
        <ModalDescriptionList
          title="Genres"
          list={["test1", "test2", "test3"]}
        />
        <ModalDescriptionList
          title="This show is"
          list={["test1", "test2", "test3", "test4", "test5", "test6", "test7"]}
        />
      </div>
    </div>
  );
};
