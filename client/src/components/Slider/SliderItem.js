
export const SliderItem = ({movie, width}) => {
    
    return(
        <div className="flex-[0_0_20%] max-w-[20%] px-[0.2vw]">
            {/* {movie && <p className="text-white">{movie.Src}</p>} */}
            {movie && <img className="w-[100%] aspect-video rounded" src={movie.Src} alt=""/>}
        </div>
    )
}