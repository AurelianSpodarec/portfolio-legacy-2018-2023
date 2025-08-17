import Container from "@/components/_layout/Container";
import Hero from "@/components/molecules/Hero";
import CTAActionChoice from "@/components/section/CTAActionChoice";
import Head from "next/head";
import BoxContact from "../_components/BoxContact";

const processSteps = [
    {
        name: "Brainstorm & Briefing",
        description: "This is where I understand the project at hand and the brief in more detail. I believe it's fundamental to get to know you and your idea, so the process can run smoothly.",
        image: "stage1.jpeg",
    },
    {
        name: "Planning & Preparing",
        description: "We will stay organized by using a web-based service Trello. It will show you what is already completed, what needs to be done, and what I'm currently working on. You can add notes on whatever you want.",
        image: "stage2.jpeg",
    },
    {
        name: "Development",
        description: "This is the stage where I will deliver the build and construction of your website. I will regulary test and use my experience of agile methodologies to make sure your project is properly coded, feels and performs at maxiumum capacity.",
        image: "stage3.jpeg",
    },
    {
        name: "Results & Retention",
        description: "This is the time where I will be looking if there's antyhing I can make even better. Make sure that everything is properly performing at maximum capacity and getting the intended results you require.",
        image: "stage4.jpg",
    }
]

function ProcessSection({ step, item, inverted }: any) {
    console.log(inverted)
    return (
        <div className="relative h-screen w-full flex items-center align-middle">
            <div>

                <div className={`absolute top-0 right-0 bottom-0 left-0 ${inverted ? "bg-white/70" : "bg-black/70"}`}></div>
                <img src={`/images/${item.image}`} className="absolute inset-0 -z-10 h-full w-full object-cover" />

                <Container>
                    <div className="relative z-10">
                        <span className="text-7xl font-bold ">{step}</span>
                        <h2 className="text-yellow-500 text-5xl font-bold">{item.name}</h2>
                        <p>{item.description}</p>
                    </div>
                </Container>

            </div>
        </div>
    )
}

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

            <section className="bg-white py-28 text-2xl">
                <div className="max-w-4xl mx-auto">
                    <p>I work in stages to promote agility, communication, and collaboration. It's a step-by-step guide on howe we'll work, how I can help you, so the best result is achieved.</p>
                </div>
            </section>

            <section>
                {processSteps.map(((item, index) => {
                    const step = index + 1
                    const stepNumber = step.toString().padStart(2, '0')
                    const inverted = index % 2 === 0;
                    return <ProcessSection key={index} item={item} step={stepNumber} inverted={inverted} />
                }))}
            </section>

            <section className="bg-[#f2a538] text-center py-32">
                <h3 className="text-5xl">
                    <span className="block">The big question is...</span>
                    <span className="block">Are you ready to roll with me?</span>
                </h3>
            </section>

            <BoxContact />

            <CTAActionChoice />
        </>
    )
}

export default Process;
