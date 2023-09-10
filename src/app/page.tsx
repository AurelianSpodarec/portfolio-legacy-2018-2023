import Container from "@/components/_layout/Container";
import Section from "@/components/_layout/Section";
import CTABlock from "@/components/molecules/CTABlock";
import Hero from "@/components/molecules/Hero";

function Home() {
    return (
        <div>
            <Hero 
                title="Home"
                image={{
                    url: "/images/blur-cafe-chairs-min.jpg",
                    alt: "Alrt"
                }}
             />

            <Section>
            <Container>

                <p className="text-xl">I help business owners just like you, establish a strong presence online by taking a strategic approach. A pretty website, responsive desing - all of that is default for any website. What you need is a strategy that'll help convert your customers into leads.</p>

            </Container>
            </Section>

            <Section size="clean">

                <div className="grid grid-cols-1 lg:grid-cols-3 h-[700px]">
                    <CTABlock 
                        title="My Services" 
                        image={{
                            url: "/images/woman-writing.jpg",
                            alt: ""
                        }}
                        link={{
                            url: "/services"
                        }}
                    />
                    <CTABlock 
                        title="The Process" 
                        image={{
                            url: "/images/process-finger.jpeg",
                            alt: ""
                        }}
                        link={{
                            url: "/process",
                        }}
                    />
                    <CTABlock 
                        title="My Work" 
                        image={{
                            url: "/images/man-writing-computer.jpeg",
                            alt: ""
                        }}
                        link={{
                            url: "/projects"
                        }}
                    />
                </div>
            </Section>
        </div>
    )
}

export default Home;
