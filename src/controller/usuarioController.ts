import { Request, Response } from "express"
import { usuariosBusiness } from "../business/usuarioBusiness"
import { publicacoesData } from "../data/publicacoesData"
import { usuariosData } from "../data/usuariosData"

type Usuario = {
  id: number
  nome: string
  email: string
  papel: string
  idade: number
}

type Publicacao = {
  id: number
  titulo: string
  conteudo: string
  autorId: number
  criadoEm: Date
  publicado: boolean
}

// exercicio1
export const buscarUsuarioPorId = (req: Request, res: Response): Response => {
  const id = parseInt(req.params.id, 10)
  if (Number.isNaN(id)) return res.status(400).json({ erro: "ID inválido" })

  const usuario = usuariosBusiness.buscarPorId(id)
  if (!usuario) return res.status(404).json({ erro: "Usuário não encontrado" })

  return res.json(usuario)
}

// exercicio2
export const filtrarPorFaixaEtaria = (req: Request, res: Response): Response => {
  const { min, max } = req.query
  const nMin = parseInt(String(min), 10)
  const nMax = parseInt(String(max), 10)
  if (Number.isNaN(nMin) || Number.isNaN(nMax)) {
    return res.status(400).json({ erro: "Parâmetros inválidos" })
  }

  const usuarios = usuariosBusiness.listar() as Usuario[]
  const resultado = usuarios.filter(u => u.idade >= nMin && u.idade <= nMax)
  return res.json(resultado)
}

// exercicio4
export const atualizarUsuario = (req: Request, res: Response): Response => {
  const id = parseInt(req.params.id, 10)
  const { nome, email, papel, idade } = req.body
  if (!nome || !email || !papel || Number.isNaN(Number(idade))) {
    return res.status(400).json({ erro: "Todos os campos são obrigatórios e válidos" })
  }

  const usuarios = usuariosBusiness.listar() as Usuario[]
  if (usuarios.some(u => u.email === email && u.id !== id)) {
    return res.status(409).json({ erro: "Email já cadastrado" })
  }

  const atualizado = usuariosBusiness.atualizar(id, { nome, email, papel, idade })
  if (!atualizado) return res.status(404).json({ erro: "Usuário não encontrado" })

  return res.json(atualizado)
}

// exercicio7
export const removerUsuariosInativos = (req: Request, res: Response): Response => {
  const confirmar = req.query.confirmar === "true"
  if (!confirmar) return res.status(400).json({ erro: "Confirmação necessária" })

  const usuarios = usuariosData.listar() as Usuario[]
  const publicacoes = publicacoesData.listar() as Publicacao[]

  const inativos = usuarios.filter(u =>
    u.papel !== "admin" && !publicacoes.some(p => p.autorId === u.id)
  )

  if (inativos.length === 0) {
    return res.json({ mensagem: "Nenhum usuário inativo encontrado" })
  }

  inativos.forEach(u => usuariosBusiness.remover(u.id))
  return res.json({ removidos: inativos })
}
