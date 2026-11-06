import express from 'express'
import {prisma} from './lib/prisma.js'

const app = express()

app.use(express.json())

const PORT = 3000

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`)
  })

