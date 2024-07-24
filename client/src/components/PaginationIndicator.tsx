import { PaginationIcon } from "../assets/PaginationIcon";

interface PaginationIndicatorProps {
  index: number;
  totalSlides: number;
}

export const PaginationIndicator = ({
  index,
  totalSlides,
}: PaginationIndicatorProps): JSX.Element => {
  const renderPaginationIcons = () => {
    const output = [];
    for (let i = 0; i < totalSlides; i++) {
      if (i === index) {
        output.push(
          <PaginationIcon className="bg-pagination-active" key={i} />
        );
      } else {
        output.push(
          <PaginationIcon className="bg-pagination-passive" key={i} />
        );
      }
    }

    return output;
  };

  return (
    <div className="flex absolute right-[4%] top-0 mt-[-24px] mb-[12px]">
      {renderPaginationIcons()}
    </div>
  );
};
