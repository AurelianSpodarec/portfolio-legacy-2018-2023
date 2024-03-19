import Hero from "@/components/molecules/Hero";
import Head from "next/head";
import Image from "next/image";
import BoxContact from "../_components/BoxContact";
import Container from "@/components/_layout/Container";

function About() {
  return (
    <>
      <Head>
        <title>About - Aurelian Spodarec</title>
        <meta
          name="description"
          content="I’m Aurelian Spodarec. I live in Manchester, United Kingdom where I develop design and develop webapps."
        />
      </Head>
      
      <Hero
        title="About"
        description="Here you can learn about me, and how I can help you"
        image={{
          url: "/images/apple-device-blur-blurry-min.jpg",
          alt: "Desk with an Apple Computer with a coffee "
        }}
      />

      <section>
        <Container>

          <div className="grid grid-cols-2">

            <div>
              <Image src="/images/aurelian-photo.jpg" width="500" height="500" alt="Aurelian sitting in front of a computer" />
            </div>

            <div>
              <div>
                <h2>About Aurelian</h2>
                <p>Helping you build a site that works the first time</p>
              </div>
              <p>I specifically specialisein Front-end and WordPress. I can convert a design into a website, be it static site or WordPress.</p>

              <p>My name is Aurelian Spodarec. You've probably had experience working with people claiming they have 5 or 10 yeears of experience, and they are the best.
                While some might be good - as everyone claims to be - many times it turns out to be a different story!
              </p>

              <p>Let me tell you something. I don't have 10years of experience. What I do have is a process. It's a step-by-step guide that will help us get result you want.</p>
              <p>To keep the right perspective, I like to keep things organized and clean. Using a web-based services like Trello, you will know what I'm working on, and we will stay organized.</p>

              <p>This websites is pixel-perfect and future-proof. I don't merely make the websites beautiful on the outside, it's also beautiful under the hood; the code will be clean, modular and ready to hand off to any developer, or use in production. In addition, I reinforce this with methodologies that promote organization and keep the code high-quality. I utilize BEM, OOCSS, and all that jargon you don't want to hear. That translates to saving you money in the long term.</p>
              <p>Choose me for your next Front-end project, weather that's taking a PSD or Sketch to HTTML, or to WordPress.</p>

              <p>You can learn more about me from <a href="">my blog</a>, on what is it that I do, <a href="">LoveToCode</a>, where I write about technology and other interesting things. I like to contribute to the community and share my knowledge with others. Stay tuned to see my work on Youtube.</p>
              <p>If you're interested in my services, let's get started! Visit <a href="">my process</a> or <a href="">services page</a> and fill out my form below to get in touch.</p>
            </div>

          </div>

        </Container>
      </section>
      <BoxContact />
    </>
  )
}

export default About;
