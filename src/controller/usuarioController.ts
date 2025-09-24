import { Request, Response } from "express"
import { usuariosBusiness } from "../business/usuarioBusiness"

export const usuariosController = {
  // exercicio1
  buscarPorId: (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const resultado = usuariosBusiness.buscarPorId(id)
    if ((resultado as any).erro) return res.status(400).json(resultado)
    return res.json(resultado)
  },

  // exercicio2
  filtrarPorIdade: (req: Request, res: Response) => {
    const { min, max } = req.query
    const resultado = usuariosBusiness.filtrarPorIdade(min, max)
    if ((resultado as any).erro) return res.status(400).json(resultado)
    return res.json(resultado)
  },

  // exercicio4
  atualizar: (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const resultado = usuariosBusiness.atualizar(id, req.body)
    if ((resultado as any).erro) return res.status(400).json(resultado)
    return res.json(resultado)
  },

  // exercicio7
  removerInativos: (req: Request, res: Response) => {
    const confirmar = req.query.confirmar === "true"
    const resultado = usuariosBusiness.removerInativos(confirmar)
    if ((resultado as any).erro) return res.status(400).json(resultado)
    return res.json(resultado)
  }
}
