import { Button } from "@/components/ui/button";
import { PopoverContext } from "@/contexts/PopoverContext";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Watch = () => {
  const { movie, setIsModalOpen, setIsItemHovered, setIsHeaderVisible } =
    useContext(PopoverContext);
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    console.log(movie);
    videoRef.current?.load();
    videoRef.current?.play();
    setIsModalOpen(false);
    setIsItemHovered(false);
    setIsHeaderVisible(true);

    // return () => {videoRef.current?.}
  }, []);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handlePausePlay = () => {
    if (isPaused) {
      videoRef.current?.play();
      setIsPaused(false);
    } else {
      videoRef.current?.pause();
      setIsPaused(true);
    }
  };

  return (
    <div
      className="w-full h-full overflow-hidden overscroll-none"
      onClick={handlePausePlay}
    >
      <Button
        className="absolute top-0 z-[1] bg-transparent"
        onClick={handleBackClick}
      >
        Back
      </Button>

      <div className="w-full h-full items-center justify-center">
        <video className="w-full h-auto" src={movie?.VideoSrc} ref={videoRef} />
        <div className="absolute bottom-0 flex flex-col w-full">
          <div className="w-full border border-border">Video length</div>
          <div className="flex flex-row w-full">
            {isPaused ? (
              <Button
                className="z-[1] bg-transparent"
                onClick={handlePausePlay}
              >
                Play
              </Button>
            ) : (
              <Button
                className="z-[1] bg-transparent"
                onClick={handlePausePlay}
              >
                Pause
              </Button>
            )}
            <Button className="z-[1] bg-transparent" onClick={handlePausePlay}>
              Forward 10
            </Button>
            <Button className="z-[1] bg-transparent" onClick={handlePausePlay}>
              Back 10
            </Button>
            <Button className="z-[1] bg-transparent" onClick={handlePausePlay}>
              Volume slider
            </Button>
            <div className="ml-auto">
              <Button
                className="z-[1] bg-transparent"
                onClick={handlePausePlay}
              >
                Audio/Subtitles
              </Button>
              <Button
                className="z-[1] bg-transparent"
                onClick={handlePausePlay}
              >
                Playback Speed
              </Button>
              <Button
                className="z-[1] bg-transparent"
                onClick={handlePausePlay}
              >
                Fullscreen
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
