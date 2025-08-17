import Image from "next/image";
import Link from "next/link";

import { IImage } from "@/app/interfaces/IImage";
import { ILink } from "@/app/interfaces/ILink";

interface CTABlockProps {
  title: string;
  image: IImage;
  link: ILink;
}

function CTABlock({ title, image, link }: CTABlockProps) {
  return (
    <div className="relative overflow-hidden h-full group">

      <div className="absolute top-0 right-0 bottom-0 left-0 z-10 bg-[#333]/75 h-full w-full"></div>
      <Image src={image.url} alt={image.alt} fill className="w-full h-full object-cover transition duration-100 ease-linear group-hover:scale-105" />

      <div className="absolute z-20 h-full w-full px-8">
        <div className="flex flex-col justify-center items-center h-full w-full">
          <span className="text-white text-4xl font-bold uppercase">{title}</span>
          <Link href={link.url}>View</Link>
        </div>
      </div>
    </div>
  )
}

export default CTABlock;
