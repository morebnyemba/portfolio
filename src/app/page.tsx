import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Stack from "@/components/Stack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Stack />
        <div className="relative z-30 bg-background">
          <Projects />
          <Services />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
