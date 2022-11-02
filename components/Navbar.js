import { useRouter } from "next/router";
import React, { useEffect } from "react";
import request from "../utils/request";

const styles = {
  wrapper:
    "flex items-center whitespace-nowrap space-x-10 sm:space-x-20 px-10 sm-px-20 overflow-x-scroll scrollbar-hide",
  category:
    "cursor-pointer transition-transform delay-200 hover:scale-125 active:text-red-500 hover:text-white",
};

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className={styles.wrapper}>
        {Object.entries(request).map(([key, value], index) => (
          //   Adding Parameters to the base Url
          <p
            onClick={() => router.push(`/?genre=${key}`)}
            key={index}
            className={styles.category}
          >
            {value.title}
          </p>
        ))}
      </div>
      <div className="absolute right-0 top-0 bottom-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"></div>
    </nav>
  );
}
