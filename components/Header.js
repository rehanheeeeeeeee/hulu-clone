import Image from "next/image";
import React from "react";
import HeaderItem from "./HeaderItem";
import {
  CheckBadgeIcon,
  FolderIcon,
  MagnifyingGlassIcon,
  HomeIcon,
  BoltIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const styles = {
  logo: "object-contain",
  header: "flex flex-col items-center justify-between sm:flex-row m-5",
  icon: "h-8 mb-1 group-hover:animate-bounce",
};

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="flex flex-row items-center max-w-2xl justify-evenly ">
        <HeaderItem title="Home" Icon={<HomeIcon className={styles.icon} />} />
        <HeaderItem
          title="trending"
          Icon={<BoltIcon className={styles.icon} />}
        />
        <HeaderItem
          title="verified"
          Icon={<CheckBadgeIcon className={styles.icon} />}
        />
        <HeaderItem
          title="collections"
          Icon={<FolderIcon className={styles.icon} />}
        />
        <HeaderItem
          title="search"
          Icon={<MagnifyingGlassIcon className={styles.icon} />}
        />
        <HeaderItem
          title="account"
          Icon={<UserIcon className={styles.icon} />}
        />
      </div>
      <Image
        src="https://links.papareact.com/ua6"
        width={200}
        height={150}
        className={styles.logo}
      />
    </header>
  );
}
