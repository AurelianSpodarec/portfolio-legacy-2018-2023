import dataObjections from "./data";
import { IFaqItem } from "./IFaq";

import Section from "@/components/Section";
import Container from "@/components/Container";
import Hero from "@/components/Hero";

function FaqItem({ question, answer }: IFaqItem) {
  return (
    <dl className="relative ml-10 mb-10">
      <span
        aria-hidden="true"
        className="absolute -left-12 top-[3px] flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#f2a538] text-white text-[14px] font-bold"
      >
        Q
      </span>
      <dt className="text-[#333] tracking-tight text-lg font-primary font-bold">{question}</dt>
      <dd className="text-lg text-[#222] font-primary leading-[34px]">{answer}</dd>
    </dl>
  );
}

function PageFaq() {
  return (
    <div>
      <Hero
        title="Frequently Asked Questions"
        desc="Answers to the common questions I recieved from prospective clients"
        bgImage="/images/adult-agreement-outside-super.jpg"
      />
      <div className="max-w-[730px] mx-auto">
        <Section>
          {dataObjections.map((item) => {
            return (
              <FaqItem question={item.question} answer={item.answer} />
            )
          })}
        </Section>
      </div>
    </div>
  );
}

export default PageFaq
