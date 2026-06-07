import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 pt-24 pb-28">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink-400">
            SEO Local &nbsp;/&nbsp; Série de tutoriais
          </p>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tightish text-ink-900 md:text-6xl">
            Domine seu bairro nos resultados de busca.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600">
            Um ponto de partida leve e organizado para tudo que construímos na
            série de SEO local — projetado para crescer um recurso por vez.
          </p>
          <div className="mt-10 flex items-center gap-3">
            <a
              href="#features"
              className="rounded-full bg-ink-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-ink-800"
            >
              Ver o que tem aqui
            </a>
            <a
              href="#approach"
              className="rounded-full border border-ink-200 px-5 py-2.5 text-sm font-medium text-ink-800 transition hover:border-ink-400"
            >
              Ver a abordagem
            </a>
          </div>
        </section>

        <section
          id="features"
          className="border-t border-ink-100/80 bg-white"
        >
          <div className="mx-auto grid max-w-6xl gap-px overflow-hidden bg-ink-100/80 px-0 md:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="bg-white p-8">
                <div className="text-xs font-medium uppercase tracking-[0.18em] text-ink-400">
                  {f.tag}
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tightish text-ink-900">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="approach" className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tightish text-ink-900 md:text-4xl">
                Construído um bloco por vez.
              </h2>
              <p className="mt-4 text-ink-600 leading-relaxed">
                Cada página, rota e integração que adicionarmos será pequena, legível
                e fácil de acompanhar. Sem abstrações complicadas — apenas a versão
                mais simples de cada ideia.
              </p>
            </div>
            <ol className="space-y-5 text-sm text-ink-600">
              {STEPS.map((s, i) => (
                <li key={s} className="flex gap-4">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ink-200 text-[11px] font-medium text-ink-800">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{s}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contact" className="border-t border-ink-100/80">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="rounded-2xl border border-ink-100 bg-white p-10 md:p-14">
              <h2 className="text-2xl font-semibold tracking-tightish text-ink-900 md:text-3xl">
                Muito mais em breve.
              </h2>
              <p className="mt-3 max-w-xl text-ink-600">
                Esta é a base. Conforme a série de tutoriais cresce, esta página
                cresce junto — autenticação, dashboards, dados e muito mais.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

const FEATURES = [
  {
    tag: "Foundation",
    title: "Next.js + TypeScript",
    body: "App Router, server components, sensible defaults — no boilerplate noise.",
  },
  {
    tag: "Design",
    title: "Tailwind, lightly used",
    body: "A small palette and clear hierarchy. Easy to extend without fighting the system.",
  },
  {
    tag: "Future",
    title: "Ready for Supabase",
    body: "Folders and conventions in place so auth and data slot in without rework.",
  },
];

const STEPS = [
  "Start with a clean landing page that loads instantly.",
  "Add Supabase for auth and a Postgres backend.",
  "Layer in dashboards, lead capture, and reporting.",
  "Ship to Vercel and connect a real domain.",
];
