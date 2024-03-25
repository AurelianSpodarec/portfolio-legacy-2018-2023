'use client';

import Image from "next/image";
import { IImage } from "@/app/interfaces/IImage";
import { useParallax } from "react-scroll-parallax";

interface HeroProps {
  title: string;
  description?: string;
  image: IImage;
}

function Hero({ title, description, image }: HeroProps) {

  const parallax = useParallax({
    speed: -10,
  });

  const parallax2 = useParallax({
    speed: -10,
  });

  return (
    <div className="relative h-[500px]">

      <div className="absolute top-0 right-0 bottom-0 left-0 z-10 bg-[#262626]/75 h-full w-full"></div>
      <Image ref={parallax2.ref} src={image.url} alt={image.alt} fill className="w-full h-full object-cover" />

      <div ref={parallax.ref} className="absolute z-20 h-full w-full px-8">
        <div className="flex flex-col justify-center items-center h-full w-full">

          <h1 className="text-white text-5xl font-bold font-montserrat tracking-tighter">{title}</h1>
          {description && <p className="text-[#BBBBBB] text-xl font-montserrat">{description}</p>}

        </div>
      </div>
    </div>
  )
}

export default Hero;
