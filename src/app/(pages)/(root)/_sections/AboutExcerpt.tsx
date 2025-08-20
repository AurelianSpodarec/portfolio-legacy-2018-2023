import Link from "next/link"
import { WebsiteRoutes } from "@/routes";

import Container from "@/components/Container";
import Section from "@/components/Section";
import Image from "next/image";

function SectionAboutExcerpt() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col lg:flex-row">
          <div>
            <h2>About me</h2>
            <p>Helping you build a site that works the first time</p>

            <p>Let me tell you something. I don’t have 10 years of experience. What I do have is a process. It’s a step-by-step guide that will help us get the result you want.</p>

            <Link href={WebsiteRoutes.ABOUT}>Read More</Link>
          </div>

          <Image height="500" width="500" className="w-[400px]" alt="Portrait of Aurelian Spodarec sitting on a chair, facing the camera" src="/images/aurelian-photo.jpg" />
        </div>
      </Container>
    </Section>
  );
}

export default SectionAboutExcerpt
