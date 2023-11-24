import dotenv from 'dotenv'
import express from 'express'
import { router } from './routes/url.js'
import { connectMongoDB } from './connect.js'
import { userRouter } from './routes/user.js'
import path from 'path'
import { staticRouter } from './routes/staticRouters.js'
import cookieParser from 'cookie-parser'
import { checkAuth, restrictUserIfNotLoggedIn } from './middleware/auth.js'

const app = express()
dotenv.config()
const PORT = process.env.PORT
const connectionString = `${process.env.MONGO_URL}`
connectMongoDB(connectionString)

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())

app.set('view engine','ejs')
app.set('views', path.resolve('./views'))

app.use('/url',restrictUserIfNotLoggedIn, router);
app.use('/user', userRouter)
app.use('/',checkAuth,staticRouter)

app.listen(PORT, ()=>console.log(`Listening on Port ${PORT}...`))