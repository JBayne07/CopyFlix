import { StandardLeftChevron } from "../../resources/StandardLeftChevron"
import { StandardRightChevron } from "../../resources/StandardRightChevron"

export const SliderArrow = ({handleFunction, direction}) => {
  return(
    direction === "right" ? (
    <button
      onClick={handleFunction}
      className={
        "text-white group right-0 top-0 bottom-0 z-20 absolute align-center w-[4%] h-full opacity-50 ml-[0.2vw]"
      }
    >
      <div className="group-hover:bg-zinc-800 h-full content-center justify-center self-center">
        <StandardRightChevron className="invisible text-white group-hover:visible size-[4vw] h-auto self-center" />
      </div>
    </button>
    ) :
    <button
    onClick={handleFunction}
    className={
      "text-white group left-0 top-0 bottom-0 z-20 absolute align-center w-[4%] h-full opacity-50 mr-[0.2vw]"
    }
    >
      <div className="group-hover:bg-zinc-800 h-full content-center self-center">
        <StandardLeftChevron className="invisible text-white group-hover:visible size-[4vw]" />
      </div>
    </button>
  )
}