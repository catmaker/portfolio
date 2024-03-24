import Header from "./components/header/page";
import Intro from "@/app/components/Intro/page";
import About from "@/app/components/about/page";
import Project from "@/app/components/project/page";
import Contact from "@/app/components/contact/page";
export default function Home() {
  return (
    <main className=" bg-white text-black w-full bg-[url('/img/bubble.png')] bg-cover bg-center bg-fixed">
      <Header />
      <Intro />
      <About />
      <Project />
      <Contact />
    </main>
  );
}
