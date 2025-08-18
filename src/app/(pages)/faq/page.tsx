import Hero from "@/components/Hero";

import dataObjections from "./data";
import { IFaqItem } from "./IFaq";

function FaqItem({ question, answer }: IFaqItem) {
  return (
    <dl className="relative ml-10">
      <span
        aria-hidden="true"
        className="absolute -left-10 top-[3px] flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#f2a538] text-white text-[14px] font-bold"
      >
        Q
      </span>
      <dt className="text-[#333] tracking-tight text-lg font-primary font-extrabold">{question}</dt>
      <dd className="text-md">{answer}</dd>
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
      <section>
        {dataObjections.map((item) => {
          return (
            <FaqItem question={item.question} answer={item.answer} />
          )
        })}
      </section>
    </div>
  );
}

export default PageFaq
