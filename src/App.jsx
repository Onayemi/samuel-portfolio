import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Certification } from "@/sections/Certification";
// import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="px-5 lg:px-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
        {/* <Testimonials /> */}
        <Certification />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
