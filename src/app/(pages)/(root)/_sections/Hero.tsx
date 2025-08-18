function SectionHero() {
  return (
    <section className="relative h-screen bg-cover" style={{ backgroundImage: `url('/images/blur-cafe-chairs.jpg')` }}>
      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-[#0e0f10b0]/70"></div>

      <div className="flex items-center justify-center h-full w-full">
        <div className="text-center z-10">
          <h1 className="text-white text-7xl">Make your website your <br/>best salesperson</h1>
          <p className="text-white text-xl">Your website, your 24/7 sales powerhouse—turn visitors into customers around the clock.</p>
          <div className="flex mx-auto">
            <button>Start your project now</button>
            <button>Recent Work</button>
          </div>
          <div>
            Scroll down, to see more
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionHero
