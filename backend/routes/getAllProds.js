const express = require('express');
const Products = require('../models/Products');
const router = express.Router();

router.get('/allProds',async(req,res)=>{
    try{
        const prods = await Products.find();
        res.json(prods);
    }catch(e){
        console.log(e)
    }
})

module.exports = router;