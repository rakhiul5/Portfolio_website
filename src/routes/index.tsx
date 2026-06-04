import { createFileRoute } from "@tanstack/react-router";
import rakhiulAsset from "@/assets/rakhiul-cutout.png.asset.json";
import jennyPoint from "@/assets/jenny-point.png";
const jenny = rakhiulAsset.url;
import svcUx from "@/assets/svc-ux.jpg";
import svcWeb from "@/assets/svc-web.jpg";
import svcLanding from "@/assets/svc-landing.jpg";
import portfolioLirante from "@/assets/portfolio-lirante.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rakhiul — Product Designer Portfolio" },
      { name: "description", content: "Portfolio of Rakhiul, a product designer with 10 years of experience in UI/UX, web and landing page design." },
      { property: "og:title", content: "Rakhiul — Product Designer Portfolio" },
      { property: "og:description", content: "Portfolio of Rakhiul, a product designer with 10 years of experience in UI/UX, web and landing page design." },
    ],
  }),
  component: Index,
});

const Star = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="size-4 text-brand">
    <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.77l-5.2 2.74.99-5.79L1.58 7.62l5.82-.85L10 1.5z" />
  </svg>
);

const ArrowUR = ({ className = "size-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
  </svg>
);

const services = [
  { title: "UI/ UX Design", img: svcUx },
  { title: "Web Design", img: svcWeb },
  { title: "Landing Page", img: svcLanding },
];

const filters = ["Landing Page", "Product Design", "Animation", "Glassmorphism", "Cards"];

const blogs = [
  {
    img: blog1,
    tag: "UI / UX Design",
    title: "Design Unraveled: Behind the Scenes of UI/UX Magic",
    author: "Jayesh Patil",
    date: "10 Nov, 2023",
  },
  {
    img: blog2,
    tag: "App Design",
    title: "Sugee: Loan Management System for Rural Sector.",
    author: "Jayesh Patil",
    date: "09 Oct, 2023",
  },
  {
    img: blog3,
    tag: "App Design",
    title: "Cinetrade: Innovative way to invest in Digital Media",
    author: "Jayesh Patil",
    date: "13 Aug, 2023",
  },
];

const marquee = ["UX Design", "App Design", "Dashboard", "Wireframe", "User Research"];

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <span className="inline-flex items-center justify-center size-9 rounded-full bg-brand text-white font-bold text-sm">
        RC
      </span>
      <span className="font-bold tracking-wide">RCREA</span>
    </div>
  );
}

