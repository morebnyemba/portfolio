import { clientSites, products } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import StackedSection from "./StackedSection";

export default function Projects() {
  return (
    <StackedSection
      id="work"
      z={30}
      top="top-20"
      maxWidthClassName="max-w-5xl"
      pullUpClassName="sm:-mt-[600px]"
      spacerClassName="hidden sm:block sm:h-[35vh]"
    >
      <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
        Products &amp; Platforms
      </h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((project, i) => (
          <Reveal key={project.name} delay={i * 80} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <h2 className="mt-16 text-sm font-medium uppercase tracking-widest text-accent">
        Client &amp; Professional Websites
      </h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {clientSites.map((project, i) => (
          <Reveal key={project.name} delay={i * 80} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </StackedSection>
  );
}
