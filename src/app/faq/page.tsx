import Head from "next/head";

import Container from "@/components/_layout/Container";
import Hero from "@/components/molecules/Hero";

import FAQItem, { IFAQItem } from "./_components/FAQItem";

const dataFAQ:IFAQItem[] = [
  {
    title: "How long does a website take to build?",
    description: "It really depends on the project. I have built websites from scratch in as little as one week. Other projects can take much longer. /n If you want me to do the design as well, it could take up to a month. I will work with you to determine the scope of your project and estimate how long it will take to complete."
  },
  {
    title: "How much does a website cost?",
    description: "The cost of a website is dependent on various factors, just like the cost of a house may vary. It depends on features, the amount of features, the complexity of the site and many more things. //space On a fixed price project, if I have already built a feature but you decide you want a different feature, I will charge you my hourly rate for that feature."
  },
  {
    title: "How do you handle payments?",
    description: "I prefer to collect 100% payment up front. My time is best spent working and solving your problems, not tracking payments. //space However, if you aren't comfortable with that, I can break payments into multiple milestones, as long as the payments are made prior starting the next part of the project."
  },
  {
    title: "What does the development process look like?",
    description: "There are 4 steps in my development process so the project runs smoothly. You can check the [entire process here](link)."
  },
  {
    title: "Do you know how to design?",
    description: "If you don't need fancy graphics, I can create a full website from design and development to launch on a live server. I understand colour theory, modern desing trends and I have the ability to make a website that looks good, and most importanly is user-friendly."
  }
]

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

      <section>
        <Container>

          {dataFAQ.map(item => {
            return (
              <FAQItem
                title={item.title}
                description={item.description}
              />
            )
          })}

        </Container>
      </section>
    </>
  )
}

export default FAQ;
