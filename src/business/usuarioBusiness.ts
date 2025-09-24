import { usuariosData } from "../data/usuariosData"

export const usuariosBusiness = {
  // exercicio1
  buscarPorId: (id: number) => {
    if (isNaN(id)) return { erro: "ID inválido" }
    const usuario = usuariosData.buscarPorId(id)
    if (!usuario) return { erro: "Usuário não encontrado" }
    return usuario
  },

  // exercicio2
  filtrarPorIdade: (min: any, max: any) => {
    const nMin = parseInt(min)
    const nMax = parseInt(max)
    if (isNaN(nMin) || isNaN(nMax)) return { erro: "Parâmetros inválidos" }
    return usuariosData.filtrarPorIdade(nMin, nMax)
  },

  // exercicio4
  atualizar: (id: number, dados: any) => {
    if (!dados.nome || !dados.email || !dados.papel || isNaN(dados.idade)) {
      return { erro: "Todos os campos são obrigatórios e válidos" }
    }
    const atualizado = usuariosData.atualizar(id, dados)
    if (!atualizado) return { erro: "Usuário não encontrado" }
    return atualizado
  },

  // exercicio7
  removerInativos: (confirmar: boolean) => {
    if (!confirmar) return { erro: "Confirmação necessária" }
    return usuariosData.removerInativos()
  }
}
