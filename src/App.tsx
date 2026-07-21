function App() {
  const nome = "Seu Nome"
  const cargo = "Desenvolvedor Front-end"

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6">
        <p className="mb-3 text-lg text-cyan-400">
          Olá, meu nome é
        </p>

        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          {nome}
        </h1>

        <h2 className="mt-4 text-2xl text-slate-400 md:text-4xl">
          {cargo}
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300">
          Desenvolvo interfaces modernas, responsivas e acessíveis
          utilizando React, TypeScript e Tailwind CSS.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="#projetos"
            className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Ver projetos
          </a>

          <a
            href="#contato"
            className="rounded-lg border border-slate-700 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Entrar em contato
          </a>
        </div>
      </section>
    </main>
  )
}

export default App