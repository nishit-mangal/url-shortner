import express from "express";
import { getAllUrls } from "../controllers/url.js";

export const staticRouter = express.Router()

staticRouter.get('/', async (req, resp)=>{
    const allUrls = await getAllUrls()
    resp.render('home',{
        urls:allUrls
    })
})