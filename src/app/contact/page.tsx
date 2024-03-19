import Hero from "@/components/molecules/Hero";
import Head from "next/head";
import BoxContact from "../_components/BoxContact";

function Contact() {
    return (
        <>
            <Head>
                <title>Contact - Aurelian Spodarec</title>
                <meta
                    name="description"
                    content="I’m Aurelian Spodarec. I live in Manchester, United Kingdom where I develop design and develop webapps."
                />
            </Head>
            <Hero 
                title="Get In Touch"
                description="We'll get back to you as soon as humanly possible!"
                image={{
                    url: "/images/adult-book-business-min.jpg",
                    alt: "Desk with an Apple Computer with a coffee "
                }}
            />

            <BoxContact />
        </>
    )
}

export default Contact;