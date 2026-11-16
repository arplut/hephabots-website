const links = [
  { label: "What we do", href: "#different" },
  { label: "Where it works", href: "#where" },
  { label: "Team", href: "#team" },
];

const Navbar = () => (
  <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
    <div className="container flex h-16 items-center justify-between gap-4">
      <a href="#top" className="flex items-center gap-2" aria-label="Hephabots home">
        <img src="/logo.svg" alt="" width="36" height="36" className="h-9 w-9 object-contain" />
        <span className="text-lg font-extrabold tracking-tight">Hephabots</span>
      </a>
      <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="text-[0.95rem] font-medium text-muted-foreground hover:text-primary">
            {l.label}
          </a>
        ))}
      </nav>
      <a
        href="#contact"
        className="inline-flex min-h-[40px] items-center rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
      >
        Talk to us
      </a>
    </div>
  </header>
);

export default Navbar;
