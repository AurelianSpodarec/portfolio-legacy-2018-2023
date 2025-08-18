'use client'

import Link from "next/link";
import { WebsiteRoutes } from "@/routes";
import dataMenu, { IMenuItem } from "../dataMenu";
import { useScrollHeader } from "./useScrollHeader";

function MenuItem({ name, link }: IMenuItem) {
  return <Link href={link} className="text-sm">{name}</Link>;
}

function HeaderDesktop() {
  const HEADER_HEIGHT = 60;
  const { isScrolled, hidden } = useScrollHeader(HEADER_HEIGHT);

  return (
    <header
      className={`
        h-[60px]
        fixed top-0 right-0 left-0 hidden lg:block z-40 transition-transform duration-300
        ${hidden ? "-translate-y-full" : "translate-y-0"}
        ${isScrolled ? "bg-[#262626]" : "bg-transparent"}
        text-white
      `}
    >
      <div className="flex items-center justify-between h-full px-8">
        <Link href={WebsiteRoutes.ROOT} className="uppercase font-bold">
          Aurelian Spodarec
        </Link>
        <nav className="flex flex-row space-x-8">
          {dataMenu.map((item) => (
            <MenuItem key={item.link} name={item.name} link={item.link} />
          ))}
        </nav>
      </div>
    </header>
  );
}

export default HeaderDesktop;
