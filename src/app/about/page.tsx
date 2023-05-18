import Hero from "@/components/molecules/Hero";
import Head from "next/head";

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
                description="Here you can get to know me and how I could be of service"
                image={{
                    url: "/images/apple-device-blur-blurry-min.jpg",
                    alt: "Desk with an Apple Computer with a coffee "
                }}
            />
        </>
    )
}

export default About;