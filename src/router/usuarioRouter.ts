import { Router } from "express"
import { usuariosController } from "../controller/usuarioController"

const router = Router()

router.get("/:id", usuariosController.buscarPorId)         // exercicio1
router.get("/faixa-etaria/range", usuariosController.filtrarPorIdade)  // exercicio2
router.put("/:id", usuariosController.atualizar)           // exercicio4
router.delete("/limpar-inativos", usuariosController.removerInativos) // exercicio7

export default router