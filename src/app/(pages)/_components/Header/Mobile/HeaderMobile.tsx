'use client'

import { useState } from "react";
import Link from "next/link";
import { WebsiteRoutes } from "@/routes";
import Drawer from "./Drawer";

function Overlay({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <div
      className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-200 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClick}
    />
  );
}

export default function HeaderMobile() {
  const [open, setOpen] = useState(false);

  return (
    <header className="lg:hidden">
      <div className="flex justify-between items-center p-4">
        <Link href={WebsiteRoutes.ROOT} className="font-semibold">
          Aurelian Spodarec
        </Link>

        <button
          className="px-3 py-1 rounded-md bg-primary text-primary-foreground"
          onClick={() => setOpen(true)}
        >
          Menu
        </button>
      </div>

      <Overlay open={open} onClick={() => setOpen(false)} />
      <Drawer open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
