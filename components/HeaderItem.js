import React from "react";

export default function HeaderItem({ title, Icon }) {
  return (
    <div className="flex flex-col items-center group cursor-pointer w-12 sm:w-20 hover:text-white">
      <p>{Icon}</p>
      <p className="opacity-0 group-hover:opacity-100 uppercase">{title}</p>
    </div>
  );
}
