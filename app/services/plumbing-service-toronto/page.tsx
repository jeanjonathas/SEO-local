import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL = "https://acmeplumbing.example";
const PAGE_URL = `${SITE_URL}/services/plumbing-service-toronto`;
const PHONE = "(416) 555-0142";
const BRAND = "Acme Plumbing Co.";

export const metadata: Metadata = {
  title: "Plumbing Service Toronto · 24/7 Licensed Plumbers · Acme",
  description:
    "Toronto plumbing service that shows up fast. Burst pipes, water heaters, drain repair across the GTA. Licensed, insured, fixed-price quotes.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Plumbing Service Toronto · 24/7 Licensed Plumbers",
    description:
      "Toronto plumbing service. Burst pipes, water heaters, drains. Licensed, insured, fixed-price quotes.",
    locale: "en_CA",
    siteName: BRAND,
  },
};

function JsonLd() {
  const plumberSchema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: BRAND,
    image: `${SITE_URL}/logo.png`,
    "@id": PAGE_URL,
    url: PAGE_URL,
    telephone: PHONE,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 King St W",
      addressLocality: "Toronto",
      addressRegion: "ON",
      postalCode: "M5H 1A4",
      addressCountry: "CA",
    },
    areaServed: [
      "Toronto",
      "Mississauga",
      "North York",
      "Scarborough",
      "Etobicoke",
      "East York",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "184",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(plumberSchema) }}
    />
  );
}

export default function PlumbingServiceTorontoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <JsonLd />
      <PlumbingHeader />
      <main className="flex-1">
        <Hero />
        <TrustedBy />
        <WhatWeDo />
        <CallToAction />
      </main>
      <PlumbingFooter />
    </div>
  );
}

function PlumbingHeader() {
  return (
    <header className="border-b border-ink-100/80 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/services/plumbing-service-toronto" className="flex items-center gap-2.5">
          <LogoMark />
          <span className="text-sm font-semibold tracking-tightish text-ink-900">
            {BRAND}
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-ink-700 md:flex">
          <a className="transition hover:text-ink-900" href="#services">Serviços</a>
          <a className="transition hover:text-ink-900" href="#area">Área de atendimento</a>
          <a className="transition hover:text-ink-900" href="#contact">Contato</a>
        </nav>
        <a
          href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}
          className="rounded-full bg-ink-900 px-4 py-2 text-xs font-medium text-white transition hover:bg-ink-800"
        >
          Ligar {PHONE}
        </a>
      </div>
    </header>
  );
}

function PlumbingFooter() {
  return (
    <footer className="border-t border-ink-100/80 bg-[#fafaf9]">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-8 text-xs text-ink-500 md:flex-row md:items-center">
        <div className="flex items-center gap-2.5">
          <LogoMark />
          <span className="font-semibold text-ink-800">{BRAND}</span>
          <span>·</span>
          <span>Encanador Licenciado Toronto #2876541</span>
        </div>
        <span>
          © {new Date().getFullYear()} {BRAND} · 123 King St W, Toronto · {PHONE}
        </span>
      </div>
    </footer>
  );
}

function LogoMark() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-ink-900"
      aria-hidden="true"
    >
      <path d="M3 12h4l2-3h6l2 3h4" />
      <path d="M9 9V6" />
      <path d="M15 9V6" />
      <path d="M5 12v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" />
    </svg>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[920px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(253,230,138,0.45)_0%,_transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-20 pb-12 text-center">
        <Pill>Toronto · 24/7 · Licenciado</Pill>

        <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tightish text-ink-900 md:text-6xl">
          Serviço de encanamento em Toronto. Mesmo dia. Preço fixo.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-600">
          Canos rompidos, aquecedores, reparo de ralos em todo o GTA. Licenciado,
          segurado, pontual. Orçamos antes de começar &mdash; sem surpresas na
          fatura.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}
            className="rounded-full bg-ink-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-ink-800"
          >
            Ligar {PHONE} <span className="ml-1">&rarr;</span>
          </a>
          <Link
            href="/feedback"
            className="rounded-full border border-ink-200 bg-white px-6 py-3 text-sm font-medium text-ink-800 transition hover:border-ink-400"
          >
            Solicitar orçamento grátis
          </Link>
        </div>

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">
          Tempo médio de resposta · 38 min &middot; 4.9★ de 184 avaliações em Toronto
        </p>

        <div className="mx-auto mt-14 max-w-5xl">
          <PlumbingDashboard />
        </div>
      </div>
    </section>
  );
}

