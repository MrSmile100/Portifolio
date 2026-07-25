import { tecnologias } from "../data/portfolio"

function Sobre() {
  return (
    <section id="sobre" className="scroll-mt-16 border-y border-white/10 bg-slate-900/40">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="section-label">Sobre mim</p>
          <h2 className="section-title">Tecnologia com propósito e atenção aos detalhes.</h2>
        </div>

        <div>
          <p className="text-lg leading-8 text-slate-300">
            Sou estudante de Engenharia de Software com foco em desenvolvimento 
            back-end. Possuo conhecimentos nas linguagens de Java e Python, além 
            de ter adquirido conhecimentos básicos/intermediários em padrões de projeto e 
            arquitetura de software. Já participei de projetos acadêmicos e 
            colaborativos e também desenvolvi projetos pessoais, buscando 
            aprimorar continuamente minhas habilidades e aprender novas 
            tecnologias.

          </p>
          <p className="mt-5 leading-7 text-slate-400">
            Tecnologias que eu conheço
          </p>

          <ul aria-label="Tecnologias que utilizo" className="mt-8 flex flex-wrap gap-3">
            {tecnologias.map((tecnologia) => (
              <li
                key={tecnologia}
                className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300"
              >
                {tecnologia}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Sobre
