import Container from "@/components/_layout/Container";
import Hero from "@/components/molecules/Hero";
import Head from "next/head";

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

function ProcessSection({ step, item, inverted}:any) {
    return (
        <div className="relative h-screen w-full flex items-center align-middle">
        <div>

            <div className="absolute top-0 right-0 bottom-0 left-0 bg-white/40"></div>
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
            <section>
                <p>I work in stages to promote agility, communication, and collaboration. It's a step-by-step guide on howe we'll work, how I can help you, so the best result is achieved.</p>
            </section>

            <section>
                {processSteps.map(((item, index) => {
                    const step = index + 1
                    const stepNumber = step.toString().padStart(2, '0')
                    return <ProcessSection key={index} item={item} step={stepNumber} />
                }))}
            </section>
        </>
    )
}

export default Process;
