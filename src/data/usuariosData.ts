let usuarios = [
  { id: 1, nome: "João", email: "joao@email.com", papel: "usuario", idade: 30 },
  { id: 2, nome: "Maria", email: "maria@email.com", papel: "admin", idade: 40 },
  { id: 3, nome: "Pedro", email: "pedro@email.com", papel: "usuario", idade: 25 },
  { id: 4, nome: "Ana", email: "ana@email.com", papel: "usuario", idade: 22 }
]

export const usuariosData = {
  listar: () => usuarios,
  buscarPorId: (id: number) => usuarios.find(u => u.id === id),
  inserir: (usuario: any) => {
    usuarios.push(usuario)
    return usuario
  },
  atualizar: (id: number, dados: any) => {
    const index = usuarios.findIndex(u => u.id === id)
    if (index === -1) return null
    usuarios[index] = { ...usuarios[index], ...dados }
    return usuarios[index]
  },
  remover: (id: number) => {
    usuarios = usuarios.filter(u => u.id !== id)
    return true
  },
  removerInativos: () => {
    const inativos = usuarios.filter(u => u.papel !== "admin")
    usuarios = usuarios.filter(u => u.papel === "admin")
    return inativos
  }
}
