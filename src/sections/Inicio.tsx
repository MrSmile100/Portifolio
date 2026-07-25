import heroImage from "../assets/hero.png"
import BotaoLink from "../components/BotaoLink"

function Inicio() {
  return (
    <section
      id="inicio"
      className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-12 overflow-hidden px-6 pt-24 lg:grid-cols-[1.2fr_0.8fr]"
    >
      <div className="relative z-10 py-16">
        <p className="mb-4 font-mono text-sm uppercase tracking-[0.25em] text-cyan-400">
          Olá, eu sou
        </p>
        <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Ismael Hister Oliveira
        </h1>
        <h2 className="mt-5 text-2xl font-medium text-slate-400 sm:text-3xl">
          Estudante de Engenharia de Software | Desenvolvedor Full Stack
        </h2>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
          Desenvolvo interfaces modernas, responsivas e acessíveis, transformando
          ideias em experiências digitais simples e funcionais.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <BotaoLink texto="Ver projetos" destino="#projetos" destaque />
          <BotaoLink texto="Entrar em contato" destino="#contato" />
        </div>
      </div>

      <div aria-hidden="true" className="relative hidden place-items-center lg:grid">
        <div className="absolute h-72 w-72 rounded-full bg-violet-600/25 blur-3xl" />
        <img
          className="relative w-full max-w-sm drop-shadow-[0_30px_60px_rgba(124,58,237,0.25)]"
          src={heroImage}
          alt=""
        />
      </div>
    </section>
  )
}

export default Inicio
