import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { DashboardMock } from "@/components/DashboardMock";

const SITE_URL = "https://localseo.example";
const PAGE_URL = `${SITE_URL}/services/local-seo`;
const PHONE = "(416) 555-0142";

export const metadata = {
  title: "Plumbing Service Toronto · 24/7 Licensed Plumbers",
  description:
    "Toronto plumbing service that shows up fast. Burst pipes, water heaters, drain repair across the GTA. Licensed, insured, fixed-price quotes.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Plumbing Service Toronto · 24/7 Licensed Plumbers",
    description:
      "Toronto plumbing service that shows up fast. Burst pipes, water heaters, drain repair across the GTA.",
    locale: "en_CA",
  },
};

function JsonLd() {
  const plumberSchema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: "Acme Plumbing Service Toronto",
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
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
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
    <div className="min-h-screen flex flex-col">
      <JsonLd />
      <SiteHeader />

      <main className="flex-1">
        <Hero />
        <TrustedBy />
        <WhatWeDo />
        <CallToAction />
      </main>

      <SiteFooter />
    </div>
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
          <DashboardMock />
        </div>
      </div>
    </section>
  );
}

function TrustedBy() {
  return (
    <section className="border-t border-ink-100/80 bg-white">
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
    <section id="what-we-do" className="bg-[#fafaf9]">
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
    <section className="border-t border-ink-100/80">
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
