'use client'

import Link from "next/link"
import { useParallax } from "@/hooks/useParallax";

function SectionHero() {
  const bg = useParallax<HTMLDivElement>({ speed: -0.4 });
  const fg = useParallax<HTMLDivElement>({ speed: -0.2, inheritParentTransform: true, });

  return (
    <section className="relative overflow-hidden h-screen">
      <div ref={bg.ref} className="bg-cover h-full" style={{ backgroundImage: `url('/images/blur-cafe-chairs.jpg')` }}>
        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-[#0e0f10]/70"></div>

        <div ref={fg.ref} className="flex items-center justify-center h-full w-full z-10">
          <div className="text-center z-10 pt-20">

            <h1 className="text-white text-7xl mb-2 font-semibold">Make your website your <br />best salesperson</h1>
            <p className="text-gray-300 text-2xl mb-6">Your website, your 24/7 sales powerhouse—turn visitors into customers around the clock.</p>

            <div className="flex justify-center space-x-2 pb-30">
              <button
                className="
              border-[3px] border-[#f2a538] bg-[#f2a538] text-black
              text-md py-2.5 px-8 font-bold font-primary cursor-pointer 
              transform-border transform-background duration-200
              rounded-xs
              hover:border-transparent hover:bg-white/20 hover:backdrop-blur
                ">
                Start your project now
              </button>
              <button className="
                border-[3px] border-[#f2a538] 
                text-white text-md py-2.5 px-8 font-bold font-primary cursor-pointer 
                transform-border transform-background duration-200
                rounded-xs
                hover:border-transparent hover:bg-white/20 hover:backdrop-blur
                ">Recent Work</button>
            </div>

            <div className="flex flex-col items-center justify-center">
              <Link href="#intro" className="block h-[80px] w-[80px] border-4 border-white/90 rounded-full">
                <div className="flex items-center justify-center h-full w-full animate-bounce [animation-duration:2s]">
                  <svg className="size-10 fill-white/90 mt-3" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 640'>
                    <path d='M297.4 470.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 402.7 150.6 233.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z'></path>
                  </svg>
                </div>
              </Link>
              <span className="text-xs text-gray-50">Scroll down, to see more</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionHero
