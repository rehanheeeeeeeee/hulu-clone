import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { forwardRef } from "react";

const Thumbnail = forwardRef(({ movie }, ref) => {
  const {
    poster_path,
    backdrop_path,
    title,
    overview,
    original_name,
    first_air_date,
    media_type,
    release_date,
    vote_count,
  } = movie;
  return (
    <div
      ref={ref}
      className="flex flex-col group cursor-pointer p-2 transition-transform ease-in sm:hover:scale-105 hover:z-50"
    >
      <Image
        src={`https://image.tmdb.org/t/p/original/${
          backdrop_path || poster_path
        }`}
        width={1080}
        height={1920}
      />
      <p className="truncate w-74 max-md:w-[70vw] text-xs max-w-24 pt-2 ">
        {overview}
      </p>
      <p className="truncate max-sm:text-xl font-medium text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-semibold">
        {title || original_name}
      </p>
      <p className="flex items-center capitalize text-xs opacity-0 py-1 group-hover:opacity-100">
        {media_type && `${media_type} · `}
        {((release_date || first_air_date) && release_date) || first_air_date}
        <span className="mx-2">{"·"}</span>
        <HandThumbUpIcon className="h-5 mr-2" />
        <span>{vote_count}</span>
      </p>
    </div>
  );
});
export default Thumbnail;
