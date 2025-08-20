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
    <Link href={link.url} className="relative overflow-hidden h-full min-h-[600px] w-full group">

      <div className="absolute top-0 right-0 bottom-0 left-0 z-10 bg-[#333]/75 h-full w-full"></div>
      <Image src={image.url} alt="" aria-hidden="true" fill className="w-full h-full object-cover transition duration-100 ease-linear group-hover:scale-105" />

      <div className="absolute z-20 h-full w-full px-8">
        <div className="flex flex-col justify-center items-center h-full w-full">
          <span className="text-white text-4xl font-bold uppercase">{title}</span>
          <button type="button">View</button>
        </div>
      </div>
    </Link>
  )
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
            url: "/process",
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
  )
}

export default SectionMultiCTA
