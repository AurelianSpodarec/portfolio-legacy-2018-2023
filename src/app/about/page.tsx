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
        <main className="flex text-red-500 min-h-screen flex-col items-center justify-between p-24">
            About
        </main>
        </>
    )
}

export default About;