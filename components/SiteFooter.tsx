export function SiteFooter() {
  return (
    <footer className="border-t border-ink-100/80">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-8 text-xs text-ink-400 md:flex-row md:items-center">
        <span>© {new Date().getFullYear()} Local SEO</span>
        <span>Criado para a série de tutoriais.</span>
      </div>
    </footer>
  );
}
