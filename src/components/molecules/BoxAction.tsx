import Link from "next/link";

interface IBoxAction {
  title: string;
  description: string;
  inverted?: boolean;
  button: {
    text: string;
    link: string;
  }
}

function BoxAction({ title, description, button, inverted = false }: IBoxAction) {
  const { text: buttonText, link: buttonLink } = button;

  return (
    <div className="bg-[#333] border border-[#262626]">
      <div className="max-w-[480px] mx-auto text-center py-24 px-5">

        <h3 className="text-white font-bold text-4xl tracking-tighter mb-4">{title}</h3>
        <p className="text-[#999] font-normal text-base mb-8 font-sans tracking-tighter">{description}</p>

        <Link href={buttonLink} className={`text-white hover:text-black border-[2px] ${inverted ? "border-[#4dbf99] hover:bg-[#4dbf99]" : "border-[#f2a538] hover:bg-[#f2a538]"} py-3 px-8 rounded-full`}>
          <Link href={buttonLink} className="text-sm">{buttonText}</Link>
        </Link>

      </div>
    </div>
  )
}

export default BoxAction;
