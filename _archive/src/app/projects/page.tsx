import Head from "next/head";

import Container from "@/components/_layout/Container";
import CTAActionChoice from "@/components/section/CTAActionChoice";
import Hero from "@/components/molecules/Hero";

import ProjectExcerpt, { IProjectExcerpt } from "./_components/ProjectExcerpt";

const dataProjects: IProjectExcerpt[] = [
  {
    thumbnail: "",
    name: "Tribe Dance",
    description: "Music. Artists. Creativity."
  },
  {
    thumbnail: "",
    name: "Cognitas Global",
    description: "Education"
  },
  {
    thumbnail: "",
    name: "Meakid E-commerce",
    description: "E-commerce selling fabrics"
  },
  {
    thumbnail: "",
    name: "LearnX",
    description: "Connecting Learners and Mentors"
  },
  {
    thumbnail: "",
    name: "Calendar",
    description: "You'll never forget a single thing!"
  },
  {
    thumbnail: "",
    name: "Buba Classified ADS",
    description: "List, make a deal, sell!"
  },
  {
    thumbnail: "",
    name: "Zoingericht",
    description: "House architecture"
  },
  {
    thumbnail: "",
    name: "Rose+Branding",
    description: "A designers portfolio"
  },
  {
    thumbnail: "",
    name: "LoveToCode",
    description: "Personal blog about technology"
  },
  {
    thumbnail: "",
    name: "You'll Speak",
    description: "Learning other languages"
  }
]

function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Aurelian Spodarec</title>
        <meta
          name="description"
          content="I’m Aurelian Spodarec. I live in Manchester, United Kingdom where I develop design and develop webapps."
        />
      </Head>

      <Hero
        title="Projects"
        description="A handful of projects I have worked on in the past."
        image={{
          url: "/images/adult-business-chair-min.jpg",
          alt: "Office space "
        }}
      />

      <section>
        <Container>

          <div className="grid grid-cols-3">
            {dataProjects.map(project => {
              return <ProjectExcerpt
                name={project.name}
                description={project.description}
                thumbnail={project.thumbnail}
              />
            })}
          </div>

        </Container>
      </section>

      <CTAActionChoice />
    </>
  )
}

export default Projects;
