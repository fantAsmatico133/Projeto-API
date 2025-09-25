// Pedro Henrique Toscano Barbosa
import express from "express"
import usuarioRouter from "./router/usuarioRouter"
import publicacaoRouter from "./router/publicacaoRouter"

const app = express()
app.use(express.json())

app.use("/usuario", usuarioRouter)
app.use("/publicacao", publicacaoRouter)

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000")
})
