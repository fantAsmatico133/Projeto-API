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
  }
}