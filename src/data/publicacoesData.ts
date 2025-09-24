let publicacoes: any[] = []

export const publicacoesData = {
  listar: () => publicacoes,
  buscarPorId: (id: number) => publicacoes.find(p => p.id === id),
  inserir: (pub: any) => {
    publicacoes.push(pub)
    return pub
  },
  atualizar: (id: number, dados: any) => {
    const index = publicacoes.findIndex(p => p.id === id)
    if (index === -1) return null
    publicacoes[index] = { ...publicacoes[index], ...dados }
    return publicacoes[index]
  },
  remover: (id: number) => {
    const index = publicacoes.findIndex(p => p.id === id)
    if (index === -1) return null
    const removida = publicacoes[index]
    publicacoes.splice(index, 1)
    return removida
  }
}
