import { clientSites, products } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="work" className="border-t border-border px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
          Products &amp; Platforms
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        <h2 className="mt-16 text-sm font-medium uppercase tracking-widest text-accent">
          Client &amp; Professional Websites
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clientSites.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
