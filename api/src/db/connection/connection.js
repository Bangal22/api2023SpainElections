import sql from 'mssql'
import dotenv from 'dotenv'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({path: `${__dirname}../../../../.env`})

const configuration = {
    user: `${process.env.SQL_SERVER_UID}`,
    password: `${process.env.SQL_SERVER_PASSWORD}`,
    server: `${process.env.SQL_SERVER_NAME}`,
    database: 'tweets',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true,
        trustServerCertificate: false
    }
}

export async function connection () {
    await sql.connect(configuration)
    return sql 
}