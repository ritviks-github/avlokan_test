const express = require('express');
const User = require('../models/User');
const router = express.Router();
const bcrypt = require('bcrypt');

router.post('/signup',async (req,res)=>{
    const {name,email,password,phoneNumber} = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password,salt);
    try{
        const user = await User.findOne({email:email});
        
        if(!user){
            const creation = await User.create({name:name,email:email,mobile:phoneNumber,password:hashedPass});
            console.log(creation);
            res.json('done');
        }
        else{
            res.json('found');
        }
    }catch(e){
        console.log(e);
        res.json('error');
    }
})






module.exports = router;