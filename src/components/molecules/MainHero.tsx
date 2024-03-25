import Image from "next/image";
import { IImage } from "@/app/interfaces/IImage";
import Link from "next/link";

interface MainHeroProps {
  title: string;
  description?: string;
  image: IImage;
}

function MainHero({ title, description, image }: MainHeroProps) {
  return (
    <div className="relative h-screen min-h-[500px]">

      <div className="absolute top-0 right-0 bottom-0 left-0 z-10 bg-[#262626]/75 h-full w-full"></div>
      <Image src={image.url} alt={image.alt} fill className="w-full h-full object-cover" />

      <div className="absolute z-20 h-full w-full px-8">
        <div className="flex flex-col justify-center items-center h-full w-full">

          <h1 className="text-white text-5xl font-bold font-montserrat tracking-tighter">{title}</h1>
          {description && <p className="text-[#BBBBBB] text-xl font-montserrat">{description}</p>}

          <div>
            <Link href="/portfolio">My Portfolio</Link>
            <Link href="/contact">Let's Talk</Link>
          </div>

          <div>
            <span>Scroll down, to see more</span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default MainHero;
