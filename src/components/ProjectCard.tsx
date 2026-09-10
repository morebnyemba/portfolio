import Link from "next/link";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  const content = (
    <div className="group h-full rounded-2xl border border-border bg-surface p-6 transition-colors hover:bg-surface-hover">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-medium">{project.name}</h3>
        {project.url && (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-accent"
          >
            <path
              d="M7 17 17 7M17 7H9M17 7v8"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <p className="mt-2 text-sm text-muted">{project.description}</p>
      {project.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  if (!project.url) return content;

  return (
    <Link href={project.url} target="_blank" rel="noreferrer" className="block h-full">
      {content}
    </Link>
  );
}
