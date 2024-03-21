import Header from "./components/header/page";
import Intro from "@/app/components/Intro/page";
import About from "@/app/components/about/page";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white w-full">
      <Header />
      <div className="h-screen">
        <Intro />
      </div>
      <div className="h-screen">
        <About />
      </div>
    </main>
  );
}
