import BotaoLink from "../components/BotaoLink"

function Contato() {
  return (
    <section id="contato" className="scroll-mt-16 border-t border-white/10 bg-slate-900/40">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="section-label">Contato</p>
        <h2 className="section-title">Vamos conversar?</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-400">
          Estou disponível para oportunidades, colaborações e novos projetos.
          Entre em contato por e-mail ou acompanhe meu trabalho nas redes.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <BotaoLink texto="Enviar e-mail" destino="mailto:seuemail@exemplo.com" destaque />
          <BotaoLink texto="GitHub" destino="https://github.com/" novaAba />
          <BotaoLink texto="LinkedIn" destino="https://www.linkedin.com/" novaAba />
        </div>
      </div>
    </section>
  )
}

export default Contato
