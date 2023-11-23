import express from 'express'
import { generateShortUrl, getAnalytics, getRedirectUrl } from '../controllers/url.js'

export const router = express.Router()

router.post('/', generateShortUrl)

router.get('/:id', getRedirectUrl)

router.get('/analytics/:id',getAnalytics)