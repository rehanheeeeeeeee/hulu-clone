import React from "react";
import Thumbnail from "./Thumbnail";

export default function Results({ movies }) {
  return (
    <div className="flex 2xl:grid-cols-4 justify-center flex-wrap my-10 px-5 items-center lg:grid-cols-3 sm:grid md:grid-cols-2 overflow-x-hidden">
      {movies.map((movie, index) => (
        <Thumbnail key={index} movie={movie} />
      ))}
    </div>
  );
}
