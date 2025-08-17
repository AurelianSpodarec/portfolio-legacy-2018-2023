import Link from "next/link";
import dataMenu, { IMenuItem } from "./dataMenu";

function NavItem({ name, url, isActive }: IMenuItem) {
  return (
    <Link href={url} className="text-sm rounded-xl border-[2px] px-3 py-3">{name}</Link>
  )
}

function MenuDesktop() {
  return (
    <nav className="hidden lg:block space-x-7 text-sm text-white font-montserrat">
      {dataMenu.map((item) => {
        return <NavItem name={item.name} url={item.url} isActive={false} />
      })}
      <Link href="/contact" className="text-[#f2a538] border-[#f2a538] hover:text-[#e08300] hover:border-[#e08300] border-[2px] rounded-3xl font-bold px-4 py-3">Get In Touch</Link>
    </nav>
  )
}

export default MenuDesktop;
