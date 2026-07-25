function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-md">
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-16 max-w-6xl items-center justify-center px-6"
      >
      

        <ul className="flex items-center gap-5 text-sm text-slate-300 sm:gap-8">
          <li>
            <a className="transition hover:text-cyan-400" href="#sobre">
              Sobre
            </a>
          </li>
          <li>
            <a className="transition hover:text-cyan-400" href="#projetos">
              Projetos
            </a>
          </li>
          <li>
            <a className="transition hover:text-cyan-400" href="#contato">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
