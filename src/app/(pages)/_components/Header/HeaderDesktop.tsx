import Link from "next/link";
import { WebsiteRoutes } from "@/routes";
import dataMenu, { IMenuItem } from "./dataMenu";


function MenuItem({ name, link }: IMenuItem) {
  return (
    <Link href={link} className="text-sm">{name}</Link>
  )
}

function HeaderDesktop() {
  return (
    <div className="hidden lg:flex justify-between">
      <Link href={WebsiteRoutes.ROOT} className="">Aurelian Spodarec</Link>
      <nav className="flex flex-row">
        {dataMenu.map((item) => {
          return (
            <MenuItem key={item.link} name={item.name} link={item.link} />
          )
        })}
      </nav>
    </div>
  );
}

export default HeaderDesktop
