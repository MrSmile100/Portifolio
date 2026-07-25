export type Projeto = {
  titulo: string
  descricao: string
  tecnologias: string[]
  repositorio: string
  demonstracao?: string
  imagem?: string
  imagemAlt?: string
}

export const tecnologias = [
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "Git",
]

export const projetos: Projeto[] = [
  {
    titulo: "SIGEP - Sistema de Gestão de Presídios",
    descricao:
      "Este projeto visa desenvolver uma solução tecnológica para otimizar a gestão de presídios, melhorando a eficiência operacional e a segurança.",
    tecnologias: ["React", "TypeScript", "Tailwind CSS"],
    repositorio: "https://github.com/",
    // imagem: "/projetos/sigep.png",
    // imagemAlt: "Tela inicial do sistema SIGEP",
  },
  {
    titulo: "Outro projeto",
    descricao:
      "Destaque aqui uma funcionalidade interessante ou um aprendizado importante desse projeto.",
    tecnologias: ["JavaScript", "HTML", "CSS"],
    repositorio: "https://github.com/",
  },
  {
    titulo: "Projeto em desenvolvimento",
    descricao:
      "Você também pode apresentar um trabalho em andamento e contar quais serão os próximos passos.",
    tecnologias: ["React", "API REST"],
    repositorio: "https://github.com/",
  },
]
