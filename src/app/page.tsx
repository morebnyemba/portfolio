import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Stack from "@/components/Stack";
import StackGroup from "@/components/StackGroup";
import Footer from "@/components/Footer";
import { personJsonLd } from "@/lib/seo";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main" className="flex-1">
        <Hero />
        <StackGroup>
          <About />
          <Stack />
          <Projects />
          <Services />
        </StackGroup>
        <div className="relative z-50 bg-background">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
