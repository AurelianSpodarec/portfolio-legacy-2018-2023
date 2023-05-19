import Hero from "@/components/molecules/Hero";
import Head from "next/head";

function Process() {
    return (
        <>
            <Head>
                <title>Process - Aurelian Spodarec</title>
                <meta
                    name="description"
                    content="I’m Aurelian Spodarec. I live in Manchester, United Kingdom where I develop design and develop webapps."
                />
            </Head>
            <Hero 
                title="Process"
                description="Having a solid process helps keeping the progress of the app"
                image={{
                    url: "/images/collaborate-collaboration-company-min.jpg",
                    alt: "Collaboration image "
                }}
            />
        </>
    )
}

export default Process;
