import Header from "./components/header/page";
import Intro from "@/app/components/Intro/page";
import About from "@/app/components/about/page";
import Project from "@/app/components/project/page";
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black w-full">
      <Header />
      <div className="h-screen">
        <Intro />
      </div>
      <div className="h-screen">
        <About />
      </div>
      <div className="h-screen">
        <Project />
      </div>
    </main>
  );
}
