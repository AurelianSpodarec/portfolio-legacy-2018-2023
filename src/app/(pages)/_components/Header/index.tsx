import Link from "next/link";
import { WebsiteRoutes } from "@/routes";

function WebHeader() {
  return (
    <div>
      <div>
        <Link href={WebsiteRoutes.ROOT} className="">Aurelian Spodarec</Link>
      </div>
      <div className="flex flex-col">
        <Link href={WebsiteRoutes.SERVICES} className="underline text-blue-700">Services</Link>
        <Link href={WebsiteRoutes.PROCESS} className="underline text-blue-700">Process</Link>
        <Link href={WebsiteRoutes.ABOUT} className="underline text-blue-700">Projects</Link>
        <Link href={WebsiteRoutes.ABOUT} className="underline text-blue-700">About</Link>
        <Link href={WebsiteRoutes.CONTACT} className="underline text-blue-700">Contact</Link>
      </div>
    </div>
  );
}

export default WebHeader
