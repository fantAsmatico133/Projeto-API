let usuarios = [
  { id: 1, nome: "João Silva", email: "joao@email.com", papel: "usuario", idade: 30 },
  { id: 2, nome: "Maria Souza", email: "maria@email.com", papel: "admin", idade: 40 },
  { id: 3, nome: "Pedro Santos", email: "pedro@email.com", papel: "usuario", idade: 25 },
  { id: 4, nome: "Ana Lima", email: "ana@email.com", papel: "usuario", idade: 22 }
]

export const usuariosData = {
  listar: () => usuarios,
  buscarPorId: (id: number) => usuarios.find(u => u.id === id),
  filtrarPorIdade: (min: number, max: number) => usuarios.filter(u => u.idade >= min && u.idade <= max),
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
  removerInativos: () => {
    const inativos = usuarios.filter(u => u.papel !== "admin")
    usuarios = usuarios.filter(u => u.papel === "admin")
    return inativos
  }
}
