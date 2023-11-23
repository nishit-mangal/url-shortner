import express from 'express'
import { router } from './routes/url.js'
import { connectMongoDB } from './connect.js'
// import { userRouter } from './routes/user.js'
import path from 'path'
import { staticRouter } from './routes/staticRouters.js'

const app = express()
const PORT = 8001
const connectionString = 'mongodb://localhost:27017/link-shortner'
connectMongoDB(connectionString)

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.set('view engine','ejs')
app.set('views', path.resolve('./views'))

app.use('/url',router);
// app.use('/user', userRouter)
app.get('/',staticRouter)

app.listen(PORT, ()=>console.log(`Listening on Port ${PORT}...`))