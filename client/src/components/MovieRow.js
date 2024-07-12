import { MicroRightChevron } from "../resources/MicroRightChevron"
import { Slider } from "./Slider/Slider"

export const MovieRow = ({title, movies, className=""}) => {
    return (
        <div className={"group/div h-1/5 relative z-[1] " + className}>
            <div className="flex ml-[4%] h-1/5">
                <button className="flex group/heading">
                    <h1 className="text-2xl text-white">{title}</h1>
                    <h1 className="hidden group-hover/heading:block text-sm text-cyan-500 self-end ml-3">Explore All</h1>
                    <MicroRightChevron className="hidden group-hover/div:block text-cyan-500 self-end h-5" />
                </button>
            </div>
            <Slider movies={movies} />
        </div>
    )
}