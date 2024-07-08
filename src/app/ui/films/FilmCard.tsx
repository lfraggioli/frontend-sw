import React from "react";
import Film from "@/app/lib/types/Film";
import Image from "next/image";

const FilmCard: React.FC<{ film: Film }> = ({ film }) => {
  return (
    <div className="items-center flex-col flex sm:w-3/4 w-72 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
      <a href={`/films/${film.episode_id}`}>
        <h1 className="mb-3 text-xl font-bold">{film.title}</h1>
      </a>

      <Image src={film.imageUrl} alt={film.title} width={200} height={200} />
    </div>
  );
};

export default FilmCard;
