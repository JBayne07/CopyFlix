import { useEffect, useState } from "react";
import { SliderItem } from "./SliderItem";
import { SliderArrow } from "./SliderArrow";
import { Movie } from "../../services/types";
import { PaginationIndicator } from "../PaginationIndicator";

// This is a slider that is a recreation of netflix's slider
// The slider uses 3 sections (left, middle, and right)
// The middle section will be visible to the user with an element peeking from the left and right section

interface SliderProps {
  movies: Movie[];
}

export const Slider = ({ movies }: SliderProps): JSX.Element => {
  const [index, setIndex] = useState<number>(0); // integer to determine the middle item
  const [numItems, setNumItems] = useState<number>(5); // integer to determine how many items to show to the user
  const [style, setStyle] = useState<object>({}); // object to determine how much to move the slider to the right or left
  const [hasSliderMoved, sethasSliderMoved] = useState<boolean>(false); // boolean to display prev arrow
  const [sliderMoving, setSliderMoving] = useState<boolean>(false); // boolean for slider animation
  const [sliderMoveDirection, setSliderMoveDirection] = useState<string | null>(
    null
  ); // direction of movement of animation

  useEffect(() => {
    const handleSliderAnimation = () => {
      if (sliderMoving) {
        let translate = "";
        if (sliderMoveDirection === "right") {
          translate = `translateX(-${
            hasSliderMoved ? 200 + 100 / numItems : 100
          }%)`;
        } else if (sliderMoveDirection === "left") {
          translate = `translateX(-${100 / numItems}%)`;
        }

        setStyle({
          transform: translate,
          transitionDuration: "750ms",
        });
      } else {
        setStyle({
          transform: `translateX(-${
            hasSliderMoved ? 100 + 100 / numItems : 0
          }%)`,
        });
      }
    };
    handleSliderAnimation();
  }, [sliderMoving]);

  const handleLeftArrow = () => {
    if (sliderMoving) {
      return;
    }
    setSliderMoving(true);
    setSliderMoveDirection("left");

    setTimeout(() => {
      setIndex(() => {
        if (index - numItems < 0) {
          return movies.length - numItems;
        } else {
          return index - numItems;
        }
      });
      setSliderMoving(false);
      setSliderMoveDirection(null);
    }, 750);
  };

  const handleRightArrow = () => {
    if (sliderMoving) {
      return;
    }
    setSliderMoving(true);
    setSliderMoveDirection("right");

    setTimeout(() => {
      setIndex(() => {
        if (index + numItems >= movies.length) {
          return 0;
        } else {
          return index + numItems;
        }
      });
      setSliderMoving(false);
      setSliderMoveDirection(null);
      // slider has moved and show the previous arrow
      if (!hasSliderMoved) {
        sethasSliderMoved(true);
      }
    }, 750);
  };

  const handleItems = () => {
    const leftIndex =
      index - numItems < 0 && hasSliderMoved
        ? movies.length - numItems
        : index - numItems;
    const midIndex = index;
    const rightIndex =
      index + numItems > movies.length - 1 ? 0 : index + numItems;
    const leftMostIndex = leftIndex - 1 < 0 ? movies.length - 1 : leftIndex - 1;
    const rightMostIndex =
      rightIndex + numItems + 1 > movies.length - 1 ? 0 : rightIndex + numItems;

    let i = leftIndex;
    const output = [];
    while (i !== rightIndex + numItems) {
      if (i === leftIndex + numItems) {
        i = midIndex;
      } else if (i === midIndex + numItems) {
        i = rightIndex;
      }
      if (movies[i]) {
        if (i % numItems === 0) {
          output.push(
            <SliderItem
              movie={movies[i]}
              key={movies[i].Id}
              itemWidth={100 / numItems}
              isEdge={true}
            />
          );
        } else {
          output.push(
            <SliderItem
              movie={movies[i]}
              key={movies[i].Id}
              itemWidth={100 / numItems}
              isEdge={false}
            />
          );
        }
      }
      i++;
    }

    if (movies[leftMostIndex] && hasSliderMoved) {
      output.unshift(
        <SliderItem
          movie={movies[leftMostIndex]}
          key={movies[leftMostIndex].Id}
          itemWidth={100 / numItems}
          isEdge={false}
        />
      );
    }
    if (movies[rightMostIndex]) {
      output.push(
        <SliderItem
          movie={movies[rightMostIndex]}
          key={movies[rightMostIndex].Id}
          itemWidth={100 / numItems}
          isEdge={false}
        />
      );
    }
    return output;
  };

  return (
    <div className="justify-center my-2 relative">
      <PaginationIndicator
        index={index / numItems}
        totalSlides={movies.length / numItems}
      />

      <div className="flex relative px-[4%] overflow-x-hidden">
        {/* Left arrow */}
        {hasSliderMoved && (
          <SliderArrow direction={"left"} handleFunction={handleLeftArrow} />
        )}

        {/* Carousal items */}
        <div className={"flex whitespace-nowrap relative"} style={style}>
          {handleItems()}
        </div>

        {/* Right arrow */}
        <SliderArrow direction={"right"} handleFunction={handleRightArrow} />
      </div>
    </div>
  );
};
