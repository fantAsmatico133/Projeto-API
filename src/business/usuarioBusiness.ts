import { usuariosData } from "../data/usuariosData"

export const usuariosBusiness = {
  listar: () => usuariosData.listar(),
  buscarPorId: (id: number) => usuariosData.buscarPorId(id),
  inserir: (dados: any) => usuariosData.inserir(dados),
  atualizar: (id: number, dados: any) => usuariosData.atualizar(id, dados),
  remover: (id: number) => usuariosData.remover(id),
  removerInativos: () => usuariosData.removerInativos()
}

