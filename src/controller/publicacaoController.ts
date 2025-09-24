import { Request, Response } from "express"
import { publicacoesBusiness } from "../business/publicacoesBusiness"

export const publicacoesController = {
  // exercicio3
  inserir: (req: Request, res: Response) => {
    const resultado = publicacoesBusiness.inserir(req.body)
    if ((resultado as any).erro) return res.status(400).json(resultado)
    return res.status(201).json(resultado)
  },

  // exercicio5
  atualizarParcial: (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const resultado = publicacoesBusiness.atualizarParcial(id, req.body)
    if ((resultado as any).erro) return res.status(400).json(resultado)
    return res.json(resultado)
  },

  // exercicio6
  remover: (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const usuarioId = parseInt(req.header("Usuario-Id") || "0")
    const resultado = publicacoesBusiness.remover(id, usuarioId)
    if ((resultado as any).erro) return res.status(400).json(resultado)
    return res.json(resultado)
  }
}
