import Hero from "@/components/molecules/Hero";
import Head from "next/head";

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
        </>
    )
}

export default Projects;