function PlumbingDashboard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-[0_30px_80px_-30px_rgba(10,16,24,0.25)]">
      <div className="flex items-center justify-between border-b border-ink-100 px-5 py-3">
        <div className="flex items-center gap-2">
          <LogoMark />
          <span className="text-sm font-semibold tracking-tightish text-ink-900">
            Painel de Atendimento
          </span>
        </div>
        <div className="hidden items-center gap-3 text-xs text-ink-400 md:flex">
          <span>Today · {new Date().toLocaleDateString("en-CA")}</span>
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 font-bold text-emerald-700">
            ● 12 veículos ativos
          </span>
          <div className="flex items-center gap-2">
            <span className="h-6 w-6 rounded-full bg-ink-900 text-center text-[10px] font-bold leading-6 text-[#fde68a]">
              MK
            </span>
            <span className="font-semibold text-ink-800">Mike K.</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-0 bg-[#fafaf9]">
        <aside className="col-span-3 hidden flex-col gap-1 border-r border-ink-100 bg-white px-3 py-5 text-sm md:flex">
          {[
            { label: "Despacho", active: true },
            { label: "Trabalhos ativos" },
            { label: "Orçamentos" },
            { label: "Clientes" },
            { label: "Veículos" },
            { label: "Faturas" },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex items-center justify-between rounded-md px-3 py-2 ${
                item.active
                  ? "bg-ink-900 text-white"
                  : "text-ink-600 hover:bg-ink-50"
              }`}
            >
              <span className="font-medium">{item.label}</span>
              {item.active && (
                <span className="text-xs text-[#fde68a]">&rarr;</span>
              )}
            </div>
          ))}
        </aside>

        <div className="col-span-12 flex flex-col gap-4 p-5 md:col-span-9">
          <div className="flex items-center justify-between">
            <div className="text-left">
              <h3 className="text-lg font-semibold tracking-tightish text-ink-900">
                Despacho ao vivo · Toronto + GTA
              </h3>
              <p className="text-xs text-ink-400">
                3 chamadas de emergência na fila · resposta média 38 min
              </p>
            </div>
            <button className="rounded-full bg-ink-900 px-4 py-2 text-xs font-medium text-[#fde68a]">
              + Despachar veículo
            </button>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Trabalhos ativos", val: "12", delta: "agora" },
              { label: "Resp. média", val: "38m", delta: "-12m" },
              { label: "Trabalhos hoje", val: "47", delta: "+18%" },
              { label: "Avaliação", val: "4.9★", delta: "184 aval." },
            ].map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-xl border border-ink-100 bg-white px-4 py-3 text-left"
              >
                <div className="text-[10px] font-semibold uppercase tracking-wider text-ink-400">
                  {kpi.label}
                </div>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="font-mono text-2xl font-bold text-ink-900">
                    {kpi.val}
                  </span>
                  <span className="text-xs font-bold text-emerald-600">
                    {kpi.delta}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-xl border border-ink-100 bg-white p-4 md:col-span-2">
              <div className="flex items-center justify-between text-xs font-semibold text-ink-400">
                <span>Área de atendimento ativa · GTA</span>
                <span>12 veículos ativos</span>
              </div>
              <ServiceAreaMap />
            </div>

            <div className="rounded-xl border border-ink-100 bg-white p-4">
              <div className="text-xs font-semibold text-ink-400 text-left">
                Fila de trabalhos ao vivo
              </div>
              <ul className="mt-3 space-y-2 text-left text-xs">
                {[
                  { who: "Sarah K.", area: "Riverdale", type: "Cano rompido", status: "A CAMINHO", color: "bg-red-100 text-red-700" },
                  { who: "David M.", area: "North York", type: "Aquecedor", status: "NO LOCAL", color: "bg-amber-100 text-amber-800" },
                  { who: "Priya R.", area: "Etobicoke", type: "Entupimento", status: "NA FILA", color: "bg-ink-100 text-ink-700" },
                ].map((r) => (
                  <li
                    key={r.who}
                    className="flex flex-col gap-1 rounded-lg border border-ink-100 px-3 py-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-ink-900">
                        {r.who}
                      </span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[9px] font-bold tracking-wider ${r.color}`}
                      >
                        {r.status}
                      </span>
                    </div>
                    <span className="text-ink-600">
                      {r.area} · {r.type}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceAreaMap() {
  const cells = Array.from({ length: 49 }, (_, i) => i);
  const intensity = (i: number) => {
    const row = Math.floor(i / 7);
    const col = i % 7;
    const dist = Math.abs(row - 3) + Math.abs(col - 3);
    if (dist <= 1) return "hot";
    if (dist <= 2) return "warm";
    if (dist <= 3) return "cool";
    return "outer";
  };
  const color = (key: string) => {
    if (key === "hot") return "bg-ink-900 text-[#fde68a]";
    if (key === "warm") return "bg-ink-700 text-white";
    if (key === "cool") return "bg-ink-300 text-ink-900";
    return "bg-ink-100 text-ink-400";
  };
  return (
    <div className="mt-3 grid grid-cols-7 gap-1">
      {cells.map((i) => {
        const key = intensity(i);
        return (
          <div
            key={i}
            className={`flex aspect-square items-center justify-center rounded font-mono text-[9px] font-bold ${color(key)}`}
            aria-hidden="true"
          >
            {key === "hot" ? "●" : ""}
          </div>
        );
      })}
    </div>
  );
}

function TrustedBy() {
  return (
    <section id="area" className="border-t border-ink-100/80 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 text-center">
        <Pill>Área de atendimento</Pill>
        <h2 className="mt-4 text-2xl font-semibold tracking-tightish text-ink-900">
          Atendimento em toda a GTA
        </h2>

        <div className="mt-10 grid grid-cols-2 items-center justify-items-center gap-x-10 gap-y-8 text-ink-400 sm:grid-cols-3 md:grid-cols-6">
          {AREAS.map((area) => (
            <span
              key={area}
              className="text-lg font-semibold tracking-tight text-ink-400 transition hover:text-ink-800"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatWeDo() {
  return (
    <section id="services" className="bg-[#fafaf9]">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center">
        <Pill>O que consertamos</Pill>
        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tightish text-ink-900 md:text-4xl">
          As 4 coisas pelas quais os moradores de Toronto nos chamam
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-ink-600">
          Mesmo dia para emergências. Agendado em 48 horas para o resto.
          Preço fixo. Sem taxa de visita se não consertar.
        </p>

        <div className="mt-12 grid gap-5 text-left md:grid-cols-2">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  pill,
  title,
  body,
  visual,
}: {
  pill: string;
  title: string;
  body: string;
  visual: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-ink-100 bg-white p-8 transition hover:border-ink-200">
      <div className="flex items-center justify-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-ink-50 px-3 py-1 text-xs font-semibold text-ink-800">
          <span className="text-base leading-none">&#9733;</span> {pill}
        </span>
      </div>
      <div className="mt-6">{visual}</div>
      <h3 className="mt-6 text-lg font-semibold tracking-tightish text-ink-900">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-600">{body}</p>
    </div>
  );
}

function CallToAction() {
  return (
    <section id="contact" className="border-t border-ink-100/80">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-2xl border border-ink-100 bg-white p-10 md:p-14">
          <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-tightish text-ink-900 md:text-4xl">
                Água onde não deveria estar?
              </h2>
              <p className="mt-3 max-w-xl text-ink-600">
                Ligue antes que espalhe. Atendimento 24/7 em Toronto e na GTA.
                Chegamos em menos de uma hora para emergências, com orçamento
                fixo antes de iniciar qualquer serviço.
              </p>
            </div>
            <div className="flex flex-col items-stretch gap-3">
              <a
                href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}
                className="rounded-full bg-ink-900 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-ink-800"
              >
                Ligar agora &middot; {PHONE}
              </a>
              <Link
                href="/feedback"
                className="rounded-full border border-ink-200 bg-white px-6 py-3 text-center text-sm font-medium text-ink-800 transition hover:border-ink-400"
              >
                Solicitar orçamento grátis
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-ink-100 bg-white px-3 py-1 text-xs font-semibold text-ink-800 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-ink-900" />
      {children}
    </span>
  );
}

const AREAS = [
  "Toronto",
  "Mississauga",
  "North York",
  "Scarborough",
  "Etobicoke",
  "East York",
];

const SERVICES = [
  {
    pill: "Emergência",
    title: "Reparo de cano rompido + vazamento",
    body:
      "No local em menos de uma hora em qualquer lugar de Toronto. Isolamos a linha, encontramos o vazamento e consertamos antes que o piso inche. 24/7, incluindo feriados.",
    visual: <EmergencyPanel />,
  },
  {
    pill: "Aquecedor",
    title: "Instalação + reparo de aquecedor",
    body:
      "Com ou sem reservatório. Instalado em 4 horas, garantia de 12 anos, orçamentos no mesmo dia em todo o GTA. Troca no mesmo dia se o seu parou esta manhã.",
    visual: <HeaterPanel />,
  },
  {
    pill: "Ralo",
    title: "Limpeza de ralo + inspeção por câmera",
    body:
      "Porão entupido? Desentupimos, inspecionamos com câmera e mostramos as imagens. Preço por serviço, não por hora &mdash; você vê o valor antes de começar.",
    visual: <DrainPanel />,
  },
  {
    pill: "Reforma",
    title: "Instalação hidráulica: banheiro + cozinha",
    body:
      "Trabalhando com seu empreiteiro ou de forma independente. Licenças obtidas, em conformidade com o código, inspecionado. Encanador mestre licenciado em Toronto em todo trabalho.",
    visual: <RenoPanel />,
  },
];

function EmergencyPanel() {
  return (
    <div className="rounded-xl border border-ink-100 bg-[#fafaf9] p-4">
      <div className="flex items-center justify-between text-xs font-semibold text-ink-400">
        <span>Tempo de resposta</span>
        <span className="rounded-full bg-ink-900 px-2 py-0.5 text-[10px] text-[#fde68a]">
          24/7
        </span>
      </div>
      <div className="mt-3 flex items-baseline gap-3">
        <span className="font-mono text-4xl font-bold text-ink-900">38</span>
        <span className="text-sm font-semibold text-ink-600">min</span>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-ink-600">
        Mediana de <span className="font-semibold text-ink-900">184 chamadas em Toronto</span> nos últimos 90 dias.
      </p>
    </div>
  );
}

function HeaterPanel() {
  return (
    <div className="rounded-xl border border-ink-100 bg-[#fafaf9] p-4">
      <ul className="space-y-2 text-sm">
        {[
          { label: "Instalação sem reservatório", time: "4 h" },
          { label: "Troca de reservatório", time: "2 h" },
          { label: "Garantia incluída", time: "12 anos" },
        ].map((r) => (
          <li
            key={r.label}
            className="flex items-center justify-between rounded-lg border border-ink-100 bg-white px-3 py-2"
          >
            <span className="text-ink-800">{r.label}</span>
            <span className="font-mono text-xs font-bold text-ink-900">
              {r.time}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DrainPanel() {
  return (
    <div className="rounded-xl border border-ink-100 bg-[#fafaf9] p-4">
      <div className="text-xs font-semibold text-ink-400">Serviços com preço fixo</div>
      <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
        {[
          { job: "Desentupimento", price: "$189" },
          { job: "Inspeção câmera", price: "$249" },
          { job: "Hidrojateamento", price: "$489" },
          { job: "Localização tubul.", price: "$179" },
        ].map((j) => (
          <div
            key={j.job}
            className="rounded-lg border border-ink-100 bg-white px-3 py-2"
          >
            <div className="text-ink-600">{j.job}</div>
            <div className="font-mono text-base font-bold text-ink-900">
              {j.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RenoPanel() {
  return (
    <div className="rounded-xl border border-ink-100 bg-[#fafaf9] p-4">
      <ul className="space-y-2 text-sm text-ink-800">
        {[
          "Encanador mestre licenciado em Toronto",
          "Licenças obtidas · conformidade com código",
          "Segurado até $5M",
          "Trabalha diretamente com seu empreiteiro",
        ].map((t) => (
          <li
            key={t}
            className="flex items-start gap-2 rounded-lg border border-ink-100 bg-white px-3 py-2"
          >
            <span className="mt-0.5 text-[#fde68a]">&#10003;</span>
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
