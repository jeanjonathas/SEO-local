export function SiteHeader() {
  return (
    <header className="border-b border-ink-100/80 bg-white/60 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-ink-900" aria-hidden />
          <span className="text-sm font-semibold tracking-tightish text-ink-900">
            Local SEO
          </span>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-ink-600 md:flex">
          <a className="transition hover:text-ink-900" href="#features">Recursos</a>
          <a className="transition hover:text-ink-900" href="#approach">Abordagem</a>
          <a className="transition hover:text-ink-900" href="/feedback">Feedback</a>
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-ink-900 px-4 py-2 text-xs font-medium text-white transition hover:bg-ink-800"
        >
          Começar
        </a>
      </div>
    </header>
  );
}
