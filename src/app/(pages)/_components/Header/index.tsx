'use client'

import HeaderDesktop from "./Desktop";
import HeaderMobile from "./Mobile";

import { useScrollHeader } from "./useScrollHeader";

export default function WebHeader() {
  const { isScrolled, hidden } = useScrollHeader();

  return (
    <header
      className={`
        fixed left-0 right-0 z-40 h-[60px]
        ${hidden ? "-top-[60px]" : "top-0"}
        transition-[top] duration-300
        ${isScrolled ? "bg-[#262626]" : "bg-transparent"}
        text-white
      `}
    >
      <div className="flex items-center h-full">
        <HeaderDesktop />
        <HeaderMobile />
      </div>
    </header>
  );
}
