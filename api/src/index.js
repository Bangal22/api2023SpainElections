import express from 'express'
import http from 'node:http'
import cors from 'cors'
import { router } from '#router/router.js'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import dotenv from 'dotenv'

//file configuration
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const server = http.createServer(app)

dotenv.config({ path: `${__dirname}../../.env` })

app.use(cors())
app.use('/', router)

server.listen(process.env.PORT, () => {
    console.log("Server running")
})