import Container from "@/components/_layout/Container";
import Section from "@/components/_layout/Section";
import CTABlock from "@/components/molecules/CTABlock";
import Hero from "@/components/molecules/Hero";
import Image from "next/image";
import BoxContact from "./_components/BoxContact";

function Home() {
  return (
    <>
      <Hero
        title="Home"
        image={{
          url: "/images/blur-cafe-chairs-min.jpg",
          alt: "Alrt"
        }}
      />

      <Section>
        <Container>

          <p className="text-xl">I help business owners just like you, establish a strong presence online by taking a strategic approach. A pretty website, responsive desing - all of that is default for any website. What you need is a strategy that'll help convert your customers into leads.</p>

        </Container>
      </Section>

      <Section size="clean">

        <div className="grid grid-cols-1 lg:grid-cols-3 h-[700px]">
          <CTABlock
            title="My Services"
            image={{
              url: "/images/woman-writing.jpg",
              alt: ""
            }}
            link={{
              url: "/services"
            }}
          />
          <CTABlock
            title="The Process"
            image={{
              url: "/images/process-finger.jpeg",
              alt: ""
            }}
            link={{
              url: "/process",
            }}
          />
          <CTABlock
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
      </Section>

      <section className="bg-[#f5f5f5] py-12">
        <Container>

          <div className="grid grid-cols-2">
            <div>
              <h2>About me</h2>
              <span>Helping you build a site that works the first time</span>

              <p>Let me tell you something. I don't have 10years of experience. What I do have is a process. It's a step-by-step guide that will help us get the result you want.</p>
            </div>
            <div>
              <Image src="/images/aurelian-photo.jpg" width="500" height="500" alt="Aurelian sitting in front of a computer" />
            </div>
          </div>

        </Container>
      </section>

      <section className="bg-[#272c31] text-white py-28 text-center text-5xl uppercase font-bold">
        <span>Awesome. Creative. Developer.</span>
      </section>

      <BoxContact />
    </>
  )
}

export default Home;
