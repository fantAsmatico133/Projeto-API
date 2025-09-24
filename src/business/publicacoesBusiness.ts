import { publicacoesData } from "../data/publicacoesData"
import { usuariosData } from "../data/usuariosData"

export const publicacoesBusiness = {
  // exercicio3
  inserir: (dados: any) => {
    const erros: string[] = []
    if (!dados.titulo || dados.titulo.length < 3) erros.push("Título inválido")
    if (!dados.conteudo || dados.conteudo.length < 10) erros.push("Conteúdo inválido")
    if (!usuariosData.buscarPorId(dados.autorId)) erros.push("Autor inexistente")
    if (erros.length > 0) return { erro: erros }

    const nova = {
      id: publicacoesData.listar().length + 1,
      ...dados,
      criadoEm: new Date(),
      publicado: false
    }
    return publicacoesData.inserir(nova)
  },

  // exercicio5
  atualizarParcial: (id: number, dados: any) => {
    const permitidos = ["titulo", "conteudo", "publicado"]
    const filtrados: any = {}
    for (const chave of Object.keys(dados)) {
      if (permitidos.includes(chave)) filtrados[chave] = dados[chave]
    }
    const atualizado = publicacoesData.atualizar(id, filtrados)
    if (!atualizado) return { erro: "Publicação não encontrada" }
    return atualizado
  },

  // exercicio6
  remover: (id: number, usuarioId: number) => {
    const publicacao = publicacoesData.buscarPorId(id)
    if (!publicacao) return { erro: "Publicação não encontrada" }
    const usuario = usuariosData.buscarPorId(usuarioId)
    if (!usuario) return { erro: "Usuário não autorizado" }
    if (publicacao.autorId !== usuarioId && usuario.papel !== "admin") {
      return { erro: "Permissão negada" }
    }
    return publicacoesData.remover(id)
  }
}
