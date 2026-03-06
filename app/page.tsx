import {
  Navbar,
  Hero,
  About,
  Experience,
  Education,
  Connect,
  Footer,
} from "@/components/sections";
import { ThankYou } from "@/components/sections/ThankYou";
import { about, experiences, educations, tools } from "@/lib/data";

export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero about={about} />
        <About about={about} tools={tools} />
        <Experience experiences={experiences} />
        <Education educations={educations} />
        <Connect about={about} />
        <ThankYou about={about} />
      </main>
      <Footer about={about} />
    </>
  );
}
