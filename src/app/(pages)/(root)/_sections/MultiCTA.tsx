import Image from "next/image";
import Link from "next/link";

export interface IImageProps {
  url: string;
  alt: string;
}

export interface ILinkProps {
  url: string;
  text?: string;
}

interface CTABlockProps {
  title: string;
  image: IImageProps;
  link: ILinkProps;
}

function ExcerptItem({ title, image, link }: CTABlockProps) {
  return (
    <Link href={link.url} className="group relative overflow-hidden h-full min-h-[600px] w-full focus:outline-none">
      <div className="absolute inset-0 z-10 bg-[#262626]/90" />

      <Image
        src={image.url}
        alt=""
        aria-hidden="true"
        fill
        className="w-full h-full object-cover"
      />

      <div className="absolute z-20 h-full w-full px-8">
        <div className="flex flex-col justify-center items-center h-full w-full">
          <span className="duration-300 text-white text-4xl font-primary font-bold uppercase group-hover:scale-105 group-focus-within:scale-105">
            {title}
          </span>

          <div className="mb-4 relative after:content-[''] after:block after:w-12 after:border-2 after:border-[#f2a538] after:mx-auto after:transition-all after:duration-300 after:ease-in-out group-hover:after:w-[100px] group-focus-within:after:w-[100px]" />

          <span
            aria-hidden="true"
            className="
              border-[3px] border-[#f2a538] 
              text-white text-md py-2.5 px-20 uppercase font-bold font-primary 
              rounded-xs
              transform-border transform-background duration-200
              group-hover:py-2 group-hover:border-transparent group-hover:bg-white/20 group-hover:backdrop-blur
              group-focus-within:py-2 group-focus-within:border-transparent group-focus-within:bg-white/20 group-focus-within:backdrop-blur
            "
          >
            View
          </span>
        </div>
      </div>
    </Link>
  );
}

function SectionMultiCTA() {
  return (
    <section>
      <div className="flex flex-col lg:flex-row">
        <ExcerptItem
          title="My Services"
          image={{
            url: "/images/woman-writing.jpg",
            alt: ""
          }}
          link={{
            url: "/services"
          }}
        />
        <ExcerptItem
          title="The Process"
          image={{
            url: "/images/process-finger.jpeg",
            alt: ""
          }}
          link={{
            url: "/process"
          }}
        />
        <ExcerptItem
          title="My Work"
          image={{
            url: "/images/man-writing-computer.jpeg",
            alt: ""
          }}
          link={{
            url: "/projects"
          }}
        />
      </div>
    </section>
  );
}

export default SectionMultiCTA;
