import Hero from "@/components/molecules/Hero";
import Head from "next/head";

function Services() {
    return (
        <>
            <Head>
                <title>Services - Aurelian Spodarec</title>
                <meta
                    name="description"
                    content="I’m Aurelian Spodarec. I live in Manchester, United Kingdom where I develop design and develop webapps."
                />
            </Head>
            <Hero 
                title="Services"
                description="A handful of services I specialise in for the best and efficient outcome"
                image={{
                    url: "/images/woman-writing.jpg",
                    alt: "A woman writing on a notepat "
                }}
            />
        </>
    )
}

export default Services;
