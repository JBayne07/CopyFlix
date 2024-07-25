interface ModalEpisodesProps {
  episodes: string[];
}

export const ModalEpisodes = ({ episodes }: ModalEpisodesProps) => {
  return (
    <div className="flex flex-col mt-12 items-center justify-center">
      Episodes
      {episodes.map((episode) => (
        <div className="border border-border w-full h-20">{episode}</div>
      ))}
    </div>
  );
};
