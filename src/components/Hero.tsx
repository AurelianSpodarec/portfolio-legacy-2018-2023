interface IHeroProps {
  title: string
  desc: string
  bgImage: string
}

function Hero({ title, desc, bgImage }: IHeroProps) {
  return (
    <section className="relative h-[70vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${bgImage}')` }}>
      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-[#0e0f10b0]/70"></div>

      <div className="flex items-center justify-center h-full w-full">
        <div className="text-center z-10">
          <h1 className="text-white lg:text-7xl">{title}</h1>
          <p className="text-white text-xl">{desc}</p>
        </div>
      </div>
    </section>
  );
}

export default Hero
