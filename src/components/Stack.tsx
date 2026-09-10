import { stack } from "@/lib/data";
import TerminalWindow from "./TerminalWindow";

function slugify(title: string) {
  return title.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-");
}

export default function Stack() {
  return (
    <section id="stack" className="border-t border-border px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-medium uppercase tracking-widest text-accent">Stack</h2>
        <div className="mt-6">
          <TerminalWindow title="moreblessing@dev: ~/stack">
            {stack.map((group, i) => (
              <div key={group.title} className={i > 0 ? "mt-5" : undefined}>
                <p>
                  <span className="text-accent">$</span> ls ./{slugify(group.title)}/
                </p>
                <p className="mt-1 pl-4 text-muted">
                  {group.items.map((item, idx) => (
                    <span key={item}>
                      {item}
                      {idx < group.items.length - 1 && <span className="text-border"> · </span>}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </TerminalWindow>
        </div>
      </div>
    </section>
  );
}
