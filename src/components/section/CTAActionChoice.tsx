import Section from "../_layout/Section";
import BoxAction from "../molecules/BoxAction";

function CTAActionChoice() {
  return (
    <Section size="clean">
      <div className="grid grid-cols-2">
        <BoxAction
          title="How I work, the process"
          description="How will the work be done? I will show you a step by step guide, that will explain you how we'll work from the start to the end."
          button={{
            text: "View the process",
            link: "/process"
          }}
        />
        <BoxAction
          title="Tell me about your project"
          description="If you're interested in hiring me for your next awesome project, don't hesitate to tell me about it, and let's get started!"
          inverted
          button={{
            text: "Share the details",
            link: "/contact"
          }}
        />
      </div>
    </Section>
  )
}

export default CTAActionChoice;
