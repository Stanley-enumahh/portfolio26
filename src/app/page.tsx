import type { CSSProperties } from "react";
import { site } from "@/content/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { RevealObserver } from "@/components/reveal-observer";

const label = "text-[11px] tracking-[0.08em] text-muted";

// Grows an underline from the left on hover
const underline =
  "relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.65,0,0.35,1)] hover:after:scale-x-100";

// Sets a CSS custom property (e.g. --d for delay) inline
const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

function ArrowUpRight() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export default function Home() {
  const name = site.name.toUpperCase();
  const lettersEnd = name.length * 55 + 150;

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-10">
      <RevealObserver />

      <header className="anim-rise flex items-center justify-between py-7">
        <a
          href="#"
          className="font-display text-sm font-extrabold tracking-tight"
        >
          {name}
          <span className="text-accent">.</span>
        </a>
        <nav className="flex items-center gap-5 sm:gap-7">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`${label} ${underline} hidden transition-colors hover:text-fg sm:inline`}
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
      </header>

      <main>
        <section className="pt-16 pb-24 sm:pt-28 sm:pb-32">
          <h1 className="font-display leading-none tracking-[-0.04em]">
            <span className="block text-[clamp(2.75rem,8vw,5rem)] font-extrabold">
              <span className="sr-only">{site.name}</span>
              <span aria-hidden="true">
                {[...name].map((letter, i) => (
                  <span
                    key={i}
                    className="anim-letter"
                    style={{ "--i": i } as CSSProperties}
                  >
                    {letter}
                  </span>
                ))}
                <span
                  className="anim-letter text-accent"
                  style={{ "--i": name.length + 2 } as CSSProperties}
                >
                  .
                </span>
              </span>
            </span>
            <span
              className="anim-rise mt-3 block text-[clamp(1.125rem,2.6vw,1.625rem)] font-light tracking-[-0.02em] text-muted"
              style={delay(lettersEnd)}
            >
              {site.role.toLowerCase()}
            </span>
          </h1>
          <div className="relative mt-12 grid gap-6 pt-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:gap-12">
            <span
              className="anim-draw absolute inset-x-0 top-0 h-px bg-line"
              style={delay(lettersEnd + 100)}
            />
            <p
              className="anim-rise max-w-lg text-[13px] leading-6 text-muted"
              style={delay(lettersEnd + 300)}
            >
              {site.intro}
            </p>
            <div
              className="anim-rise flex flex-wrap gap-5 text-[12px] tracking-[0.06em] sm:justify-end"
              style={delay(lettersEnd + 450)}
            >
              <a
                href="#work"
                className="group border-b border-fg pb-0.5 transition-colors hover:border-accent hover:text-accent"
              >
                see projects{" "}
                <span className="inline-block transition-transform duration-300 group-hover:translate-y-0.5">
                  ↓
                </span>
              </a>
              {site.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`${underline} text-muted transition-colors hover:text-fg`}
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="product" data-reveal="" className="scroll-mt-10 pb-28">
          <div className={`${label} mb-3 flex justify-between`}>
            <span>this will interest you.</span>
            <span>{site.product.role.toLowerCase()}</span>
          </div>
          <a
            href={site.product.href}
            target="_blank"
            rel="noreferrer"
            className="group block rounded-2xl border border-line p-5 transition-[border-color,transform] duration-500 hover:-translate-y-0.5 hover:border-accent sm:p-7"
          >
            <div className="flex items-start justify-between gap-6">
              <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-4">
                <h2 className="font-display text-2xl leading-none font-extrabold tracking-[-0.04em] sm:text-3xl">
                  {site.product.name}
                </h2>
                <p className="font-display text-sm font-light text-muted sm:text-base">
                  {site.product.tagline}
                </p>
              </div>
              <span className="grid size-8 shrink-0 place-items-center rounded-full border border-line text-muted transition-[color,border-color,transform] duration-500 group-hover:rotate-45 group-hover:border-accent group-hover:text-accent">
                <ArrowUpRight />
              </span>
            </div>
            <p className="mt-4 max-w-2xl text-[13px] leading-6 text-muted">
              {site.product.description}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-4 text-[12px]">
              <dl className="flex flex-wrap items-center gap-x-6 gap-y-2">
                {site.product.facts.map((fact) => (
                  <div key={fact.label} className="flex items-center gap-2">
                    <dt className="sr-only">{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
              <span className="border-b border-fg pb-0.5 tracking-[0.06em] transition-colors group-hover:border-accent group-hover:text-accent sm:ml-auto">
                {site.product.cta} ↗
              </span>
            </div>
          </a>
        </section>

        <section id="work" className="scroll-mt-10 pb-28">
          <div data-reveal="" className={`${label} mb-3 flex justify-between`}>
            <span>projects</span>
            <span>({String(site.projects.length).padStart(2, "0")})</span>
          </div>
          <ul className="border-b border-line">
            {site.projects.map((project, i) => {
              const linked = project.href && project.href !== "#";
              return (
                <li
                  key={project.title}
                  data-reveal=""
                  style={delay(i * 90)}
                  className="group relative grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-1 border-t border-line py-5 sm:grid-cols-[200px_minmax(0,1fr)_auto] sm:gap-x-8"
                >
                  <span className="absolute inset-x-0 -top-px h-px origin-left scale-x-0 bg-accent transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-x-100" />
                  <span className="font-display text-[15px] font-medium tracking-[-0.02em] transition-[color,transform] duration-300 group-hover:translate-x-1 group-hover:text-accent">
                    {project.title}
                  </span>
                  <span className="col-start-1 text-[13px] text-muted transition-colors duration-300 group-hover:text-fg sm:col-start-auto">
                    {project.description}
                  </span>
                  {linked && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit ${project.title}`}
                      className="col-start-2 row-span-2 row-start-1 grid size-9 place-items-center rounded-full text-muted transition-[color,background-color,transform] duration-300 hover:bg-line hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:col-start-3 sm:row-span-1"
                    >
                      <ArrowUpRight />
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </section>

        <section
          id="experience"
          data-reveal=""
          className="grid scroll-mt-10 gap-6 pb-28 sm:grid-cols-[180px_minmax(0,1fr)]"
        >
          <span className={label}>recent experience</span>
          <ul className="flex flex-col gap-5 text-sm">
            {site.experience.map((job, i) => (
              <li
                key={i}
                className="flex flex-wrap justify-between gap-x-4 gap-y-1"
              >
                <span>
                  {job.role} <span className="text-muted">· {job.company}</span>
                </span>
                <span className="text-[12px] text-muted">{job.period}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer
        id="contact"
        data-reveal=""
        className="scroll-mt-10 border-t border-line pt-16 pb-10"
      >
        <p className={`${label} mb-6`}>contact</p>
        <a
          href={`mailto:${site.email}`}
          className="group inline-block font-display text-[clamp(1.5rem,5vw,3.25rem)] leading-tight font-extrabold tracking-[-0.04em] transition-colors hover:text-accent"
        >
          let&apos;s build
          <br />
          <span className="inline-block font-light text-muted transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:translate-x-3">
            something cool.
          </span>
        </a>
        <div className="mt-16 flex flex-wrap justify-between gap-4 text-[12px] text-muted">
          <a
            href={`mailto:${site.email}`}
            className={`${underline} transition-colors hover:text-fg`}
          >
            {site.email}
          </a>
          <span>
            © {site.year} {site.name}
          </span>
        </div>
      </footer>
    </div>
  );
}
