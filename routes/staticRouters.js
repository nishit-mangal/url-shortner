import express from "express";
import { getAllUrls, urlByUserId } from "../controllers/url.js";

export const staticRouter = express.Router()

staticRouter.get('/', async (req, resp)=>{
    const allUrls = await urlByUserId(req.user?._id)
    console.log("allUrls", allUrls)
    resp.render('home',{
        urls:allUrls
    })
})

staticRouter.get('/signUp',(req, resp)=>{
    resp.render('signup')
})
staticRouter.get('/login',(req, resp)=>{
    resp.render('login')
})