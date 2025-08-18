import Link from "next/link";

import { WebsiteRoutes } from "@/routes";
import dataMenu, { IMenuItem } from "../dataMenu";

function MenuItem({ name, link }: IMenuItem) {
  return (
    <Link href={link} className="text-sm">{name}</Link>
  )
}

function HeaderDesktop() {
  return (
    <header className="fixed top-0 right-0 left-0 hidden lg:block z-10 text-white h-[75px] ">
      <div className="flex items-center justify-between h-full">
        <Link href={WebsiteRoutes.ROOT} className="uppercase font-bold">Aurelian Spodarec</Link>
        <nav className="flex flex-row space-x-8">
          {dataMenu.map((item) => {
            return (
              <MenuItem key={item.link} name={item.name} link={item.link} />
            )
          })}
        </nav>
      </div>
    </header>
  );
}

export default HeaderDesktop
