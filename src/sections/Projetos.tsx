import { projetos } from "../data/portfolio"

function Projetos() {
  return (
    <section id="projetos" className="scroll-mt-16 mx-auto max-w-6xl px-6 py-24">
      <p className="section-label">Portfólio</p>
      <h2 className="section-title max-w-2xl">
        Projetos que transformaram estudo em prática.
      </h2>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projetos.map((projeto, indice) => (
          <article
            key={projeto.titulo}
            className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
          >
            <div className="relative aspect-video overflow-hidden border-b border-white/10 bg-slate-900">
              {projeto.imagem ? (
                <img
                  src={projeto.imagem}
                  alt={projeto.imagemAlt ?? `Prévia do projeto ${projeto.titulo}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/60 text-slate-600">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-10 w-10"
                  >
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <circle cx="8.5" cy="9" r="1.5" />
                    <path d="m4 17 4.5-4 3.5 3 2.5-2 5.5 4" />
                  </svg>
                  <span className="text-xs uppercase tracking-widest">
                    Imagem do projeto
                  </span>
                </div>
              )}

              <span className="absolute left-4 top-4 rounded-md border border-white/10 bg-slate-950/80 px-2.5 py-1 font-mono text-xs text-cyan-400 backdrop-blur">
                {String(indice + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-7">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-white">
                  {projeto.titulo}
                </h3>
                <span
                  aria-hidden="true"
                  className="text-2xl text-slate-600 transition group-hover:text-cyan-400"
                >
                  ↗
                </span>
              </div>

              <p className="mt-4 flex-1 leading-7 text-slate-400">
                {projeto.descricao}
              </p>

              <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-2 font-mono text-xs text-slate-500">
                {projeto.tecnologias.map((tecnologia) => (
                  <li key={tecnologia}>{tecnologia}</li>
                ))}
              </ul>

              <div className="mt-7 flex gap-5 text-sm font-medium">
                <a
                  className="text-slate-300 transition hover:text-cyan-400"
                  href={projeto.repositorio}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                {projeto.demonstracao && (
                  <a
                    className="text-slate-300 transition hover:text-cyan-400"
                    href={projeto.demonstracao}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver projeto
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projetos
