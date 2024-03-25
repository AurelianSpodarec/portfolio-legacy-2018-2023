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
  const parallaxImagge = useParallax({ speed: 13 });
  const parallaxContent = useParallax({ speed: -13 });

  return (
    <div className="relative h-[500px] -z-10">

      <div className="absolute top-0 right-0 bottom-0 left-0 z-10 bg-[#262626]/75 h-full w-full"></div>
      <Image ref={parallaxImagge.ref} src={image.url} alt={image.alt} fill className="absolute object-fit top-0 right-0 bottom-0 left-0 w-full h-full object-cover" />

      <div ref={parallaxContent.ref} className="relative z-20 h-full w-full px-8">
        <div className="flex flex-col justify-center items-center h-full w-full">

          <h1 className="text-white text-5xl font-bold font-montserrat tracking-tighter">{title}</h1>
          {description && <p className="text-[#BBBBBB] text-xl font-montserrat">{description}</p>}

        </div>
      </div>
    </div>
  )
}

export default Hero;
