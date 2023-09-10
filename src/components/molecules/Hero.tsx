import { IImage } from "@/app/interfaces/IImage";
import Image from "next/image";

function Hero({ title, description, image }:HeroProps) {
    return (
        <div className="relative h-[500px]">
            
            <div className="absolute top-0 right-0 bottom-0 left-0 z-10 bg-[#262626]/75 h-full w-full"></div>
            <Image src={image.url} alt={image.alt} fill className="w-full h-full object-cover" />

            <div className="absolute z-20 h-full w-full px-8">
            <div className="flex flex-col justify-center items-center h-full w-full">

                <h1 className="text-white text-5xl font-bold mb-2">{title}</h1>
                {description && <p className="text-gray-300 text-md">{description}</p>}

            </div>
            </div>
        </div>
    )
}

export default Hero;

interface HeroProps {
    title: string;
    description?: string;
    image: IImage;
}
