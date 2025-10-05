import SectionHero from "./_sections/Hero";
import SectionIntro from "./_sections/Intro";
import SectionMultiCTA from "./_sections/MultiCTA";
import SectionAboutExcerpt from "./_sections/AboutExcerpt";
import Section from "@/components/Section";

function WebRoot() {
  return (
    <>
      <SectionHero />
      <SectionIntro />
      <SectionMultiCTA />
      <SectionAboutExcerpt />
      <Section className="uppercase bg-[#272c31] text-5xl py-36 text-white text-center font-bold">
        <span>Awesome. Creative. Developer.</span>
      </Section>
    </>
  );
}

export default WebRoot
