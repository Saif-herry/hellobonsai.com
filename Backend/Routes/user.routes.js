const express = require('express')
require('dotenv').config();
const jwt = require()
const bcrypt = require('bcrypt');
const UserModel = require('../Models/User.model');

const userROuter = express.Router()

userROuter.post('/register',async(req,res)=>{
    const {email,fullname,password,country,currency} = req.body
    await bcrypt.hash(password,8,async function(err,hash){
        if(err){
            return res.status(500).send('Error in password hash')
        }
        const user = new UserModel({
            email,
            fullname,
            password:hash,
            country,
            currency,
        })
        await user.save()
        return res.status(200).send({message:"Reguistration Successfull",user:user})
    })
})
