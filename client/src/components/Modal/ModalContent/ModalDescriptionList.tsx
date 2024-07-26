interface ModalDescriptionListProps {
  title: string;
  list: string[];
}

export const ModalDescriptionList = ({
  title,
  list,
}: ModalDescriptionListProps): JSX.Element => {
  return (
    <div className="flex flex-wrap my-2 break-words whitespace-pre-wrap">
      <span className="text-secondary-foreground whitespace-nowrap text-sm">
        {title}:{" "}
      </span>
      {list.map((item) => (
        <span className="text-popout-primary break-words text-sm" key={item}>
          {" "}
          {item},{" "}
        </span>
      ))}
    </div>
  );
};