function Index() {
  return (
    <div className="bg-canvas text-ink font-sans">
      {/* NAV */}
      <header className="w-full pt-6">
        <nav className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between bg-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.06)] px-6 py-3">
            <ul className="flex items-center gap-1 text-sm font-medium">
              <li>
                <a href="#home" className="px-4 py-2 rounded-full bg-brand text-white">Home</a>
              </li>
              <li><a href="#about" className="px-4 py-2 hover:text-brand transition-colors">About</a></li>
              <li><a href="#services" className="px-4 py-2 hover:text-brand transition-colors">Service</a></li>
            </ul>
            <Logo />
            <ul className="flex items-center gap-1 text-sm font-medium">
              <li><a href="#resume" className="px-4 py-2 hover:text-brand transition-colors">Resume</a></li>
              <li><a href="#portfolio" className="px-4 py-2 hover:text-brand transition-colors">Project</a></li>
              <li><a href="#contact" className="px-4 py-2 hover:text-brand transition-colors">Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="pt-16 pb-24 relative overflow-hidden">
        {/* Decorative floating shapes */}
        <div className="absolute top-20 left-10 size-3 rounded-full bg-brand/40 animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute top-32 right-16 size-2 rounded-full bg-brand/60 animate-bounce" style={{ animationDuration: '2.5s' }} />
        <div className="absolute bottom-40 left-16 size-4 rounded-full border-2 border-brand/30 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-48 right-10 size-3 rotate-45 bg-brand/20 animate-bounce" style={{ animationDuration: '3.5s' }} />
        <div className="absolute bottom-60 right-24 size-2 rounded-full bg-brand/50 animate-pulse" />
        <div className="absolute top-16 left-1/3 size-5 rounded-full border border-brand/25 animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-32 left-1/4 size-6 rounded-full bg-brand/10" />
        <div className="absolute top-40 right-1/3 size-8 rounded-full bg-brand/10" />

        {/* Decorative ring behind portrait */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-dashed border-brand/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full border border-brand/10" />

        <div className="max-w-6xl mx-auto px-4 text-center relative">
          <span className="inline-block font-hand text-2xl px-5 py-1 rounded-full border border-ink/20">
            Hello!
          </span>
          <h1 className="mt-4 font-display font-bold text-5xl md:text-7xl leading-tight">
            I'm <span className="text-brand">Rakhiul,</span>
            <br />
            Product Designer
          </h1>

          <div className="relative mt-8 flex justify-center">
            <div className="absolute inset-x-0 bottom-0 mx-auto w-[420px] h-[420px] rounded-full bg-brand-soft" />
            <img
              src={jenny}
              alt="Rakhiul, product designer"
              width={520}
              height={520}
              className="relative w-[420px] h-[420px] object-contain object-bottom"
            />

            {/* Left testimonial */}
            <div className="hidden md:block absolute left-0 top-24 max-w-[220px] text-left">
              <div className="text-brand text-3xl leading-none font-serif">"</div>
              <p className="text-sm text-ink/70 mt-1">
                Rakhiul's exceptional product design ensured our website's success.
              </p>
              <p className="text-sm font-semibold mt-2">Highly Recommended</p>
            </div>

            {/* Right rating */}
            <div className="hidden md:block absolute right-0 top-24 max-w-[180px] text-left">
              <div className="flex gap-0.5"><Star /><Star /><Star /><Star /><Star /></div>
              <p className="font-display font-bold text-3xl mt-1">10 Years</p>
              <p className="text-sm text-ink/60">Experince</p>
            </div>

            {/* Buttons over circle */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
              <a href="#portfolio" className="inline-flex items-center gap-2 bg-brand text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-brand/90 transition">
                Portfolio <ArrowUR />
              </a>
              <a href="#contact" className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium bg-white border border-ink/10 hover:border-brand hover:text-brand transition">
                Hire me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-night text-white py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl">
              My <span className="text-brand">Services</span>
            </h2>
            <p className="text-white/60 max-w-md text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <article key={s.title} className="group rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6 relative overflow-hidden">
                <h3 className="font-semibold text-lg mb-4">{s.title}</h3>
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-white/5">
                  <img src={s.img} alt={s.title} width={800} height={600} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <a href="#" className="absolute bottom-5 right-5 inline-flex items-center justify-center size-10 rounded-full bg-white text-night hover:bg-brand hover:text-white transition">
                  <ArrowUR />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY HIRE ME */}
      <section id="about" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-3xl bg-zinc-100 p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="absolute inset-x-0 bottom-0 mx-auto w-[280px] h-[280px] rounded-full bg-brand-soft" />
              <img src={jennyPoint} alt="Rakhiul pointing" width={420} height={420} loading="lazy" className="relative mx-auto w-[320px] h-[320px] object-contain object-bottom" />
            </div>
            <div>
              <h2 className="font-display font-bold text-4xl md:text-5xl">
                Why <span className="text-brand">Hire me?</span>
              </h2>
              <p className="text-ink/70 mt-4 max-w-md text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6 max-w-sm">
                <div>
                  <p className="font-display font-bold text-3xl">450+</p>
                  <p className="text-sm text-ink/60 mt-1">Project Completed</p>
                </div>
                <div>
                  <p className="font-display font-bold text-3xl">450+</p>
                  <p className="text-sm text-ink/60 mt-1">Project Completed</p>
                </div>
              </div>
              <a href="#contact" className="mt-8 inline-flex items-center px-6 py-2.5 rounded-full border border-ink/20 text-sm font-medium hover:bg-brand hover:text-white hover:border-brand transition">
                Hire me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl">
              Lets have a look at
              <br />
              my <span className="text-brand">Portfolio</span>
            </h2>
            <a href="#" className="inline-flex items-center gap-2 bg-brand text-white px-5 py-2.5 rounded-full text-sm font-medium">
              See All <ArrowUR />
            </a>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[0, 1].map((k) => (
                <div key={k} className="rounded-2xl overflow-hidden bg-zinc-100 aspect-[4/3]">
                  <img src={portfolioLirante} alt="Lirante project" width={1024} height={768} loading="lazy" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <button aria-label="Next" className="hidden md:inline-flex items-center justify-center size-11 rounded-full bg-brand text-white absolute -right-4 top-1/2 -translate-y-1/2 shadow-lg">
              <ArrowUR className="size-5" />
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
            {filters.map((f, i) => (
              <button key={f} className={`px-4 py-1.5 rounded-full text-sm border ${i === 0 ? "bg-brand text-white border-brand" : "border-ink/15 text-ink/70 hover:border-brand hover:text-brand"}`}>
                {f}
              </button>
            ))}
          </div>

          <div className="mt-10 max-w-2xl mx-auto text-center">
            <h3 className="font-semibold text-xl inline-flex items-center gap-2">
              Lirante - Food Dilvery Solution <ArrowUR />
            </h3>
            <p className="text-ink/60 mt-3 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Sed lobortis orci elementum egestas lobortis.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-night text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display font-bold text-4xl md:text-5xl">
              Testimonials That
              <br />
              Speak to <span className="text-brand">My Results</span>
            </h2>
            <p className="text-white/60 mt-4 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Sed lobortis orci elementum egestas lobortis.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[0, 1, 2].map((k) => (
              <article key={k} className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur">
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-12 rounded-full bg-brand-soft" />
                  <div>
                    <p className="font-semibold">Jayesh Patil</p>
                    <p className="text-xs text-white/60">CEO, Lirante</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  <Star /><Star /><Star /><Star /><Star />
                  <span className="ml-2 text-sm">5.0</span>
                </div>
                <p className="text-sm text-white/70 leading-relaxed">
                  Sed congue interdum ligula a dignissim. Sed lobortis orci elementum egestas lobortis. Sed lobortis orci elementum egestas lobortis.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / EMAIL */}
      <section id="contact" className="py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl">
            Have an Awsome Project
            <br />
            Idea? <span className="text-brand">Let's Discuss</span>
          </h2>
          <form className="mt-8 flex items-center gap-2 max-w-lg mx-auto bg-zinc-100 rounded-full p-1.5">
            <span className="pl-4 pr-2 text-brand">
              <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </span>
            <input type="email" placeholder="Enter Email Address" className="flex-1 bg-transparent outline-none text-sm py-2" />
            <button type="button" className="bg-brand text-white text-sm font-medium px-6 py-2.5 rounded-full">Send</button>
          </form>

          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-ink/60">
            <span className="inline-flex items-center gap-1"><Star /> 4.9/5 Average Ratings</span>
            <span>🏆 25+ Winning Awards</span>
            <span>✅ Certified Product Designer</span>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="bg-brand text-white py-4 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-[marquee_25s_linear_infinite]">
          {[...marquee, ...marquee, ...marquee].map((m, i) => (
            <span key={i} className="font-display font-semibold text-2xl inline-flex items-center gap-12">
              {m} <span className="text-white/80">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* BLOG */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-display font-bold text-4xl md:text-5xl">
              From my
              <br />
              blog post
            </h2>
            <a href="#" className="inline-flex items-center gap-2 bg-brand text-white px-5 py-2.5 rounded-full text-sm font-medium">
              See All <ArrowUR />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs.map((b) => (
              <article key={b.title} className="group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100">
                  <img src={b.img} alt={b.title} width={800} height={600} loading="lazy" className="w-full h-full object-cover" />
                  <a href="#" className="absolute bottom-3 right-3 inline-flex items-center justify-center size-10 rounded-full bg-white text-ink hover:bg-brand hover:text-white transition">
                    <ArrowUR />
                  </a>
                </div>
                <p className="mt-4 text-xs font-medium text-brand">{b.tag}</p>
                <div className="mt-2 flex items-center gap-3 text-xs text-ink/60">
                  <span className="inline-flex items-center gap-1">
                    <span className="size-5 rounded-full bg-brand-soft inline-block" />
                    {b.author}
                  </span>
                  <span>• {b.date}</span>
                </div>
                <h3 className="mt-2 font-semibold text-lg leading-snug">{b.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-brand text-white py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="font-display font-bold text-3xl md:text-4xl">Lets Connect there</h2>
          <a href="#contact" className="inline-flex items-center gap-2 bg-white text-ink px-6 py-3 rounded-full text-sm font-medium self-start md:self-auto">
            Hire me <ArrowUR />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-night text-white pt-16 pb-6">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Logo />
            <p className="text-sm text-white/60 mt-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
            </p>
            <div className="flex gap-3 mt-5 text-white/70">
              <a href="#" aria-label="Facebook" className="hover:text-brand">f</a>
              <a href="#" aria-label="Twitter" className="hover:text-brand">𝕏</a>
              <a href="#" aria-label="Instagram" className="hover:text-brand">◎</a>
              <a href="#" aria-label="YouTube" className="hover:text-brand">▶</a>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-white/50 mb-4">Navigation</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-brand">Home</a></li>
              <li><a href="#about" className="hover:text-brand">About Us</a></li>
              <li><a href="#services" className="hover:text-brand">Service</a></li>
              <li><a href="#resume" className="hover:text-brand">Resume</a></li>
              <li><a href="#portfolio" className="hover:text-brand">Project</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-white/50 mb-4">Contact</p>
            <ul className="space-y-2 text-sm text-white/80">
              <li>+91 7738443636</li>
              <li>Jaycrea36@mail.com</li>
              <li>Portfolio-jcrea.com</li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-white/50 mb-4">Get the latest information</p>
            <div className="flex bg-white/10 rounded-full p-1">
              <input className="flex-1 bg-transparent outline-none text-sm px-3" placeholder="Email Address" />
              <button className="bg-brand text-white rounded-full px-4 py-2 text-sm">
                <ArrowUR />
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/50">
          <span>Copyright© 2023 Jayesh. All Rights Reserved.</span>
          <span>User Tehrm & Conditions | Privacy Policy</span>
        </div>
      </footer>
    </div>
  );
}
