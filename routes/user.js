import express from 'express'
import { handleUserSignup, loginUser } from '../controllers/user.js'

export const userRouter = express.Router()

userRouter.post('/signUp', handleUserSignup)
userRouter.post('/login',loginUser)
