import { createFileRoute } from "@tanstack/react-router";
import luminaImg from "@/assets/project-lumina.jpg";
import kinetikImg from "@/assets/project-kinetik.jpg";
import arcaneImg from "@/assets/project-arcane.jpg";
import vertexImg from "@/assets/project-vertex.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elias Vance — Designer & Developer" },
      { name: "description", content: "Portfolio of Elias Vance, an independent designer and developer crafting intentional digital experiences." },
      { property: "og:title", content: "Elias Vance — Designer & Developer" },
      { property: "og:description", content: "Portfolio of Elias Vance, an independent designer and developer crafting intentional digital experiences." },
    ],
  }),
  component: Index,
});

const projects = [
  {
    title: "Lumina Protocol",
    discipline: "Visual Identity & Interface Design",
    year: "2024",
    image: luminaImg,
  },
  {
    title: "Kinetik Engine",
    discipline: "Front-end Development & Architecture",
    year: "2023",
    image: kinetikImg,
  },
  {
    title: "Arcane Studio",
    discipline: "E-commerce Experience",
    year: "2023",
    image: arcaneImg,
  },
  {
    title: "Vertex OS",
    discipline: "Design Systems & Product Strategy",
    year: "2022",
    image: vertexImg,
  },
];

function Index() {
  return (
    <div className="bg-canvas text-ink">
      <nav className="sticky top-0 z-50 bg-canvas/80 backdrop-blur-md">
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="font-display italic text-xl tracking-tight">
            Elias Vance
          </a>
          <div className="flex items-center gap-8 text-sm font-medium">
            <a href="#work" className="hover:text-accent-sage transition-colors">Work</a>
            <a href="#about" className="hover:text-accent-sage transition-colors">About</a>
            <a href="#contact" className="hover:text-accent-sage transition-colors">Contact</a>
          </div>
        </div>
        <div className="h-px bg-ink/5 w-full" />
      </nav>

      <section className="py-24 md:py-32">
        <div className="max-w-screen-xl mx-auto px-6">
          <h1 className="font-display text-5xl md:text-7xl leading-none text-balance max-w-[20ch]">
            Designer & Developer crafting intentional digital experiences for the next web.
          </h1>
          <p className="mt-8 text-base md:text-lg text-ink/70 max-w-[56ch] text-pretty">
            Currently exploring the intersection of tactile typography and high-performance engineering. Based in London, working globally with early-stage founders.
          </p>
        </div>
      </section>

      <section id="work" className="py-24 bg-zinc-100/50">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-display text-3xl leading-tight">Selected Works</h2>
            <span className="text-xs font-medium uppercase tracking-widest text-ink/40">
              2022 — 2024
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {projects.map((p) => (
              <article key={p.title} className="group cursor-pointer">
                <div className="w-full aspect-[4/3] overflow-hidden rounded-[min(1vw,12px)] outline-1 -outline-offset-1 outline-black/5 mb-6 bg-zinc-200">
                  <img
                    src={p.image}
                    alt={p.title}
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div className="max-w-[35ch]">
                    <h3 className="font-medium text-base mb-1">{p.title}</h3>
                    <p className="text-sm text-ink/60">{p.discipline}</p>
                  </div>
                  <span className="text-xs font-medium text-ink/40">{p.year}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-32">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-8">
              <h2 className="font-display text-4xl mb-8">The philosophy of the craft.</h2>
              <div className="space-y-6 text-ink/80 text-base max-w-[56ch] text-pretty">
                <p>
                  I believe that the best digital products feel inevitable. They possess a clarity of purpose and a refinement of detail that makes them disappear into the user's workflow.
                </p>
                <p>
                  My approach bridges the gap between high-level conceptual design and the granular reality of browser performance. I build interfaces that don't just look good, but feel fast, accessible, and resilient.
                </p>
              </div>

              <div className="mt-12">
                <a
                  href="#"
                  className="inline-flex items-center py-2 pr-4 pl-3 text-sm font-medium bg-ink text-canvas rounded-full ring-1 ring-ink hover:scale-[1.02] transition-transform"
                >
                  <svg className="size-4 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="py-24 border-t border-ink/5">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-ink/40 mb-6">
                Get in touch
              </p>
              <a
                href="mailto:hello@eliasvance.com"
                className="font-display text-3xl md:text-5xl hover:text-accent-sage transition-colors underline decoration-ink/10 underline-offset-8 decoration-1"
              >
                hello@eliasvance.com
              </a>
            </div>

            <div className="flex flex-col gap-4 text-sm font-medium">
              <a href="#" className="hover:text-accent-sage transition-colors">Twitter / X</a>
              <a href="#" className="hover:text-accent-sage transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-accent-sage transition-colors">Read.cv</a>
              <a href="#" className="hover:text-accent-sage transition-colors">GitHub</a>
            </div>
          </div>

          <div className="mt-24 pt-8 border-t border-ink/5 flex justify-between items-center text-[10px] font-medium uppercase tracking-widest text-ink/40">
            <span>© 2026 Elias Vance</span>
            <span>Handcrafted in London</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
