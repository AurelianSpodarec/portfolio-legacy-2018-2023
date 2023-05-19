import Hero from "@/components/molecules/Hero";
import Head from "next/head";

function FAQ() {
    return (
        <>
            <Head>
                <title>FAQ - Aurelian Spodarec</title>
                <meta
                    name="description"
                    content="I’m Aurelian Spodarec. I live in Manchester, United Kingdom where I develop design and develop webapps."
                />
            </Head>
            <Hero 
                title="Frequently Asked Questions"
                description="Answers to the common questions I recieve from prospective clients"
                image={{
                    url: "/images/adult-agreement-outside-super-min.jpg",
                    alt: "Desk with an Apple Computer with a coffee "
                }}
            />
        </>
    )
}

export default FAQ;
