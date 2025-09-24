import { Router } from "express"
import { publicacoesController } from "../controller/publicacaoController"

const router = Router()

router.post("/", publicacoesController.inserir)            // exercicio3
router.patch("/:id", publicacoesController.atualizarParcial) // exercicio5
router.delete("/:id", publicacoesController.remover)       // exercicio6

export default router
