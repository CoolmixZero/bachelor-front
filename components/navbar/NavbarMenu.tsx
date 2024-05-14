"use client";

import { SearchIcon } from "lucide-react";
import NabvarItem from "./NavbarItem";
import Link from "next/link";

const navbarItems = [
  {
    label: "For You",
    url: "/feed"
  },
  {
    label: "Explore",
    url: "/explore"
  },
  {
    label: "Reviews",
    url: "/reviews"
  }
]

const NavbarMenu = () => {
  return (
    <div className="flex flex-row items-center justify-between space-x-2">
      {navbarItems.map((item) => (
        <Link key={item.label} href={item.url} >
          <NabvarItem label={item.label} />
        </Link>
      ))}
      <div
        className="
                text-sm 
                p-2
                rounded-full
                shadow-sm
                hover:shadow-md
                transition
                cursor-pointer
            "
      >
        <SearchIcon size={18} />
      </div>
    </div>
  );
};

export default NavbarMenu;
