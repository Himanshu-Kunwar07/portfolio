import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Lab from "@/components/Lab";
import Marquee from "@/components/Marquee";
import StackGrid from "@/components/StackGrid";
import WorkScroller from "@/components/WorkScroller";
import { projects, ticker } from "@/data/content";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee items={ticker} />
      <About />
      <Experience />
      <WorkScroller projects={projects} />
      <StackGrid />
      <Marquee items={ticker} reverse />
      <Lab />
      <Contact />
    </>
  );
}
