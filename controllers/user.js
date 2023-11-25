import USER from '../models/user.js'
import {v4} from 'uuid'
import { setUser } from '../serivce/auth.js'

export async function handleUserSignup(req, resp){
    const {name, email, password} = req.body
    const addedUser = await USER.create({
        name,
        email,
        password
    })
    resp.redirect("/")
}

export async function loginUser(req, resp){
    const { email, password} = req.body;
    const user = await USER.findOne({email, password})
    if(!user)
        return resp.render('login', {error:'Invalid Credentials'})
    const uniqueId = v4()
    setUser(uniqueId, user);
    resp.cookie('uid',uniqueId);
    return resp.redirect('/')
}