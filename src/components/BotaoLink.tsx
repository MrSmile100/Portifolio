type BotaoLinkProps = {
  texto: string
  destino: string
  destaque?: boolean
  novaAba?: boolean
}

function BotaoLink({
  texto,
  destino,
  destaque = false,
  novaAba = false,
}: BotaoLinkProps) {
  const estilo = destaque
    ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
    : "border border-slate-700 text-slate-200 hover:border-cyan-400 hover:text-cyan-400"

  return (
    <a
      href={destino}
      className={`rounded-lg px-6 py-3 font-semibold transition-colors ${estilo}`}
      target={novaAba ? "_blank" : undefined}
      rel={novaAba ? "noreferrer" : undefined}
    >
      {texto}
    </a>
  )
}

export default BotaoLink
