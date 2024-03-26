import About from "@/app/components/about/page";
import Contact from "@/app/components/contact/page";
import Experience from "@/app/components/experience/Experience";
import Header from "@/app/components/header/page";
import Intro from "@/app/components/Intro/page";
import Project from "@/app/components/project/page";
export default function Home() {
  return (
    <main className=" bg-white text-black w-full bg-[url('/img/bubble.png')] bg-cover bg-center bg-fixed">
      <Header />
      <div id="intro">
        <Intro />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="project">
        <Project />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
}
