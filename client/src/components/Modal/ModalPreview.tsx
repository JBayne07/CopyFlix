import { Movie } from "../../services/types";

interface ModalPreviewProps {
  movie: Movie;
}

export const ModalPreview = ({ movie }: ModalPreviewProps): JSX.Element => {
  return (
    <div className="rounded">
      <img className="w-[100%] aspect-video" src={movie?.Src} alt="" />
    </div>
  );
};
