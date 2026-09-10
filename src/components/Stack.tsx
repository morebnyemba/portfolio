import { stack } from "@/lib/data";

export default function Stack() {
  return (
    <section id="stack" className="border-t border-border px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-medium uppercase tracking-widest text-accent">Stack</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((group) => (
            <div key={group.title} className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-medium">{group.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
