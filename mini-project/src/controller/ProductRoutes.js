const express = require('express');
const router = express.Router();
const Product = require("../models/Product");

router.post("/product",async(req,res)=>{
    try{
        var prod = new Product(req.body);
        const data = await prod.save();
        if(req.body==""){
            res.status(400).send("Pls provide data");
        }
        res.status(201).send(data);
    }catch(err){
        res.status(500).send(err);
        console.log(err);
    }
        
});

router.get("/product",async(req,res)=>{
    try{
        const data = await Product.find();
        res.status(201).send(data);
    }catch(err){
        res.status(500).send(err);
        console.log(err);
    }
    
});

router.get("/product/:id",async(req,res)=>{
    try{
        var _id=req.params.id;
        const data = await Product.findById({_id:_id});
        res.status(201).send(data);
    }catch(err){
        res.status(500).send(err);
        console.log(err);
    }
    
});

router.put("/product/:id",async(req,res)=>{
    try{
        var _id=req.params.id;
        const data = await Product.findByIdAndUpdate(_id,req.body,{new:true})     
        res.status(201).send(data);
    }catch(err){
        res.status(500).send(err);
        console.log(err);
    }
    
});

router.delete("/product/:id",async(req,res)=>{
    try{
        var _id=req.params.id;
        const data = await Product.findOneAndDelete(_id);
        res.status(201).send(data);
    }catch(err){
        res.status(500).send(err);
        console.log(err);
    }
    
})


module.exports=router;