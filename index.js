import express from 'express'
import { router } from './routes/url.js'
import { connectMongoDB } from './connect.js'

const app = express()
const PORT = 8001
const connectionString = 'mongodb://localhost:27017/link-shortner'
connectMongoDB(connectionString)
app.use(express.json());
app.use('/url',router)
app.listen(PORT, ()=>console.log(`Listening on Port ${PORT}...`))